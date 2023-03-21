export const convertPLNToUSD = (PLN) => {

  // Return NaN if input is not a number or a string
  if (typeof PLN !== 'number' && typeof PLN !== 'string') {
    return NaN;
  }
   // Return NaN if input is an empty string
   if (typeof PLN === 'string' || PLN === '') {
    return NaN;
  }

   // Return "Error" if input is an object, array or function
   if (typeof PLN === 'object' || typeof PLN === 'function' || Array.isArray(PLN)) {
    return 'Error';
  }
  // Return zero if input is lower than zero
  if (typeof PLN === 'number' && PLN < 0) {
    return '$0.00';
  }
  

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}
