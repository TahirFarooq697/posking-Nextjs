

 const EditProfile = () => {
  return (
    <>
    
    <form className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4 mt-4">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-400">Edit Profile</h2>

      <div>
        <label className="block mb-1 font-medium text-gray-400">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-400">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-400">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
          placeholder="Enter your phone number"
        />
      </div>

      <button
        type="submit"
        className="w-23 bg-[#F23E14] text-white py-2 rounded transition hover:cursor-pointer"
      >
        save
      </button>
    </form>
    </>
  );
 
  
}
export default EditProfile

