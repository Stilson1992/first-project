const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 10);
    var dummyAnswer1 = Math.floor(Math.random() * 70);
    var dummyAnswer2 = Math.floor(Math.random() * 70);
    var allAnswers = [];
    var switchAnswers =[];

    if (num1 == 0) {
        num1 += 2;
    }
    if (num2 == 0) {
        num2 += 2;
    }


    answer = num1 / num2;

    while (Number.isInteger(answer) != true){
        num1++;
        answer = num1 / num2;
    }

    

    if (num1 >= num2) {
        document.getElementById("num1").innerHTML = num1;
        document.getElementById("num2").innerHTML = num2;
    } else if (num1 < num2) {
        document.getElementById("num1").innerHTML = num2;
        document.getElementById("num2").innerHTML = num1;
    }
    
    if (dummyAnswer1 == dummyAnswer2){
        dummyAnswer1 = (dummyAnswer1 + 4) * 2;
    }
    
    if (dummyAnswer1 == answer || dummyAnswer2 == answer) {
        dummyAnswer1 = (dummyAnswer1 + 8) * 2; 
        dummyAnswer2 = (dummyAnswer2 + 7) * 3;
    }

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for(i = allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }


    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
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