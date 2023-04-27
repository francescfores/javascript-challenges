function distributeGifts(packOfGifts, reindeers) {
    let pack_weight = packOfGifts.reduce((total, el) => total + el.length, 0);
    let rein__weight = reindeers.reduce((total, el) => total + el.length*2, 0);
    return Math.floor(rein__weight/pack_weight)
}


