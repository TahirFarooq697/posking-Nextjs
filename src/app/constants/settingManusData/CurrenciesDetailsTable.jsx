

const CurrenciesDetailsTable = [
  
    {name: "Naira",
      symbol:'₦',
          code: "NGN",
          IsCryptocurrency:"NO",
          ExchangeRate:'13',
          action:"",
         },
         {name: "taka",
          symbol:'৳	',
          code: "BDT",
          IsCryptocurrency:"NO",
          ExchangeRate:'1',
          action:"",
           },
        
        
  ];
  
  // Custom table headers 
  const CurrentiesTableCoums = [
     
      { key: "name", label: "Name" },
      { key: "symbol", label: "Symbol" },
      { key: "code", label: "Code" },
      { key: "IsCryptocurrency", label: "Is Cryptocurrency" },
      { key: "ExchangeRate", label: "Exchange Rate" },
      { key: "action", label: "Action" },
    ];
  
  export { CurrenciesDetailsTable, CurrentiesTableCoums };
  