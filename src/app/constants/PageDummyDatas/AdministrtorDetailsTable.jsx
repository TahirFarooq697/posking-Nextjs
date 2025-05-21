

const AdministrtorDetailsTable = [
  
  {
       
        name: "Tahir",
        email: "tahir@gmail.com",
        phone: "+92123444",
        status:"Active",
        action:"",
       },
       {
       
        name: "Ahmd",
        email: "ah@gmail.com",
        phone: "+9212122314",
        status:"Active",
        action:"",
       },
       
];

// Custom table headers 
const AdministrtorTableColumns = [
   
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];

export { AdministrtorDetailsTable, AdministrtorTableColumns };


export const adminFields = [
  { label: "Email", name: "email", type: "text" },
  { label: "Phone", name: "phone", type: "text" },
  { label: "Status", name: "status", type: "text" }
];
