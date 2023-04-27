# challenge 2
## Descripción
Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2

Cosas a tener en cuenta:

    Las cajas de regalos no se pueden dividir.
    Los nombres de los regalos y los renos siempre serán mayores que 0.

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
