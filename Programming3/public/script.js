
function RandInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}
var matrix = [];
var n = 20;
var m = 20;

for (var i = 0; i <= n; ++i) {
    matrix[i] = [];
}
for (var y = 0; y <= n; y++) {
    for (var x = 0; x <= m; x++) {
        matrix[y][x] = 0;
    }
}
var tokos1 = 100;
var tokos2 = 6;
var tokos3 = 5;
var tokos4 = 4;
var tokos5 = 3;
var tokos6 = 5;

var qanak1 = n * m * tokos1 / 100;
var qanak2 = n * m * tokos2 / 100;
var qanak3 = n * m * tokos3 / 100;
var qanak4 = n * m * tokos4 / 100;
var qanak5 = n * m * tokos5 / 100;
var qanak6 = n * m * tokos6 / 100;

for (var z = 0; z < qanak1; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 1;
}
for (var z = 0; z < qanak2; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 2;
}
for (var z = 0; z < qanak3; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 3;
}
for (var z = 0; z < qanak4; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 4;
}
for (var z = 0; z < qanak5; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 5;
}
for (var z = 0; z < qanak6; ++z) {
    var rx = RandInt(0, m);
    var ry = RandInt(0, n);
    matrix[ry][rx] = 6;
}

var side = 10;
var grassArr = [];
var xotakerArr = [];
var xotakerqanak = 0;
var xotaker1 = []
var gishatichArr = [];
var sunkArr = [];
var vozniArr = [];
var vorsordArr = [];
var Mlenght = [];
var Arr = [];
var exanak = "garun";
var h1;

function setup() {
    h1 = document.getElementById('exanak');
    h1.innerText = exanak;
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    //   noStroke();

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var ser = Math.round(Math.random()) / 2;
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y, ser));
                matrix[y][x] += ser;
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y, ser));
                matrix[y][x] += ser;
            }
            else if (matrix[y][x] == 4) {
                sunkArr.push(new Sunk(x, y));
            }
            else if (matrix[y][x] == 5) {
                vozniArr.push(new Vozni(x, y, ser));
                matrix[y][x] += ser;
            }
            else if (matrix[y][x] == 6) {
                vorsordArr.push(new Vorsord(x, y));

            }
        }
    }
}
function draw() {
    if (exanak == 'amar') {
        frameRate(11);
    }
    else if (exanak == 'dzmer') {
        frameRate(3);
    }
    else {
        frameRate(5);
    }

    if (exanak == 'garun') {
        grasscolor = '#00cc66';
    }
    else if (exanak == 'amar') {
        grasscolor = '#00cc00';
    }
    else if (exanak == 'ashun') {
        grasscolor = '#317e02';
    }
    else if (exanak == 'dzmer') {
        grasscolor = '#b5e3c8';
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill(grasscolor);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill(grasscolor);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#999966");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#996600");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("red");
                rect(x * side, y * side, side, side);
            }

        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();

    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
    }
    for (var i in sunkArr) {
        sunkArr[i].bazmanal();
    }
    for (var i in vozniArr) {
        vozniArr[i].utel();
    }
    for (var i in vorsordArr) {
        vorsordArr[i].utel();
    }
    if (xotakerArr.lenght == 0) {
        var x = RandInt(0, m);
        var y = RandInt(0, n);
        if (matrix[y][x] < 2) {
            matrix[y][x] = 2;
            xotakerArr.push(new xotaker(x, y));
            if (matrix[y][x] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
}
//------------------exanak-----------------//
setInterval(function () {
    if (exanak == "dzmer") {
        exanak = "garun";
        h1.innerText = "garun";
    }
    else if (exanak == "garun") {
        exanak = "amar";
        h1.innerText = "amar";
    }
    else if (exanak == "amar") {
        exanak = "ashun";
        h1.innerText = "ashun";
    }
    else if (exanak == "ashun") {
        exanak = "dzmer";
        h1.innerText = "dzmer";
    }

}, 4000);

if (xotaker1 > 0 && matrix[0][Mlenght] < 2 && exanak != 3) {
    var ser = Math.random(Math.random()) / 2;
    xotakerArr.push(new Xotaker(Mlenght, 0, ser));
    matrix[0][Mlenght] = 2 + ser;
    --xotaker1;
}

