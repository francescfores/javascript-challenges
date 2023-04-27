function printTable(gifts) {
    let gift='Gift';
    let quantity='Quantity';
    let maxgifts =  Math.max(...gifts.map(palabra => palabra.name.length));
    const maxquantity = Math.max(...gifts.map(item => item.quantity.toString().length))

    let giftRow=  gift.length > maxgifts ? gift.length : maxgifts;
     giftRow=  giftRow+4; //el 4 es por los dos espacios en blacno mas las | en cada lado
    let quantityRow=  quantity.length > maxquantity ? quantity.length : maxquantity ;
     quantityRow=  quantityRow + 3; //el 3 es por los dos espacios en blacno mas una | en el final

    let table = ('+').repeat(giftRow+quantityRow)+'\n' //head
    table += '| '+gift + (' ').repeat((giftRow-4) - gift.length) +' | '+ quantity + (' ').repeat((quantityRow-3) - quantity.length) + ' |\n';
    table += '| '+ ('-').repeat(giftRow-4) +' | '+ ('-').repeat(quantityRow-3) + ' |\n';

    gifts.forEach(element =>
    table += '| '+ element.name+ (' ').repeat((giftRow-4)-element.name.length) +' | '
        + element.quantity + (' ').repeat((quantityRow-3)-element.quantity.toString().length) + ' |\n'
    );
     table += ('*').repeat(giftRow+quantityRow) //head

    return table
}

console.log(printTable([
    { name: 'Gamsdds', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Bo', quantity: 3 }
]))

console.log(printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
)

console.log()
// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************


Expected:
    "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"

Actual:
    "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n++++++++++++++++++++++++++++++++++++++"
