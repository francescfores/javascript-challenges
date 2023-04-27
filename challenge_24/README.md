# challenge 24
## Descripción

¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.

Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

Los laberintos tienen las siguientes posiciones:

- W: Es una pared, no se puede pasar por ahí.
- S: Punto de entrada al almacén.
- E: Punto de salida del almacén.
- : Los espacios en blanco es por donde se puede pasar.

Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.

    canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
    ]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

    canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
    ]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]

Recuerda que:

- Sólo tienes que devolver si se puede salir del laberinto con un booleano.
- Las paredes W no se pueden saltar.
- No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.

// TODO Repaso del Análisis
## Análisis

### Solución 1
Se obtiene el número de filas y columnas del laberinto (numRows y numCols) respectivamente.

Se crea un arreglo bidimensional llamado visited con dimensiones numRows x numCols
utilizando la función Array y los métodos fill y map. 
Todos los elementos del arreglo se inicializan con el valor false, lo que representa que 
ninguna posición del laberinto ha sido visitada aún.

Se busca la posición inicial del laberinto (letra 'S') utilizando el método find en el array maze. 
El resultado de la búsqueda se almacena en las variables row y col que representan 
la fila y columna del inicio respectivamente.

Se inicializan las variables i y j con los valores de row y col respectivamente. 
Estas variables se utilizarán para llevar un seguimiento de la posición actual en el 
laberinto mientras se busca la salida.

Se crea una variable booleana stop inicializada en false que se utilizará como condición de 
salida del bucle principal.

Se marca la posición inicial como visitada en el arreglo visited asignando el valor true en 
la posición correspondiente visited[i][j] = true.

Se crea un array vacío llamado moves que se utilizará para almacenar los movimientos 
realizados en el laberinto.

Se inicia un bucle while que se ejecutará hasta que se encuentre la salida del laberinto 
o no haya más movimientos posibles.

Dentro del bucle, se realizan cuatro comprobaciones utilizando condicionales if para verificar 
si es posible moverse en las cuatro direcciones posibles (arriba, derecha, abajo, izquierda) 
desde la posición actual (i, j) en el laberinto y si la nueva posición no ha sido visitada previamente y
no contiene una pared ('W').

Si se puede mover en alguna dirección, se marca la nueva posición como visitada en el arreglo visited,
se actualiza la posición i y j según la dirección del movimiento, y se registra la nueva posición en el
array moves como un par [i, j] que representa la fila y columna de la nueva posición.

Si no es posible moverse en ninguna dirección desde la posición actual, se revisa si hay movimientos en
el array moves. Si hay movimientos previos en el array, se retrocede a la posición anterior deshaciendo 
el último movimiento realizado. Esto se hace utilizando el método pop para eliminar el último elemento
del array moves, y actualizando i y j con la posición del nuevo último elemento en el array.

Si no hay movimientos previos en el array moves, se establece la variable stop en true para salir del 
bucle principal, y se establece exit en false, lo que significa que no se pudo encontrar una salida del
laberinto.

Si maze[i][j] es igual a 'E', significa que se ha llegado a la salida del laberinto, por lo tanto se 
establece stop como true y exit como true.

Finalmente, se retorna el valor de exit, que indica si se puede salir del laberinto (true) o no (false).

### Solución 1 refactorizada

1. Se inicializan algunas variables, como `numRows` y `numCols`, para representar el número de filas y 
columnas en el laberinto respectivamente. Se crea también una matriz booleana `visited` con las mismas 
dimensiones que el laberinto, inicializada con `false`, para llevar un registro de las celdas visitadas.

2. Se busca la posición inicial ('S') en el laberinto utilizando el método `some` en el arreglo `maze`. 
Cuando se encuentra la posición inicial, se almacena su fila en la variable `row` y su columna en la 
variable `col`.

3. Se inicializan las coordenadas `i` y `j` con los valores de `row` y `col` respectivamente, y se marca 
la celda correspondiente como visitada en la matriz `visited`. Además, se crea un arreglo llamado `moves` 
que contiene las coordenadas `[i, j]` como su único elemento, que representa la posición inicial.

4. Se inicia un bucle `while` que se ejecuta mientras haya elementos en el arreglo `moves`, lo que 
significa que aún hay movimientos posibles para explorar.

5. En cada iteración del bucle, se utiliza `pop` para obtener y eliminar el último elemento del arreglo 
`moves`, que representa la posición actual. Las coordenadas `i` y `j` se desestructuran de este elemento
para usarlas en las siguientes operaciones.

6. Se define un arreglo llamado `possibleMoves` que contiene las coordenadas de los posibles movimientos 
desde la posición actual en las cuatro direcciones: arriba, derecha, abajo e izquierda.

7. Se realiza un bucle `for` que itera sobre las coordenadas `[nextI, nextJ]` en el arreglo `possibleMoves`.

8. Para cada posible movimiento, se verifica si las coordenadas están dentro de los límites del 
laberinto (es decir, si `nextI` está entre 0 y `numRows - 1`, y `nextJ` está entre 0 y `numCols - 1`), 
si la celda correspondiente no ha sido visitada (`!visited[nextI][nextJ]`), y si la celda correspondiente 
no contiene una pared ('W') (`maze[nextI][nextJ] !== 'W'`).

9. Si se cumplen todas estas condiciones, se marca la celda correspondiente como visitada 
en la matriz `visited`, se agrega la coordenada `[nextI, nextJ]` al arreglo `moves` para explorarla 
en la siguiente iteración, y si la celda correspondiente contiene la posición de salida ('E'), se marca 
la variable `exit` como `true` para indicar que se ha encontrado una salida y se rompe el bucle `for`.

10. Después de salir del bucle `for`, se vuelve a la siguiente iteración del bucle `while` 
si todavía hay elementos en el arreglo moves y se repiten los pasos 5 a 9 para explorar 
los movimientos posibles desde la siguiente posición en moves.

11. Si no se encuentra una salida durante la exploración, es decir, no se rompe el 
bucle for en el paso 9, el bucle while continuará hasta que no haya más elementos en el 
arreglo moves, lo que significa que no hay más movimientos posibles para explorar desde ninguna 
posición y se sale del bucle.

12. Después de salir del bucle while, la función retorna el valor de la variable exit, que indica
si se encontró una salida (true) o no (false).
