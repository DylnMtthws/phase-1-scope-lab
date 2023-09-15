var customerName = 'bob'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {//I don't understand why this didn't use var?
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'me'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'someone else'
}