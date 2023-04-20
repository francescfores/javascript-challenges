# challenge 1
## Descripción

Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

    const gifts = ['cat', 'game', 'socks']
    const wrapped = wrapping(gifts)
    
    console.log(wrapped)
    /* [
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
    ] */

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

Nota: El carácter \n representa un salto de línea.

¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, y no modifiques (mutes) el array original.

## Análisis
La función wrapping toma un array de regalos (gifts) como entrada y devuelve un nuevo array que 
contiene los envoltorios de los regalos hechos con asteriscos.

Paso 1: Se crea un array ($aux) que contendrá los regalos envueltos.

Paso 2: Se recorren los regalos en el array gifts utilizando un forEach.

Paso 3: En cada iteración, se prepara el regalo agregando un asterisco (*) 
como base en el array de envoltorios ($aux[index]).

Paso 4: Se utiliza una variable booleana (prepared) para indicar si el regalo está completamente envuelto o no. 
Se inicia con el valor false.

Paso 5: Se crea un bucle while que se ejecuta hasta que el regalo esté completamente envuelto (prepared sea false).

Paso 6: Dentro del bucle, se sigue envolviendo el regalo agregando asteriscos al array de envoltorios ($aux[index]). 
Luego se compara si la longitud del regalo más 2 es igual a la longitud del envoltorio. 
Si es así, significa que el regalo está preparado para envolver, por ejemplo:

    Regalo: "cat"
    Longitud de "cat": 3
    Envoltorio: "*****" ($aux[index])
    "*****" 
    "*cat*"  // los asteriscos en los bordes se agregan en el siguiente paso, esta representación es solo para entender el caso

Si no se suma 2 a la longitud del regalo, se vería algo como esto:

    Regalo: "cat"
    Longitud de "cat": 3
    "***" 
    "*cat*" 

Este paso asegura que el regalo esté completamente envuelto con asteriscos en cada lado, 
es decir, haya al menos dos asteriscos en cada extremo del regalo.

Paso 7: Se crea una variable up que contiene el envoltorio de la parte superior del regalo ($aux[index]).

Paso 8: Se crea una variable center que contiene el regalo envuelto con un salto de línea y asteriscos antes y después del regalo: "\n*"+gift+"*\n".

Paso 9: Se crea una variable down que contiene el envoltorio de la parte inferior del regalo, que es igual al envoltorio de la parte superior ($aux[index]).

Paso 10: Se unen todas las partes del regalo (up, center, down) para obtener el regalo completamente envuelto.

Paso 11: Una vez que el regalo está completamente envuelto, se asigna true a la variable prepared para salir del bucle while.

Paso 12: Se repite el proceso para el siguiente regalo en caso de que exista en el array gifts.
