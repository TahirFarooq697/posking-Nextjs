

const EmployeeDetailsTable = [
  
    {
         
          name: "Tahir",
          email: "tahir@gmail.com",
          phone: "+92123444",
          status:"Active",
          action:"",
         },

         {
         
          name: "Farooq",
          email: "Farooq@gmail.com",
          phone: "+921232232",
          status:"Active",
          action:"",
         },
        
  ];
  
  // Custom table headers 
  const EmployeeTableColumns = [
     
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ];
  
  export { EmployeeDetailsTable, EmployeeTableColumns };
  