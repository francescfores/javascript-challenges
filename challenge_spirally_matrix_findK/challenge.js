//Solucion 1
function spirallyTraverse(matrix, r, c,k) {
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
            aux.push(matrix[vertical][horizontal ])
            if(horizontal===horizontalAux){
                right=false;
                down=true;
            }
        }else if(down){
            vertical++;
            aux.push(matrix[vertical][horizontal ])
            if(vertical===verticalAux){
                down=false;
                left=true;
            }

        }else if(left){
            horizontal--;
            aux.push(matrix[vertical][horizontal ])
            if(horizontal===(matrix[0].length-1)-horizontalAux){
                left=false;
                up=true;
                verticalAux--;
            }
        }else if(up){
            vertical--;
            aux.push(matrix[vertical][horizontal ])
            if(vertical===(matrix.length-1)-verticalAux){
                up=false;
                right=true;
                horizontalAux--;
            }
        }
        if(k-1===i){
            return matrix[vertical][horizontal ];
            break
        }
    }

    return null;
}

console.time()
console.log(spirallyTraverse(
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]
    ]
    ,0,0,5))

console.timeEnd()
