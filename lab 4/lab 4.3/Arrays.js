function Random(min, max) 
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

// 1
let K = parseInt(prompt("Input number of subjects", "5"))
let marks = Array()

for (let i = 1; i <= K; i++) {
    marks.push(parseInt(prompt("Mark: ", "")))
}
marks = marks.sort((a, b) => a - b)
alert(marks)

let average = marks.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / K

alert(`Average ${average}`)

switch(marks[0]){
    case 1:
        alert(`Двійочник`)
        break;
    case 2:
        alert(`Двійочник`)
        break; 
    case 3:
        alert(`Трійочник`)
        break; 
    case 4:
        alert(`Хорошист`)
        break; 
    case 5:
        alert(`Відмінник`)
        break; 
}

// 2
let days = Array()
for (let i = 1; i <= 7; i++) {
    days.push(parseInt(prompt("Number: ", "")))
}

for (let i = 0; i <= 6; i++) {
    if (days[i]) {alert(i+1)}}
alert(`min: ${Math.min(days)}`)
alert(`max: ${Math.max(days)}`)
alert(`all: ${days.reduce((previousValue, currentValue) => previousValue + currentValue, 0)}`)
alert(`saturday: ${days[5]}, sunday: ${days[6]}`)

// 3
let name = prompt("Ім'я: ", "Юрій")
let names = ["Юрій", "Юрій", "Юрій", "Юрій", "aaa", "bbb", "ccc"]

alert(names.filter(el => el === name).length)

// 4
let prises = Array()
let used = Array()
for (let i = 1; i <= 10; i++) {
    prises.push(Random(-500, 500))
}
alert(prises)


let prise = 0
while (true) {
    let answear = prompt("type number or 'stop' ", "")
    if (answear == 'stop')
    {
        break
    }
    else   
    {   
        if (used.includes(answear))
        {   
            alert("the number was already used, try smth else")
            continue
        }
        else
        {
            used.push(answear)
            prise += prises[parseInt(answear)-1]
            alert(prise)
            alert(used)
        }
    }
}

alert(`Result: ${prise}`)
