const { totalmem } = require("os");

const transition = [
    { category: "food", exp: 100 },
    { category: "food", exp: 100 },
    { category: "clothing", exp: 50 },
    { category: "transportation", exp: 30 },
    { category: "entertainment", exp: 80 }
];
totaltransition={};

for(item of transition)
    {
        if(totaltransition[`${item.category}`])
        {
          
            totaltransition[`${item.category}`].exp+=item.exp;

        }
        else{
            totaltransition[`${item.category}`] = item.exp;
        }
    }
    totaltransition=[totaltransition];
   console.log(totaltransition)