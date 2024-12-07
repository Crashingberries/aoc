const data = Deno.readTextFileSync('input.txt').split(/\r?\n/);
const leftColumn = new Array<number>;
const rightColumn = new Array<number>;
data.forEach((row) => {
    const columns = row.split('   ');
    leftColumn.push(+columns[0]);
    rightColumn.push(+columns[1]);
});
let total = 0;
//  --- Task 1 ---
leftColumn.sort();
rightColumn.sort();
leftColumn.forEach((leftNumber, index) =>{
    total += Math.abs(leftNumber - rightColumn[index]);
});
console.log('Distance totale: ', total);

//  --- Task 2 ---
leftColumn.forEach((leftNumber) => {
    const occurence = rightColumn.filter((rightNumber) => leftNumber === rightNumber).length;
    total += (leftNumber * occurence);
});
console.log('Score de similarité', total);