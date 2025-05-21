

const SalesReportDetailTable = [
  
    {
         
        orderId: "0801252",
        date: "04:46 PM, 08-01-2025",
        total: "136.50",
        discount:"0.00",
        shippingCharge:"0.00",
        paymentType:"Cash",
        paymentStatus:"Paid"
         },
         {
         
            orderId: "01222",
            date: "04:46 PM, 02-06-2025",
            total: "176.50",
            discount:"0.00",
            shippingCharge:"0.00",
            paymentType:"Cash",
            paymentStatus:"Paid"
             },
            
        
  ];
  
  // Custom table headers 
  const SalesReportTableColums = [
     
      { key: "orderId", label: "Order Id" },
      { key: "date", label: "Date" },
      { key: "total", label: "Total" },
      { key: "discount", label: "Discount" },
      { key: "shippingCharge", label: "Shipping Charge" },
      { key: "paymentType", label: "Payment Type" },
      { key: "paymentStatus", label: "Payment Status" },
    ];
  
  export { SalesReportDetailTable, SalesReportTableColums };
  