function isIncreasing (number1:number, number2:number): boolean {
    return number1 < number2 && number1 !== number2;
}

function isDecreasing (number1:number, number2:number): boolean {
    return number1 > number2 && number1 !== number2;
}

function everyNumberIsSafe(elements: string[]): boolean {
    let numberBefore = +elements[0];
    const inc = numberBefore < +elements[1];
    const checkup = inc ? isIncreasing : isDecreasing;
    return !elements.some((number, index) => {
        if (index === 0) return false;
        if (Math.abs(+numberBefore - +number) > 3 || !checkup(numberBefore, +number)) return true;
        numberBefore = +number;
    });
}

function isSafe(element:string):boolean {
    const test = element.split(' ');
    if (everyNumberIsSafe(test)) return true;

    for (let i = 0; i < test.length; i++) {
        const modifiedTest = [...test];
        modifiedTest.splice(i, 1);
        if (everyNumberIsSafe(modifiedTest)) {
            return true;
        }
    }

    return false;
}

const data = Deno.readTextFileSync('input.txt').split(/\r?\n/);

let total = 0;

data.forEach((element) => {
    total += +isSafe(element);
});

console.log('Total', total);
