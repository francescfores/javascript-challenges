function wrapping(gifts) {
    let $aux=[];
    gifts.forEach((gift, index, self) => {
        $aux[index]=['*']
        let prepared=true;
        while(prepared) {
            $aux[index]='*'+$aux[index];
            if(gift.length+2<=$aux[index].length){
                prepared = false;
                $aux[index]=$aux[index]+'\n*'+gift+'*\n'+$aux[index];
            }
        }
    })
    return $aux;
}
