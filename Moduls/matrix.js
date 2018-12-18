for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = random([0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4]);
    }
}
console.log(matrix);

matrix[20][5] = 5;
matrix[28][35] = 5;
matrix[12][46] = 5;

for (var y = 0; y < n; y++) {
    for (var x = 0; x < m; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Gishatich(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Aylmolorakayin(x, y, 4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new Lazer(x, y, 5);
        }
    }
}
console.log(matrix);
module.exports =matrix; 



// var time = frameRate(1);
// function frameRate(frameCount) {
//     return 1000 / frameCount;
// }

// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x].index == 1) {
//                 matrix[y][x].mul();
//             }
//             else if (matrix[y][x].index == 2) {
//                 matrix[y][x].eat();
//             }
//             else if (matrix[y][x].index == 3) {
//                 matrix[y][x].eat();
//             }
//             else if (matrix[y][x].index == 4) {
//                 matrix[y][x].eat();
//             }
//             else if (matrix[y][x].index == 5) {
//                 matrix[y][x].eat();
//             }
//         }
//     }
// }
// setInterval(draw, time)

