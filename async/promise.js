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

const algo = (x) => {
    console.log('Soy algo', x);
};

makeAsync(2000)
    .then(algo)
    .catch((error) => {
        console.log(error.message);
    });
