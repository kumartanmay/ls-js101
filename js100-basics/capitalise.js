let string = 'launch school tech & talk'
let arr = string.split(' ')

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1,arr[i].length);
}

console.log(arr.join(" "));