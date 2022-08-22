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