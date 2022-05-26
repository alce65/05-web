function foo() {
    return ['Pepe', 'Teacher', 34];
}

// const data = foo()
// const user = data[0]
// const job = data[1]
// const age = data[2]

const [user, job, age] = foo();
console.log(user, job, age);

function oFoo() {
    return { user: 'Pepe', job: 'Teacher', age: 34 };
}

const { user: u, job: j, age: a } = oFoo();

console.log(u, j, a);

function baa(i, age, ...rest) {}
const data = [1, 2, 3];
oFoo(...data);
