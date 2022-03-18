function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; // throw keyword is used here
  }
}

console.log(getMonthName(12));

try {
  throw 'A custom exception'; // generates an exception
}
catch (err) {
  // statements to handle any exceptions
  console.error(err);    // pass exception object to error handler
}
