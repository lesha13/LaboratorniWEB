let num = parseInt(prompt("Length of words: ", "2"))
let array = ["aaa", "bbbb", "ccccc", "dd", "eeeee"] // випадкові слова

alert(array.filter(word => word.length > num).length)