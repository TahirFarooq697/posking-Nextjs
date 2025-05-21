

const ProductCategoriesTable = [
  
    {
         
          name: "Clothing",
          parentCategory: "men",
          status:"Active",
          action:"",
         },
         {
         
            name: "Hoodies & Sweatshirts",
            parentCategory: "Clothing",
            status:"Active",
            action:"",
           },
          
  ];
  
  // Custom table headers 
  const ProductCategoriesTableColums = [
     
      { key: "name", label: "Name" },
      { key: "parentCategory", label: "Parent Category" },
   
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ];
  
  export { ProductCategoriesTable, ProductCategoriesTableColums };
  