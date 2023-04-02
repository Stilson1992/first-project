const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;
let num1 = 2;
let num2 = 1;

function generate_equation(){
    var allAnswers = [];
    var switchAnswers =[];

    answer = num1 * num2;

    var dummyAnswer1 = answer - 2;
    var dummyAnswer2 = answer + 2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for(i = allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }


    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];

     if (num2 < 10) {
        for (i = 1; i <= 9; i++) {
            num2 = num2 + i;
            return num2;
        }
    } else {
        return num2 = 1;
    }
}

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
        generate_equation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
        generate_equation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
        generate_equation();
    } else {
        audio.play();
    }
});

generate_equation();