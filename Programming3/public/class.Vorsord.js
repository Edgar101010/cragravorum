class Vorsord extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
        this.directions = [];
        this.index = 2;

    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    utel() {
         if (this.energy > 20) {
            return this.mahanal();
        }
         var vandak3 = random(this.yntrelVandak(3));
        if (vandak3) {
            matrix[this.y][this.x] = 0;
            this.x = vandak3[0]
            this.y = vandak3[1]
            matrix[this.y][this.x] = 6;
            this.energy++;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
        var vandak1 = random(this.yntrelVandak(1));
        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.x = vandak1[0]
            this.y = vandak1[1]
            matrix[this.y][this.x] = 6;
             this.energy++;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }

        }
        else {
            this.sharjvel();
        }
    }

    sharjvel() {


        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 6;
            this.energy--;
            if (this.energy <= 0) {
                this.mahanal();
            }
        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in vorsordArr) {
            if (vorsordArr[i].x == this.x && vorsordArr[i].y == this.y) {
                vorsordArr.splice(i, 1);
            }
        }
    }
}