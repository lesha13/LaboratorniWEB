let N = parseInt(prompt("Seconds: ", ""))
alert(`Hours: ${Math.floor(N/3600)} \nMinutes: ${Math.floor(N%3600/60)} \nSeconds: ${N%3600%60}`)