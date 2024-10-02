// Write your solution in this file!

// Declare customerName in global scope
var customerName = 'bob';

// Function to return the customerName
function getCustomerName() {
  return customerName;
}

// Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
  var bestCustomer = 'not bob';
  window.bestCustomer = bestCustomer;
}

// Function to overwrite the best customer
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Function that unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'someone';
  leastFavoriteCustomer = 'someone else'; // This will throw an error
}