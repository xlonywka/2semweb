function speedConverter(valNum, flag) {
    if (flag == 1) {
        document.getElementById("inp1").innerHTML = valNum;
        document.getElementById("output1").innerHTML = valNum * 3.6;
    }
    else {
        document.getElementById("inp2").innerHTML = valNum;
        document.getElementById("output2").innerHTML = valNum / 3.6;
    }

}
function Triangle() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    if ((a > 0) && (b > 0) && (c > 0) && (a + b > c) && (b + c > a) && (a + c > b)) {
        var p = (a + b + c) * 0.5; //Вычисление полупериметра
        var s = Math.sqrt(p * (p - a) * (p - b) * (p - c)); //Вычисление площади
        document.getElementById("Tout").innerHTML = "Треугольник существует <br>Периметр = " + p * 2 + "<br>Площадь = " + s + "<br>Соотношение = " + ((p * 2) / s);

    } else {
        document.getElementById("Tout").innerHTML = "Треугольника не существует";
    }
}
function FizzBuzz(count) {
    let fbs = "";
    var cc = Number(count);
    for (var i = 0; i < cc + 1; i++) {
        if (i == 0) {
            fbs += i + " buzz<br>"
        }
        else if (i % 5 == 0) {
            fbs += i + " fizz buzz<br>"
        }
        else if (i % 2 == 0) {
            fbs += i + " buzz<br>"
        }
        else {
            fbs += i + " fizz<br>"
        }
    }
    document.getElementById("fbout").innerHTML = fbs;
}
function CTree() {
    var treeH = Number(document.getElementById('treeH').value) - 1;
    let fbs = "";
    let letter;
    fbs += ">"
    for (var i = 0; i < treeH; i++) {
        if (i % 2 == 0) {
            letter = "#"
        }
        else {
            letter = "*"
        }
        for (var j = 0; j < i; j++) {
            fbs += letter;
        }
        fbs += "<br>";
    }
    fbs += "||"
    document.getElementById("ctree").innerHTML = fbs;
}

var numberr;
function randn() {
    numberr = Math.floor(Math.random() * 50);
    console.log(numberr);
}

function guessn(ng) {
    if (typeof (numberr) != 'number') {
        document.getElementById("guessres").innerHTML = "Сначала загадайте число"
    }
    else {
        if (ng < numberr) {
            document.getElementById("guessres").innerHTML = "ваше число меньше"
        }
        else if (ng > numberr) {
            document.getElementById("guessres").innerHTML = "ваше число больше"
        }
        else {
            document.getElementById("guessres").innerHTML = "угадано"
        }
    }
}

function Devision() {
    var n = Number(document.getElementById('n').value);
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    if (x <= 0 || y <= 0) {
        document.getElementById("devcheck").innerHTML = "некорректный ввод"
    }
    else if (n % x == 0 && n % y == 0) {
        document.getElementById("devcheck").innerHTML = "true"
    }
    else {
        document.getElementById("devcheck").innerHTML = "false"
    }
}
function quarter(month) {
    if ((month >= 1) && (month <= 12) && (month % 1 == 0)) {
        document.getElementById("monthc").innerHTML = "месяц " + month + " => " + Math.ceil(month / 3) + " квартал";
    }
    else {
        document.getElementById("monthc").innerHTML = 'некорректный ввод'
    }
}