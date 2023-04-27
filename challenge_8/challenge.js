function checkPart(part) {
    let res=false
    let end='';
    function isPalindrome(string) {
        end = string.split("").reverse().join("");
        if(string===end){
            return true;
        }
        return false;
    }

    let i =0;
    while(i<part.length){
        let aux= part.slice(0, i) + part.slice(i + 1)
        if(isPalindrome(aux)){
            res=true;
            break;
        }
        i++;
    }
    return res
}
// console.log(checkPart('12 3 21'))
// console.log(checkPart('yolo oloy'))
// console.log(checkPart('zzzoonzzz'))
// let cadena = '123456'
// console.log(cadena.slice(0, 4) + cadena.slice(4 + 1))

//Refactorizando
function checkPart2(part) {
    for (let i = 0; i < part.length; i++) {
        let newString = part.slice(0, i) + part.slice(i + 1);
        let end = newString.split("").reverse().join("");
        if (newString === end) {
            return true;
        }
    }
    return false;
}

//Solución de (Achalogy)
function checkPart3(part) {
    //Convertimos la cadena en un array con [...part]
    //La funcion some comprueba si un elemento del array cumple con una condición y retorna un booleano
    //parecido a un foreach
    return [...part].some((x, i, arr) => {
        console.log(x)
        let w = arr.filter((_, y) => y !== i)
        console.log('w',w)

        return w.join("") === w.reverse().join("")
    })
}

console.log(checkPart2('uwu'))
console.log(checkPart2('zzzoonzzz'))
