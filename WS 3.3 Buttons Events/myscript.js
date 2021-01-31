function changeBackground() {
    document.body.style.background = 'grey';
}

function deleteFirst() {
    document.getElementById("button1").remove();
}

function allUpercase() {
    //not optimized but it didn't worked with getElementById with a div block
    document.getElementById("button2").innerHTML = document.getElementById("button2").innerHTML.toUpperCase();
    document.getElementById("button3").innerHTML = document.getElementById("button3").innerHTML.toUpperCase();
    document.getElementById("button4").innerHTML = document.getElementById("button4").innerHTML.toUpperCase();
    document.getElementById("button5").innerHTML = document.getElementById("button5").innerHTML.toUpperCase();
    document.getElementById("button6").innerHTML = document.getElementById("button6").innerHTML.toUpperCase();
    document.getElementById("button7").innerHTML = document.getElementById("button7").innerHTML.toUpperCase();
    if (document.getElementById("button1")) {
        document.getElementById("button1").innerHTML = document.getElementById("button1").innerHTML.toUpperCase();
    }
}

function allLowercase() {
    //not optimized but it didn't worked with getElementById with a div block
    document.getElementById("button2").innerHTML = document.getElementById("button2").innerHTML.toLowerCase();
    document.getElementById("button3").innerHTML = document.getElementById("button3").innerHTML.toLowerCase();
    document.getElementById("button4").innerHTML = document.getElementById("button4").innerHTML.toLowerCase();
    document.getElementById("button5").innerHTML = document.getElementById("button5").innerHTML.toLowerCase();
    document.getElementById("button6").innerHTML = document.getElementById("button6").innerHTML.toLowerCase();
    document.getElementById("button7").innerHTML = document.getElementById("button7").innerHTML.toLowerCase();
    if (document.getElementById("button1")) {
        document.getElementById("button1").innerHTML = document.getElementById("button1").innerHTML.toLowerCase();
    }
}

function helloWorldCenter() {
    document.getElementById("helloWorld").innerHTML = "HELLO WORLD!";
}

function playSound() {
    var sound = document.getElementById("mySound");
    sound.play();
    if (sound.play()) {
        document.getElementById("button6").innerHTML = "Sound is playing";  
    }
    setTimeout(function(){
        document.getElementById("button6").innerHTML = "Play a sound";
    },4000);
}

function disappear() {
    document.getElementById("button2").remove();
    document.getElementById("button3").remove();
    document.getElementById("button4").remove();
    document.getElementById("button5").remove();
    document.getElementById("button6").remove();
    if (document.getElementById("button1")) {
        document.getElementById("button1").remove();
    }
}

function toldyou() {
    document.getElementById("button7").innerHTML = "Told you so... Now you can refresh the page to have everything back";
    document.getElementById("button7").style.backgroundColor = "purple";
}
