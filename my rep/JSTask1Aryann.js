
        
    const apparel = [
        {
            Name: "Jeans",
            Category: "clothes",
            Brand: "Levi",
            Actual_price: 2209,
            Discount: 10
        },
        {
            Name: "Silk Saree",
            Category: "clothes",
            Brand: "Soch",
            Actual_price: 6560,
            Discount: 33
        },
        {
            Name: "T-shirts",
            Category: "clothes",
            Brand: "Westworld",
            Actual_price: 850,
            Discount: 0
        },
        {
            Name: "Dhothi",
            Category: "clothes",
            Brand: "MCR",
            Actual_price: 1570,
            Discount: 2
        },
        {
            Name: "Crocs",
            Category: "shoes",
            Brand: "Killer",
            Actual_price: 2797,
            Discount: 30
        },
        {
            Name: "90s Runner",
            Category: "shoes",
            Brand: "Puma",
            Actual_price: 4999,
            Discount: 50
        },
        {
            Name: "Men's Boots",
            Category: "shoes",
            Brand: "Puma",
            Actual_price: 3999,
            Discount: 50
        },
        {
            Name: "Diamond Ring",
            Category: "jewellery",
            Brand: "Bluestone",
            Actual_price: 14800,
            Discount: 0
        },
        {
            Name: "Gold earring",
            Category: "jewellery",
            Brand: "Tanishq",
            Actual_price: 21529,
            Discount: 6
        },
        {
            Name: "Choker",
            Category: "accessories",
            Brand: "Womanista",
            Actual_price: 129,
            Discount: 0
        },
        {
            Name: "Watch",
            Category: "accessories",
            Brand: "Sonic",
            Actual_price: 2534,
            Discount: 2
        }
        ];
    // Task 1 making a list of all the items
        let namelist=[];
        for(item in apparel)
        {
            namelist.push(apparel[item].Name);
        }
        console.log(namelist);
    // Task 2 Consider the second item in the list and extract its name and actual_price and move the remaining properties to another variable */
        
        let item2list=[];
        let remainingitemlist=[];
        for(item2 in apparel[1])
        {
            if(item2=="Name" || item2== "Actual_price")
            {
                item2list.push(apparel[1][item2]);
            }
            else
            {
                remainingitemlist.push(apparel[1][item2]);
            }
        }
        console.log(item2list, remainingitemlist);
         
    /* Task 3 Iterate through each item in the list to compute the selling price according to the formula
    (selling price = actual_price*(1-discount/100)).
    Append that value to an item and create a new list consisting of the modified items */

        let apparel2=[];
        for(item in apparel)
        {
          let item2 = {
            "Name" : apparel[item].Name,
            "Category" : apparel[item].Category,
            "Brand" : apparel[item].Brand,
            "Actual_Price" : apparel[item].Actual_Price,
            "Discount" : apparel[item].Discount,
            "Selling_Price" : apparel[item].Actual_price * (1-(apparel[item].Discount)/100) } ;
            apparel2.push(item2);
        }
        console.log(apparel2);
        
    
    