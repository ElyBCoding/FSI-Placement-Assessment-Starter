
let yourName = "Ely Beske"


let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let totalCookies = 0

let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')
let totalQty = document.querySelector('#qty-total')




// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const qtyTracker = document.querySelector('body')

// Code to update name display
credit.textContent = `Created by ${yourName}`

gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    totalCookies = totalCookies + 1
    console.log('Gingerbread = ' + gb)

    
})
gbMinusBtn.addEventListener('click', function() {
    if (gb > 0){
    gb = gb - 1
    totalCookies = totalCookies - 1
    }
    console.log('Gingerbread = ' + gb)
})



ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    totalCookies = totalCookies + 1
    console.log('Chocolate Chip = ' + cc)
})
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0){
    cc = cc - 1
    totalCookies = totalCookies - 1
    }
    console.log('Chocolate Chip = ' + cc)
})


sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    totalCookies = totalCookies + 1
    console.log('Sugar Sprinkle = ' + sugar)
})
sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0){
        sugar = sugar - 1
        totalCookies = totalCookies - 1
    }
    console.log('Sugar Sprinkle = ' + sugar)
})

qtyTracker.addEventListener('click', function(){
    gbQty.textContent = gb
    ccQty.textContent = cc
    sugarQty.textContent = sugar
    totalQty.textContent = totalCookies
})