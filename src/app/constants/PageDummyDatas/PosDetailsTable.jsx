

const PosDetailsTable = [
  
    {
         
        orderId: "12233",
        customer: "tahir",
        amount: "1213",
        date:"12-11-2014",
        status:"Pending",
         },
         {
         
          orderId: "11113",
          customer: "farooq",
          amount: "1213",
          date:"12-11-2014",
          status:"Pending",
           },
        
  ];
  
  // Custom table headers 
  const PosTableColumn = [
     
      { key: "orderId", label: "OrderId" },
      { key: "customer", label: "customer" },
      { key: "amount", label: "amount" },
      { key: "date", label: "Date" },
      { key: "status", label: "Status" },
    ];
  
  export { PosDetailsTable, PosTableColumn };
  