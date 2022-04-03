let num1 = parseInt(prompt("input num", ""))
let num2 = parseInt(prompt("input num", ""))
let sum = 0
for (num1; num1<=num2; num1++)
{
    if (num1 % 2 === 1)
    {
        sum+=num1
    }
}
alert(sum)