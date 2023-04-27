function getCompleted(part, total) {
    const mcd = (a, b) => {
        let c;
        while (b) {
            c = b
            b = a % b
            a = c
        }
        return a
    }

    part = part.split(":")
    total = total.split(":")
    part = +part[0] * 3600 + Number(part[1]) * 60 + Number(part[2])
    total = +total[0] * 3600 + Number(total[1]) * 60 + Number(total[2])
    res = mcd(part, total)
    return part/res + '/' + total/res
}


console.log(getCompleted('01:00:00', '03:00:00'))
