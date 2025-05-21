
 const ChangePassword = () => {
  return (
    <> 
   <form className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
         <h2 className="text-lg font-semibold mb-4 text-center text-gray-400">Change password</h2>
   
         <div>
           <label className="block mb-1 font-medium text-gray-400" required>OLD PASSWORD</label>
           <input
             type="password"
             name="oldpasw"
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
   
         <div>
           <label className="block mb-1 font-medium text-gray-400" required>NEW PASSWORD</label>
           <input
             type="password"
             name="newpassword"
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
   
         <div>
           <label className="block mb-1 font-medium text-gray-400" required>CONFORM PASSWORD</label>
           <input
             type="password"
             name="conform"
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
             
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
export default ChangePassword

