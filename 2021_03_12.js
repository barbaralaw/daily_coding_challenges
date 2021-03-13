// 7 kyu - Sum - Square Even, Root Odd
const sumSquareEvenRootOdd = ns => {
  return Number(ns.map(x => { return x%2===0 ? Math.pow(x,2) : Math.pow(x,.5)}).reduce((a,c)=>a+c).toFixed(2))
};
