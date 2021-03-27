// 6 kyu - Meeting
function meeting(s) {
  let split1 = s.toUpperCase().split(";");
  let split2 = []
  for (let i=0; i<split1.length; i++) {
    let temp = split1[i].split(":").reverse().join(', ')
    split2.push(temp)
  }
  let joined = split2.sort().join(')(');
  joined = "(" + joined + ")"
  return joined
}

// 6 kyu - Financing Plan on Planet XY140Z-n
function finance(n) {
  // each n week you save ((n+1-i)/2)*(i+n + i+n+1-(n+1-i))
  let total = 0
  for (let i=0; i<=n; i++) {
    total += ((n+1-i)/2)*(i+n + i+n+1-(n+1-i))
  }
  return total
}
