let arr = [33,3,0,4,1,52];
const getminNum = (arr)=>{
   return arr.sort((a,b)=>(''+a+b)-(''+b+a)).join('')
}
console.log(getminNum(arr));