// 7 kyu - number with 3 roots
function perfectRoots(n){
  if (Math.pow(n, 1/2)%1!=0 || Math.pow(n, 1/4)%1!=0 || Math.pow(n, 1/8)%1!=0) {
    return false;
  }
  return true;
}
 
