const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 px-4">
      <div className="bg-white max-w-md w-full p-10 rounded-3xl shadow-2xl border border-emerald-100 text-center">

        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-emerald-100">
          <svg
            className="w-10 h-10 text-emerald-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-purple-600 mb-3">
          Account Created Successfully
        </h1>

        <p className="text-slate-600 mb-8">
          Your account has been successfully created.  
          You can now access your dashboard and start using our platform.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
};

export default Success;