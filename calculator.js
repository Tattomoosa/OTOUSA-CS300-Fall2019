let lhs_el = document.querySelector("#lhs")
let op_el = document.querySelector("#op")
let rhs_el = document.querySelector("#rhs")
let out = document.querySelector('#out')

console.log('loaded')

function calculate(e) {
    console.log(e)
    let lhs = lhs_el.value
    let rhs = rhs_el.value
    let op = op_el.options[e.selectedIndex].value
    // lol
    let text = '' + lhs.value + op + rhs.value
    console.log(text)
}

lhs_el.addEventListener('change', calculate)
rhs_el.addEventListener('change', calculate)
op_el.addEventListener('change', calculate)
