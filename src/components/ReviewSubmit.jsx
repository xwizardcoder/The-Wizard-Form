


const ReviewSubmit = ({ data, onSubmit }) => {
  return (
    <div className="space-y-6">

      <div className="bg-gray-50 p-6 rounded-xl border space-y-3">
        <h2 className="font-semibold text-lg mb-4">
          Review Your Details
        </h2>

        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>Date of Birth:</strong> {data.dob}</p>
        <p><strong>Email:</strong> {data.email}</p>
       
      </div>

      <button
        onClick={onSubmit}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-pink-700"
      >
        Confirm & Submit
      </button>

    </div>
  );
};

export default ReviewSubmit;