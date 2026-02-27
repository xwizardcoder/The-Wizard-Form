import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";
import ReviewSubmit from "./ReviewSubmit";
import Success from "./Success";

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    dob: z.string().min(1, "Date of birth is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
  });

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    shouldUnregister: false
  });

  const nextStep = async () => {
    let fields = [];

    if (step === 1)
      fields = ["firstName", "lastName", "dob"];

    if (step === 2)
      fields = ["email", "password", "confirmPassword"];

    const valid = await trigger(fields);

    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) return <Success />;

  const data = watch();

  const isStep1Valid =
    data.firstName && data.lastName && data.dob;

  const isStep2Valid =
    data.email &&
    data.password &&
    data.confirmPassword &&
    data.password === data.confirmPassword &&
    data.password.length >= 8;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8">

        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">
            Create Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Step {step} of 3
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex-1 flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium transition ${
                  step >= num
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`flex-1 h-[2px] mx-2 ${
                    step > num ? "bg-blue-600" : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="w-full bg-slate-200 h-1.5 rounded-full mb-6">
          <div
            className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {step === 1 && (
            <PersonalInfo register={register} errors={errors} />
          )}

          {step === 2 && (
            <AccountDetails register={register} errors={errors} />
          )}

          {step === 3 && (
            <ReviewSubmit
              data={data}
              onSubmit={handleSubmit(onSubmit)}
            />
          )}

          {step < 3 && (
            <div className="flex justify-between pt-4 gap-3">

              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-full py-2 rounded-lg border border-slate-300 text-sm text-slate-600 hover:bg-slate-100 transition"
                >
                  Back
                </button>
              ) : (
                <div className="w-full" />
              )}

              <button
                type="button"
                onClick={nextStep}
                disabled={
                  (step === 1 && !isStep1Valid) ||
                  (step === 2 && !isStep2Valid)
                }
                className={`w-full py-2 rounded-lg text-sm font-medium text-white transition ${
                  (step === 1 && !isStep1Valid) ||
                  (step === 2 && !isStep2Valid)
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Next
              </button>

            </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;