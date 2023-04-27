function maxSubarraySum(arr, n){
    let sum = 0;
    let res = 0;
    if(arr.find(x=>x>0)===undefined){
        return Math.max(...arr)
    }
    for (let i = 0; i < n; i++) {
        sum= sum + arr[i];
        if(Math.max(sum, res)>res)
            res= sum ;
        if(sum<0){
            sum=0;
        }
    }
    return res
}
// console.log(maxSubarraySum([1,2,3,-2,5],5)) //
// console.log(maxSubarraySum([-2, 3, 2, -1],4)) //
// console.log(maxSubarraySum([-1,-2,-3,-4],4)) //
console.log(maxSubarraySum([1, 2, 3, -2, 5],5)) //

/*
El algoritmo de Kadane es un algoritmo de programación dinámica utilizado para encontrar la subcadena (subarreglo) de suma máxima en un arreglo unidimensional
 de números enteros.
Es un algoritmo eficiente con una complejidad de tiempo de O(n), donde n es la longitud del arreglo.

La idea principal detrás del algoritmo de Kadane es mantener dos variables mientras se recorre el arreglo de izquierda a derecha:
la suma máxima actual (maxSoFar) y la suma máxima del subarreglo que termina en la posición actual del arreglo (maxEndingHere). El algoritmo sigue un enfoque
"greedy" o voraz, que significa que en cada paso se toma la decisión óptima local para obtener la solución global.

El algoritmo de Kadane se puede resumir en los siguientes pasos:

    Inicializar las variables maxSoFar y maxEndingHere con el primer elemento del arreglo.
    Recorrer el arreglo desde el segundo elemento hasta el último.
    En cada paso, actualizar maxEndingHere tomando el máximo entre el valor del elemento actual y la suma de maxEndingHere con el valor del elemento actual.
    Actualizar maxSoFar tomando el máximo entre su valor actual y el valor de maxEndingHere.
    Al finalizar el recorrido, maxSoFar contendrá la suma máxima del subarreglo.

El algoritmo de Kadane es eficiente ya que solo requiere un único recorrido del arreglo y utiliza variables para mantener el seguimiento
de las sumas máximas, en lugar de recalcular las sumas en cada paso. Es ampliamente utilizado en problemas que involucran encontrar
la subcadena (subarreglo) de suma máxima, como el problema
de la suma máxima del subarreglo y el problema de la suma máxima de subarreglo circular, entre otros.
 */
