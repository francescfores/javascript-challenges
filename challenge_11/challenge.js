function fixLetter(letter) {
    //1 borrar espacios en blanco prinicpio final
    letter=letter.trim()
    //2 Eliminar múltiples espacios en blanco y dejar sólo uno
    const deleteSpace = letter.split(' ').filter(word => word !== '').join(' ');
    //3 Dejar un espacio después de cada coma
    let aux=deleteSpace.split(',');
    letter=''
    aux.forEach((value, index,arr) => {
        aux[index]=value.trimEnd();
        if(index!==0 && aux[index].substring(0,1)!==' ' ){
            aux[index]=' '+value;
        }
        letter+=aux[index]
    })
    letter=aux.join(',')
    //4 Quitar espacios antes de coma o punto
    letter = letter.replace(/\s+([.?!])/g, "$1");
    //5 Las preguntas sólo deben terminar con un signo de interrogación
    letter = letter.split(/([?])+/).filter(word => word !== '').join('?');

    //6 La primera letra de cada oración debe estar en mayúscula
    letter=letter.split(/([?.!])+/);
    aux=letter;
    letter=''

    for(let index = 0; index<aux.length;index++){
        if(index!==0 && aux[index].charAt(0)===' '){
            aux[index]=' ' +aux[index].charAt(1).toUpperCase() +aux[index].slice(2);
        }else {
            aux[index]=aux[index].charAt(0).toUpperCase() +aux[index].slice(1);
        }
        letter+=aux[index]
        index++;
        if(index!==aux.length){
            letter+=aux[index]
        }
    }
    //7 Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
    letter = letter.replace(/santa/g, 'Santa');
    letter=letter.replace(/claus/g, 'Claus');

    //8 Poner un punto al final de la letter si no tiene puntuación
    if (!letter.trim().endsWith(".") && !letter.trim().endsWith(",") && !letter.trim().endsWith("?") && !letter.trim().endsWith("!")) {
        letter += "."; // Agregar un punto al final de la letter
    }

    return letter
}


fixLetter(` hello ,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
console.dir(`Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.`)
// fixLetter("  hi    santa    claus . santa claus is the best  ")
// console.dir(`  hi    santa    claus . santa claus is the best  `)
// fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// console.dir(`Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?`)
// fixLetter("  hi    santa    claus . santa claus is the best  ")
// console.dir(`Hi Santa Claus. Santa Claus is the best.`)
fixLetter('  hi,santa claus . are you there ?   ')
console.dir(`Hi, Santa Claus. Are you there?`)


//Solucion utilizando solo regex

// g modifier: global. Esto permite reemplazar todas las partes del texto en que se cumpla el regex
// i modifier: insensitive. Quita la sensibilidad a las mayusculas

//Si ponemos una expresión entre paréntesis, esta se guardará y la podremos usar en el .replace():
//
// "string".replace(/(regex)(regex)/g, "$1 $2")
// "string".replace(/(regex)(regex)/g, (string, $1, $2) => {} )
//
// Ya que las dos expresiones estan en parentesis, las podremos reutilizar si es necesario.
function fixLetter2(letter) {
    let correction = letter
        // Dejar un espacio después de cada signo...
        // Buscaremos un signo que no tenga otro signo adelante,
        // esto para que no tengamos signos separados entre espacios.
        // De todas formas, si hay signos repetidos, solo tomará el último.
        // $1 = ([,.?!])
        // $2 = ([^,.?!])
        // El símbolo ^ nos permite negar, es decir, buscar en el string, una parte donde tengamos un símbolo ([,.?!]),
        // pero no tengamos otro adelante ([^,.?!])
        // Si no guardamos ([,.?!])en $2 perderemos la letra que este luego del espacio.
        .replace(/([,.?!])([^,.?!])/g, '$1 $2')
        // Eliminar múltiples espacios en blanco y dejar solo uno
        // Reemplazaremos todos los \s (Espacios, tabulaciones y saltos de linea)
        // El simbolo + significa que se puede repetir, es decir si hay 1, 2, 3, 4,
        // o cualquier cantidad de \s, los tomara, de lo contrario tomaria uno por uno y reemplazaria un espacio con un espacio.
        .replace(/\s+/g, ' ')
        // Las preguntas sólo deben terminar con un signo de interrogación
        // Esto también se aplica a comas, puntos y otros signos, así que nuevamente usaremos el regex de símbolos ([,.?!])
        //{2,} Significa que se repita 2 veces o más. Luego tomaremos solo el index 0 del string de símbolos, por tanto, dejando solo uno.
        .replace(/([,.?!]{2,})/g, $1 => $1[0])
        // La primera letra de cada oración debe estar en mayúscula
        // Ya que el callback de replace nos da todo lo que elimina el regex, solo usaremos los demás parámetros: $1 $2 y $3.
        .replace(/([.?!])(\s)([A-z])/g,
            (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
        )
        // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
        .replace(/(santa claus)/gi, 'Santa Claus')
        // Eliminar espacios al inicio y al final
        .trim()
        // Quitar espacios antes de coma o punto
        // Se separa en dos partes.
        // Ya que no guardamos el \s entre parentesis, el $1 sera el simbolo.
        // \s
        // ([,.?!]) | $1
        .replace(/\s([,.?!])/g, '$1')
        // La primer letra de la carta debe estar en mayúscula
        // El inicio de la oración es el único lugar donde hay nada y luego hay una letra:
        .replace(/^([A-z])/g, $1 => $1.toUpperCase())
        // Poner un punto al final de la frase si no tiene puntuación
        .replace(/([^.?!])$/g, '$1.')
    return correction
}


console.dir(fixLetter2('  hi,santa claus . are you there ?   '))
