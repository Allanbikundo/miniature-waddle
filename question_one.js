
var toggle = function toggle(val) {
    if (val == "closed")
        return "open"
    else
        return "closed";
}
function doorQuestion(doors) {
    for (var rounds = 1; rounds <= 100; rounds++) {
        // as the question suggests we only check the door if the rounds are 
        // divisible by themselves
        for (var i = 1; i <= 100; i++) {
            if (i % rounds == 0) {
                doors[i] = toggle(doors[i]);
            }
        }

    }
    //doors output
    for (var i = 1; i <= 100; i++) {
        console.log(doors[i] + " " + i);
    }

}


// this array was for tests only
var doors = []

for (let i = 0; i < 100; i++) {
    var randomBoolean = Math.random() < 0.5;
    console.log(randomBoolean)
    if (randomBoolean) {
        doors.push("open")
    }else{
        doors.push("closed")    
    }
}

console.log(doors)
doorQuestion(doors)