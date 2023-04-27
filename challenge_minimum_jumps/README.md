# challenge min_jumps
## Descripción
Dada una array de enteros donde cada elemento representa el número máximo de pasos que se pueden realizar desde ese elemento. Escriba una función para devolver el número mínimo de saltos para llegar al final de la array (a partir del primer elemento). Si un elemento es 0, entonces no podemos movernos a través de ese elemento. Si no podemos llegar al final, devuelve -1.

    Ejemplos:
    
    Input:  arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
    Output: 3 (1-> 3 -> 8 -> 9)

Explanation: Jump from 1st element to
2nd element as there is only 1 step,
now there are three options 5, 8 or 9.
If 8 or 9 is chosen then the end node 9
can be reached. So 3 jumps are made.

    Input  :  arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
    Output : 10

Explanation: In every step a jump is
needed so the count of jumps is 10.

### Solución 1 refactorizada
