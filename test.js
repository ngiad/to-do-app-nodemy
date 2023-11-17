let arr = [{ID : 1}]


// map  : update cac phan tu trong arr
console.log(arr.map((item) => item.ID === 2 ? item*10 : item));


// find 
console.log(arr.find((item) => item.ID === 7));


// filter 
console.log(arr.filter((item) => item.ID !== 7));