// 7 kyu Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
  let total = principal;
  let years = 0;
  while (total < desired) {
    years++;
    total += (total * interest) * (1 - tax);
  }
  return years;
}

// Not good, first attempt
function calculateYears(principal, interest, tax, desired) {
  let total = principal;
  let years = 0;
  while (total < desired) {
    years++;
    total += Number((total * interest).toFixed(2));
    total -= Number((total * interest * tax).toFixed(2));
  }
  return years;
}
