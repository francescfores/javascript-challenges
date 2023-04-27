//Solucion 1
function trap(height, len) {
    let water = 0; // Variable para almacenar la cantidad total de agua acumulada
    let level = 0; // Variable para almacenar el nivel actual del agua

    // Iteración a través del arreglo de entrada
    for (let index = 0; index < height.length; index++) {
        let nextMax = 0; // Variable para almacenar el máximo a la derecha del elemento actual sin contar el elemento

        // Bucle para encontrar el máximo a la derecha des de elemento actual
        for (let i = index + 1; i <  height.length; i++) {
            if (height[i] > nextMax) {
                nextMax = height[i];
            }
        }

        // Actualizar el nivel actual del agua al mínimo entre el máximo a la derecha y el nivel actual
        level = level > nextMax ? nextMax : level;

        // Actualizar el nivel actual del agua al máximo entre el valor del elemento actual y el nivel actual
        level = level < height[index] ? height[index] : level;

        // Calcular la cantidad de agua acumulada para el elemento actual y agregarla a la variable water
        water += level - height[index];
    }

    return water; // Devolver la cantidad total de agua acumulada
}
//Solucion de geeksforgeeks
function trap2(height, n) {
    // left[i] contains height of tallest bar to the
    // left of i'th bar including itself
    let left = new Array(height.length);

    // Right [i] contains height of tallest bar to
    // the right of ith bar including itself
    let right = new Array(height.length);

    // Initialize result
    let water = 0;

    // Fill left array
    left[0] = height[0];
    for (let i = 1; i < height.length; i++)
        left[i] = Math.max(left[i - 1], height[i]);

    // Fill right array
    right[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--)
        right[i] = Math.max(right[i + 1], height[i]);

    // Calculate the accumulated water element by element
    // consider the amount of water on i'th bar, the
    // amount of water accumulated on this particular
    // bar will be equal to min(left[i], right[i]) - height[i] .
    for (let i = 0; i < height.length; i++)
        water += Math.min(left[i], right[i]) - height[i];

    return water;
}

console.time()
// console.log(trap([4,2,0,3,2,5],6)) //
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1],12)) //
console.log(trap2([3, 0, 1, 4, 0, 2],6)) //
console.timeEnd()


/*
Explicacion de geek

Enfoque 2 (Precálculo): Esta es una solución eficiente basada en el concepto de precálculo:

En el enfoque anterior, para cada elemento necesitábamos calcular el elemento más alto a la izquierda y a la derecha.

Entonces, para reducir la complejidad del tiempo:

Para cada elemento, podemos precalcular y almacenar la barra más alta a la izquierda y a la derecha (por ejemplo, almacenada en matrices left[] y right[] ).
Luego itere la matriz y use los valores precalculados para encontrar la cantidad de agua almacenada en este índice,
que es lo mismo que ( min(left[i], right[i]) – arr[i] )
Siga la siguiente ilustración para una mejor comprensión:

Ilustración:

Considere arr[] = {3, 0, 2, 0, 4}

Por lo tanto, izquierda[] = {3, 3, 3, 3, 4} y derecha[] = {4, 4, 4, 4, 4}
Ahora considere iterar usando i desde 0 hasta el final

Para i = 0:
        => izquierda[0] = 3, derecha[0] = 4 y arr[0] = 3
        => Agua almacenada = min(izquierda[0], derecha[0]) – arr[0] = min(3, 4) – 3 = 3 – 3 = 0
        => Total = 0 + 0 = 0

Para i = 1:
        => izquierda[1] = 3, derecha[1] = 4 y arr[1] = 0
        => Agua almacenada = min(izquierda[1], derecha[1]) – arr[1] = min(3, 4) – 0 = 3 – 0 = 3
        => Total = 0 + 3 = 3

Para i = 2:
        => izquierda[2] = 3, derecha[2] = 4 y arr[2] = 2
        => Agua almacenada = min(izquierda[2], derecha[2]) – arr[2] = min(3, 4) – 2 = 3 – 2 = 1
        => Total = 3 + 1 = 4

Para i = 3:
        => izquierda[3] = 3, derecha[3] = 4 y arr[3] = 0
        => Agua almacenada = min(izquierda[3], derecha[3]) – arr[3] = min(3, 4) – 0 = 3 – 0 = 3
        => Total = 4 + 3 = 7

Para i = 4:
        => izquierda[4] = 4, derecha[4] = 4 y arr[4] = 4
        => Agua almacenada = min(izquierda[4], derecha[4]) – arr[4] = min(4, 4) – 4 = 4 – 4 = 0
        => Total = 7 + 0 = 7

Así que el total de agua de lluvia atrapada = 7

Siga los pasos que se mencionan a continuación para implementar el enfoque:

Cree dos matrices izquierda[] y derecha [] de tamaño N. Cree una variable (digamos max ) para almacenar el máximo encontrado hasta cierto índice durante el recorrido.
Ejecute un ciclo de principio a fin:
En cada iteración actualice max y también asigne left[i] = max .
Ejecute otro ciclo de principio a fin:
En cada iteración, actualice el máximo encontrado hasta ahora y también asigne right[i] = max .
Atraviesa la matriz de principio a fin.
La cantidad de agua que se almacenará en esta columna es min(left[i], right[i]) – array[i]
Agregue este valor a la cantidad total de agua almacenada
Imprime la cantidad total de agua almacenada.
A continuación se muestra la implementación del enfoque anterior.

//Code...

Análisis de Complejidad:

Complejidad temporal: O(N). Solo se necesita un recorrido de la matriz, por lo que la complejidad del tiempo es O (N).
Complejidad espacial: O(N). Se necesitan dos matrices adicionales, cada una de tamaño N.
 */
