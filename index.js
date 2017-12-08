let a = Number(prompt('Enter parameter a: '));

const res = inspect(a);
document.write(res);

const b = Number(prompt('Enter parameter b: '));
document.write('Parameter b: ' + b + '<br>');

const c = Number(prompt('Enter parameter c: '));
document.write('Parameter c: ' + c + '<br>');

const result = solution(a, b, c);
document.write('Solution: ' + result);

function inspect (a) {
    // if (a === 0) {
    //     a = Number(prompt('a != 0, please enter another value:'));
    // }
    // return 'Parameter a: ' + a + '<br>';
    while (a === 0) {
        a = Number(prompt('a != 0, please enter another value:'));
    }
    return 'Parameter a: ' + a + '<br>';
}

function solution (a, b, c) {
    const d = desc(a, b, c);
    if (d < 0) {
        return 'Your equation has no solutions!';
    } else if (d === 0) {
        const x = -(b/(2*a));
        return 'x = ' + x;
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        return 'x1 = ' + x1 + ', ' + 'x2 = ' + x2;
    }
}

function desc (a, b, c) {
    return Math.pow(b, 2) - 4*a*c;
}