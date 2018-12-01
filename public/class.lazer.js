class Lazer {
    constructor(x, y, index) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.energy =8;
        this.acted = false;
        this.directions = [];
        this.directions1 = [];


    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 4],
            [this.x, this.y - 3],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x, this.y + 3],
            [this.x, this.y + 4],
        ];

        this.directions1 = [
            [this.y, this.x - 4],
            [this.y, this.x - 3],
            [this.y, this.x - 2],
            [this.y, this.x - 1],
            [this.y, this.x + 1],
            [this.y, this.x + 2],
            [this.y, this.x + 3],
            [this.y, this.x + 4],

        ];
    }
    chooseCell1(num, num1, num2, num3) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num || matrix[y][x] == num1 || matrix[y][x] == num2 || matrix[y][x] == num3) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num || matrix[y][x].index == num1 || matrix[y][x].index == num2 || matrix[y][x].index == num3) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    chooseCell(num, dir) {
        this.getNewCoordinates();
        var found = [];
        for (var i in dir) {
            var x = dir[i][0];
            var y = dir[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0, this.directions));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];


                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;

                this.energy--;

                if (this.energy <= 3) {
                    this.die();
                }
                this.acted = true;
            }
        }
    }
    eat() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell1(1, 2, 3, 4));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;

                this.energy++;
                console.log("eat");
                if (this.energy >= 10) {
                    this.mul();
                    this.energy = 5;
                }
                this.acted = true;
            }
            else {
                this.move();
            }
        }

    }
    mul() {
        var newCell = random(this.chooseCell(0, this.directions1));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Lazer(newX, newY, 5);

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }


}