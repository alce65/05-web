function foo() {
    console.log('Soy foo', foo);
}
foo.bar = 'Pepe';

const obj = {};
obj.name = 'Pepe';

console.log(foo);

setTimeout(foo, 500);

// Función de orden superior
// - recibe una función callback como argumento
// - devuelve una fucción

function main() {
    return function () {
        console.log('Internal main');
    };
}

main()();

const externalF = main();
externalF();

function container() {
    const a = 23;

    function interna1() {
        console.log('internal', a);
    }

    function interna2() {}

    return {
        interna1,
        interna2,
    };
}

const obj2 = container();
obj2.interna1();
console.log(obj2);
