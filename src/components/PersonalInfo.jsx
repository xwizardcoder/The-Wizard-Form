

const PersonalInfo = ({ register, errors }) => {
  return (
    <div className="space-y-4">

      <div>
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="w-full p-3 border rounded-lg"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="w-full p-3 border rounded-lg"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="date"
          {...register("dob")}
          className="w-full p-3 border rounded-lg"
        />
        {errors.dob && (
          <p className="text-red-500 text-sm">
            {errors.dob.message}
          </p>
        )}
      </div>

    </div>
  );
};

export default PersonalInfo;