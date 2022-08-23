const array1 = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20]
let newarray = []
for(i in array1)
{
    if(array1[i]%2==0)
    {
        newarray.push(array1[i]);
    }
}
console.log(newarray);

// Arrange Descending Order
newarray.sort(function(a,b){return b-a});
console.log(newarray);

// Emptying an array
newarray1 = [...newarray];
newarray1 = [];
console.log(newarray1); 

// 2
newarray1 = [...newarray];
newarray1.length =0;
console.log(newarray1); 





