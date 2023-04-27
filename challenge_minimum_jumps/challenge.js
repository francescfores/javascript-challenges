//dynamic programming TODO repasar
function minJumps(arr, len) {
    if (arr[0] === 0) {
        return -1; // Si el primer elemento es 0, no es posible avanzar, devolver -1
    }

    let jumps = 1; // Comenzar con 1 salto para llegar al primer elemento
    let currMaxReach = arr[0]; // Inicializar la posición máxima alcanzable desde el primer elemento
    let nextMaxReach = arr[0]; // Inicializar la posición máxima alcanzable desde el primer elemento

    for (let i = 1; i < len; i++) {
        if (i > currMaxReach) {
            if (currMaxReach === nextMaxReach) {
                return -1; // Si la posición máxima alcanzable no se actualiza con un salto, significa que no es posible avanzar más, devolver -1
            }
            jumps++; // Si se supera la posición máxima alcanzable con los saltos actuales, se requiere un salto adicional
            currMaxReach = nextMaxReach; // Actualizar la posición máxima alcanzable con el siguiente salto
        }

        nextMaxReach = Math.max(nextMaxReach, i + arr[i]); // Actualizar la posición máxima alcanzable con el siguiente salto
    }

    return jumps; // Devolver el valor mínimo de saltos//
}
// console.log(minJumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1],10)) // salida 4
// minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],11) // 3
console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],10)) //

/*
    1. Se inicializan las variables `jumps` a 0 (contador de saltos), `currReach` a 0 (posición alcanzable actual) y `maxReach` a 0 (posición máxima alcanzable).
    2. Se inicia un bucle que itera desde el primer elemento del arreglo `[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]` hasta el penúltimo elemento (índice 10).
    3. En la primera iteración del bucle, `i = 0`:
        - `i > maxReach` es falso (0 no es mayor que 0)
        - Se actualiza `maxReach` a `i + arr[i]` que es 1 (0 + 1)
        - `i === currReach` es verdadero (0 es igual a 0)
        - Se incrementa el contador de saltos `jumps` a 1
        - Se actualiza `currReach` a `maxReach` que es 1
    4. En la segunda iteración del bucle, `i = 1`:
        - `i > maxReach` es falso (1 no es mayor que 1)
        - Se actualiza `maxReach` a `i + arr[i]` que es 4 (1 + 3)
        - `i === currReach` es falso (1 no es igual a 1)
    5. En la tercera iteración del bucle, `i = 2`:
        - `i > maxReach` es falso (2 no es mayor que 4)
        - Se actualiza `maxReach` a `i + arr[i]` que es 7 (2 + 5)
        - `i === currReach` es falso (2 no es igual a 1)
    6. En la cuarta iteración del bucle, `i = 3`:
        - `i > maxReach` es falso (3 no es mayor que 7)
        - Se actualiza `maxReach` a `i + arr[i]` que es 11 (3 + 8)
        - `i === currReach` es falso (3 no es igual a 7)
    7. En la quinta iteración del bucle, `i = 4`:
        - `i > maxReach` es falso (4 no es mayor que 11)
        - Se actualiza `maxReach` a `i + arr[i]` que es 13 (4 + 9)
        - `i === currReach` es falso (4 no es igual a 7)
    8. En la sexta iteración del bucle, `i = 5`:
        - `i > maxReach` es verdadero (5 es mayor que 13)
        - Se devuelve -1, ya que no es posible alcanzar el elemento actual `arr[i]` desde ninguna posición anterior.
    9. El resultado correcto es 3, que es el valor actual del contador de saltos `jumps`.

 */
