//solucion 1
function majorityElement(a, size){
    let arr=[];
    a.forEach(value => {
        const found = arr.find(x => x.id === value);
        if (found) {
            found.count++;
        } else {
            arr.push({id: value, count: 1});
        }
    });
    let maxObj = arr.find(obj => obj.count === Math.max(...arr.map(item => item.count)));

    if(maxObj.count <= (size/2)){
        return -1
    }
    return maxObj.id;
}
//solucion 1 optimizada utilizando map
function majorityElement2(a, size)
{
    let map = new Map();
    a.forEach((value) => {
        if(map.has(value)){
            map.set(value, map.get(value) + 1);
        } else {
            map.set(value, 1);
        }
    });

    let maxObj = null;
    for (let [id, count] of map.entries()) {
        if (!maxObj || count > maxObj.count) {
            maxObj = { id, count };
        }
    }

    if (!maxObj || maxObj.count <= (size/2)) {
        return -1;
    }

    return maxObj.id;
}

//solucion 1 optimizada sin utilizar map, creo que es la mas clara

function majorityElement3(a, size){
    let counts = {}; // Crear un objeto para llevar el recuento de los elementos

    for (let i = 0; i < a.length; i++) {
        const value = a[i]; // Obtener el valor actual del arreglo

        // Verificar si el valor ya está en el objeto de recuentos
        if (counts[value]) {
            counts[value]++; // Si sí, incrementar su contador en 1
        } else {
            counts[value] = 1; // Si no, agregar el valor al objeto de recuentos con un contador de 1
        }

        // Verificar si el contador del valor actual es mayor que la mitad del tamaño del arreglo 'a'
        if (counts[value] > (size/2)) {
            return value; // Si sí, se encontró un elemento mayoritario, se devuelve como resultado
        }
    }

    return -1; // Si no se encuentra ningún elemento mayoritario, se devuelve -1 como resultado
}
//solucion externa 1
/*
Complexity:
    Time complexity : O(n).
    Space complexity : O(n).
 */
function majorityElement4(nums, size){
    var map = {};
    var max = 0;
    var majorNum = 0;
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        if (!map[nums[i]]){
            map[nums[i]] = 0
        }
        map[nums[i]]++;
        if (map[nums[i]] > max) {
            majorNum = nums[i];
            max = map[nums[i]];
        }
    }
    if(max <= (size/2)){
        return -1
    }
    return majorNum;
}


console.log(majorityElement3([1,2,3],3)) // -1
console.log(majorityElement3([3,1,3,3,2],5)) // 3
console.log(majorityElement3([6, 1, 15, 19, 9, 13, 12, 6, 7, 2, 10, 4, 1, 14, 11, 14, 14, 13],18)) // -1
console.log(majorityElement3([1,13],2)) // -1
console.log(majorityElement3([15],1)) // 15
console.log(majorityElement3([6,16],2)) // -1
