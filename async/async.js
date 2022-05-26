// ES2015 (ES6)
// ES2017 (Async/await)

async function foo() {
    const value = Math.random();
    if (value > 0.5) {
        // acierto
        return 34;
    } else {
        // fallo
        throw new Error('Error ' + value);
    }
}

// try {
//     console.log(foo());
// } catch (error) {
//     console.log(error.message);
// }

foo()
    .then((x) => {
        console.log(x);
    })
    .catch((error) => {
        console.log(error.message);
    });
