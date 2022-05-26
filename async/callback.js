function makeAsync(timer, callback) {
    const x = 23;
    setTimeout(() => {
        callback(x);
    }, timer);
}

const algo = (x) => {
    console.log('Soy algo', x);
};

x = makeAsync(2000, algo);
algo();
