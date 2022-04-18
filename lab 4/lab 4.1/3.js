let age = parseInt(prompt("Age: ", ""))

if (age < 3){alert(`wait ${3 - age} years for kindergarten`)}
else if (age < 6){alert(`wait ${6 - age} years for school start`)}
else if (age < 17){alert(`wait ${17 - age} years for school end`)}
else if (age < 21){alert(`wait ${21 - age} years for bachelors degree`)}