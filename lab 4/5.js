let a = parseInt(prompt("a: ", ""))
let b = parseInt(prompt("b: ", ""))
let c = parseInt(prompt("c: ", ""))

alert(`a=${a} b=${b} c=${c}`)
//[a, b, c] = [b, c, a]
let extra = a
a = b
b = c
c = extra
alert(`a=${a} b=${b} c=${c}`)