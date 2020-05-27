var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

var x1 = 0,
    x2 = 452,
    zaman,

    zaman = window.setInterval("ireli1()", 10);

function ireli1() {
    box1.style.left = x1 + "px";
    if (x1 == 401) {
        window.clearInterval(zaman);
        zaman = window.setInterval("ireli2()", 10)
    }
    x1++;
}

function ireli2() {
    box2.style.left = x2 + "px";
    if (x2 == 800) {
        window.clearInterval(zaman);
        zaman = window.setInterval("geri2()", 10)

    }
    x2++;
}

function geri2() {
    box2.style.left = x2 + "px";
    if (x2 == 451) {
        window.clearInterval(zaman);
        zaman = window.setInterval("geri1()", 10);
    }
    x2--;
}

function geri1() {
    box1.style.left = x1 + "px";
    if (x1 == 0) {
        window.clearInterval(zaman);
        zaman = window.setInterval("ireli1()", 10)
    }
    x1--;
}

// Rustamov Tamerlan. 
// Moving Bboxes.