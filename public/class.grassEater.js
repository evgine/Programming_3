class GrassEater extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.tariq = 0;
        this.energy = 8;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
 

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
 

    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));//Գտնել շրջակա դատարկ վանդակները_Պատահականության սկզբունքով ընտրել դրանցից մեկը
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;//Մատրիցում նախորդ վանդակի թիվը դարձնել 0

                this.x = newX;//Փոխել այդ խոտակերի this.x 
                this.y = newY;//եւ this.y հատկանիշների արժեքները նոր վանդակի կորդինատներով

            }
            this.energy--;//Փոքրացնել էներգիան 1-ով
            if (this.energy <= 0) {
                this.die();
            }
            this.acted = true;
        }

    }
    eat() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(1));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 9
                ) {
                    this.mul();
                    this.energy = 6;
                }
                this.acted = true;
            }
            else {
                this.move();
            }
        }

    }
    mul() {
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new GrassEater(newX, newY, 2);
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
    }

}