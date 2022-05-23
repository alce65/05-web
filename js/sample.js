const obj = { name: 'Pepe' };
Object.defineProperty(obj, 'state', { value: true, enumerable: true });
console.log(obj);
obj.state = 'false';
