//Solucion 1
function spirallyTraverse(n) {
    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let len= matrix[0].length*matrix.length
    let right=true;
    let down=false;
    let left=false
    let up=false
    let horizontal=-1;
    let horizontalAux=matrix[0].length-1;
    let vertical=0;
    let verticalAux=matrix.length-1;
    let aux=[];
    for (var i = 0; i < len; i++) {
        if(right){
            horizontal++;
            matrix[vertical][horizontal ]=i+1
            if(horizontal===horizontalAux){
                right=false;
                down=true;
            }
        }else if(down){
            vertical++;
            matrix[vertical][horizontal ]=i+1
            if(vertical===verticalAux){
                down=false;
                left=true;
            }

        }else if(left){
            horizontal--;
            matrix[vertical][horizontal ]=i+1
            if(horizontal===(matrix[0].length-1)-horizontalAux){
                left=false;
                up=true;
                verticalAux--;
            }
        }else if(up){
            vertical--;
            matrix[vertical][horizontal ]=i+1
            if(vertical===(matrix.length-1)-verticalAux){
                up=false;
                right=true;
                horizontalAux--;
            }
        }
    }

    return matrix;
}
function spirallyTraverse2(matrix, r, c) {
    let len = matrix[0].length * matrix[0].length;
    let rightRow = matrix[0].length - 1; // Corregido: Inicializar en c - 1
    let right = true;
    let downCol = matrix[0].length;
    let down = false;
    let leftRow = 0;
    let left = false;
    let upCol = 0;
    let up = false;
    let aux = [];

    while (aux.length < len) { // Corregido: Usar un bucle while para garantizar que se recorra la matriz completa
        if (right) {
            for (let i = leftRow; i <= rightRow; i++) {
                aux.push(matrix[upCol][i]);
            }
            right = false;
            down = true;
            upCol++;
        } else if (down) {
            for (let i = upCol; i < downCol; i++) {
                aux.push(matrix[i][rightRow]);
            }
            down = false;
            left = true;
            rightRow--;
        } else if (left) {
            for (let i = rightRow; i >= leftRow; i--) {
                aux.push(matrix[downCol - 1][i]);
            }
            left = false;
            up = true;
            downCol--;
        } else if (up) {
            for (let i = downCol - 1; i >= upCol; i--) {
                aux.push(matrix[i][leftRow]);
            }
            up = false;
            right = true;
            leftRow++;
        }
    }

    return aux;
}

/*
function spirallyTraverse(matrix, r, c) {
    let len= matrix[0].length*matrix[0].length
    // let len= matrix[0].length*matrix[0].length+1
    let rightRow=matrix[0].length
    let right=true;
    let downCol=matrix.length
    let down=false;
    let leftRow=matrix[0].length
    let left=false
    let upCol=matrix.length
    let up=false

    let aux=[];
    for (var i = 0; i <= len; i++) {

        if(right){
            console.log('right-----------')
            let rightAux=rightRow;
            if(rightAux===0){
                console.log('right  0 -----------')
                // rightRow--;
                rightAux=rightRow;
                right=false;
                down=true;
                downCol--;
            }else {
                aux.push(matrix[downCol - upCol][ leftRow - rightAux ])
                rightRow--;
            }

        }else if(down){
            let downAux=downCol;
            if(downAux===0){
                // downCol--;
                downAux=downCol;
                down=false;
                left=true;
                leftRow--;
            }else {
                aux.push(matrix[upCol - downAux][ leftRow - rightRow-1 ])
                downCol--;
            }
        }else if(left){
            let leftAux=leftRow;

            if(leftAux===0){
                // downCol--;
                leftAux=leftRow;
                left=false;
                up=true;
                upCol=upCol-2;
            }else {
                aux.push(matrix[upCol - downCol-1][ leftAux - rightRow-1 ])
                leftRow--;
            }
        }else if(up){

            let upAux=upCol;

            if(upAux===0){
                // downCol--;
                upAux=upCol;
                up=false;
                right=true;
                rightRow--;
                upCol--;

            }else {
                aux.push(matrix[upAux - downCol][ leftRow - rightRow ])
                upCol--;
            }

        }else {
            console.log('eeeeeeeeeee')
        }

        //primero derecha
        //segundo abajo
        //tercero izqueirda
        //quarto arriba

    }

    return aux;
}

 */
console.time()
// console.log(spirallyTraverse(
//     [
//         [1,2,3,4],
//         [5,6,7,8],
//         [9,10,11,12]]
//     ,4,4))
// console.log([1,2,3,4,8,12,11,10,9,5,6,7])
// //
// console.log(' [1,2,3],\n' +
//     ' [4,5,6],\n' +
//     ' [7,8,9]')
console.log(spirallyTraverse(3))
// console.log('res',[1,2,3,6,9,8,7,4,5])

// console.log(spirallyTraverse(
//     [
//         [5, 5, 11],
//         [19, 19, 30]
//     ]))
// console.log(spirallyTraverse(
//     [
//         [23, 18, 20, 26, 25],
//         [24, 22, 3, 4, 4],
//         [15, 22, 2, 24, 29],
//         [18, 15, 23, 28, 28],
//     ]))

// console.log('res',[1, 2, 3, 4, 8 ,12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])

// console.log(spirallyTraverse(
//     [
//             [1, 2, 3, 4],
//             [5, 6, 7, 8],
//             [9, 10, 11, 12]
//     ]
//     ,4,4))//[1,2,3,4,8,12,11,10,9,5,6,7]
// console.log(spirallyTraverse(
//     [[1,2,3],[4,5,6],[7,8,9]]
//     ,3,3))//[1,2,3,6,9,8,7,4,5]
console.timeEnd()
