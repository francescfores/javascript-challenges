function wrapping(gifts) {
    let $aux=[];
    gifts.forEach((gift, index, self) => {
        $aux[index]=['*']
        let prepared=false;
        while(!prepared) {
            $aux[index]='*'+$aux[index];
            if(gift.length+2===$aux[index].length){
                console.log($aux[index])
                let up = $aux[index]
                let center = '\n*'+gift+'*\n';
                let down = $aux[index];
                prepared = true;

            }
        }
    })
    return $aux;
}


const gifts = ['cat', 'game', 'socks']
// const gifts = ['a']
// const gifts = []
const wrapped = wrapping(gifts)

console.log(wrapped)
