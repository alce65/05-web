const x = 32;

function foo() {
    const z = 65;
    console.log(this);
}

foo();

const obj = {
    name: 'Pepe',
    metodoFoo: foo,
};

const obj2 = {
    name: 'Juana',
};

obj.metodoFoo();
new foo();
foo.call(obj2);

const obj3 = {
    name: 'luis',
    metodo: function () {
        const bar = () => {
            console.log(this);
        };
        bar();
    },
};

obj3.metodo();

setTimeout(obj3.metodo.bind(obj3), 1000);

/* 
- crea un objeto
- __proto__ = funcion.prototype
- asigna ese objeto a this
- devuelve this
 */
