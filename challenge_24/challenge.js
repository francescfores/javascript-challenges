//Solución 1
function canExit(maze) {
    const numRows = maze.length;
    const numCols = maze[0].length;
    let exit = false;
    const visited = new Array(numRows).fill(false).map(() => new Array(numCols).fill(false)); // Arreglo

    let row = -1;
    let col = -1;
    maze.find((r, i) => {
        col = r.indexOf('S');
        if (col !== -1) {
            row = i;
            return true;
        }
    });
    let i=row;
    let j=col;

    let stop=false;
    visited[i][j]=true;
    let moves=[];

    while(!stop){
        if( !(i-1<0) && visited[i-1][j]!==true  && maze[i-1][j]!=='W'){ //arriba
            visited[i-1][j]=true;
            i--;
            moves.push([i,j])
        }else if ( !(j+1>numCols-1) && visited[i][j+1]!==true && maze[i][j+1]!=='W') { //derecha
            visited[i][j+1]=true;
            j++;
            moves.push([i,j])
        } else if ( !(i+1>numRows-1) && visited[i+1][j]!==true && maze[i+1][j]!=='W' ) { //abajo
            visited[i+1][j]=true;
            i++;
            moves.push([i,j])
        } else if ( !(j-1<0) && visited[i][j-1]!==true && maze[i][j-1]!=='W' ) { //izquierda
            visited[i][j-1]=true;
            j--;
            moves.push([i,j])
        }else if(moves.length>0){
            let ultimoElemento = moves.pop();
            ultimoElemento = moves[moves.length - 1];
            if(moves.length===0){
                stop=true
                exit= false;
            }else{
                i=ultimoElemento[0]
                j=ultimoElemento[1]
            }

        }else{
            stop=true
            exit= false;
        }
        if(maze[i][j]==='E'){
            stop=true;
            exit= true;
        }
    }

    return exit
}


console.log(canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]) // -> true
)
console.log(canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]) // -> true
)



// Solución 1 refactorizada
function canExit2(maze) {
    const numRows = maze.length;
    const numCols = maze[0].length;
    const visited = new Array(numRows).fill(false).map(() => new Array(numCols).fill(false));
    let exit = false;
    let row = -1;
    let col = -1;

    // Encontrar la posición inicial (letra "S") en el laberinto
    maze.some((fila, i) => {
        col = fila.indexOf('S');
        if (col !== -1) {
            row = i;
            return true;
        }
    });

    //if (row !== -1 && col !== -1) {
    let i = row;
    let j = col;
    visited[i][j] = true;
    const moves = [[i, j]]; // Usar un array para almacenar los movimientos

    while (moves.length > 0) {
        const [i, j] = moves.pop(); // Desestructurar el último elemento del array de movimientos

        // Definir los posibles movimientos en un arreglo
        const possibleMoves = [
            [i - 1, j], // Arriba
            [i, j + 1], // Derecha
            [i + 1, j], // Abajo
            [i, j - 1] // Izquierda
        ];

        for (const [nextI, nextJ] of possibleMoves) {
            if (nextI >= 0 && nextI < numRows && nextJ >= 0 && nextJ < numCols
                && !visited[nextI][nextJ] && maze[nextI][nextJ] !== 'W') {
                visited[nextI][nextJ] = true;
                moves.push([nextI, nextJ]);
                if (maze[nextI][nextJ] === 'E') {
                    exit = true;
                    break;
                }
            }
        }
    }
    //}

    return exit;
}

console.log(canExit2([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]) // -> true
)
console.log(canExit2([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]) // -> true
)

