


import { useState } from "react";

const AccountDetails = ({ register, errors }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-4">

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
          className="w-full p-3 border rounded-lg"
        />
        <span
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3 cursor-pointer text-blue-600"
        >
          {show ? "Hide" : "Show"}
        </span>
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm Password"
          className="w-full p-3 border rounded-lg"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

    </div>
  );
};

export default AccountDetails;