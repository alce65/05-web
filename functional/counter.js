function createCounter(initial = 0) {
    let counter = initial;
    return function () {
        console.log(++counter);
    };
}

const counter1 = createCounter();
const counter2 = createCounter(15);
counter1();
counter2();
counter1();
counter2();
counter1();
counter2();
counter1();
counter2();
counter1();
counter2();
