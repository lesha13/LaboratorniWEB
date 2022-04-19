function Random(min, max) 
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

let operations = ["+", "-", "*"]

document.getElementById("generate").onclick = () =>
{
    document.getElementById("num-1").innerHTML = Random(1,11)
    document.getElementById("num-2").innerHTML = Random(1,11)
    document.getElementById("op").innerHTML = operations[Random(0, 3)]
    return;
}

document.getElementById("check").onclick = () =>
{   
    let answer = document.getElementById("answer").value

    result = parseInt(eval(document.getElementById("num-1").innerHTML+ document.getElementById("op").innerHTML + document.getElementById("num-2").innerHTML))

    if (result == answer)
    {
        document.getElementById("result").innerHTML = "Правильно!"
    }
    else
    {
        document.getElementById("result").innerHTML = "Неправильно!"
    }
}