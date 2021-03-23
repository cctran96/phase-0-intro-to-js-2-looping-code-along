function writeCards(names, event) {
    var array = []
    for (var i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return array
}

function countDown(n) {
    while (n >= 0) {
        console.log(n)
        n--
    }
}