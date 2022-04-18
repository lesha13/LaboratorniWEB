// фактично це фібоначчі
let n = parseInt(prompt("input num", ""))
let k = parseInt(prompt("input num", ""))
n1 = n2 = 1
for (let i = 3; i <= k; i++)
{
    extra = n2
    n2 = n1 + n2
    n1 = extra
}
alert(n2 * n)