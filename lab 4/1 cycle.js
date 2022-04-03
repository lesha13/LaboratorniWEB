let num1 = prompt("input num", "")
let num2 = prompt("input num", "")
let a = num2 > num1
while (true)
{
    if (!((num2 > num1 & a) || (num2 < num1 & !a)))
        break
    num1 = num2
    num2 = prompt("input num", "")
}