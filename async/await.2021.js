// ES2015 (ES6)
// ES2017 (Async/await)
// ES2020 await global

function makeAsync(timer) {
    const x = 23;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = Math.random();
            if (value > 0.5) {
                // acierto
                resolve(x);
            } else {
                // fallo
                reject(new Error(value));
            }
        }, timer);
    });
}

try {
    const x = await makeAsync(2000);
    console.log('Soy algo', x);
} catch (error) {
    console.log(error.message);
}
