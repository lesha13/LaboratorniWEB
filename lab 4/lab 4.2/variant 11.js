// exercise 11
function CreateTable(columns=1, rows=1){
    let columnsTemplate = ""
    let rowsTemplate = ""

    for (let i = 1; i <= columns; i++) {
        columnsTemplate += `<td>AAA</td>`
    }

    for (let i = 1; i <= rows; i++) {
        rowsTemplate += `<tr>${columnsTemplate}<tr>\n`
    }

    return rowsTemplate
}

alert(CreateTable(2,2))

// exercise 12
alert(
(function(number){
    if ([12,1,2].includes(number)) {return "winter"}
    if ([3,4,5].includes(number)) {return "spring"}
    if ([6,7,8].includes(number)) {return "summer"}
    if ([9,10,11].includes(number)) {return "autmn"}
    else return "smth wrong"
})(10))

// exercise 10
let average = (num1, num2, num3, num4) => {return (num1+num2+num3+num4)/4}
average(1,2,3,4)
