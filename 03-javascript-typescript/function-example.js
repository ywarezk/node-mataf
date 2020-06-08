
console.log(this);
const lambdaWhatThis = () => {
    console.log(this);
}

lambdaWhatThis(); // {}

const a = {
    hello: lambdaWhatThis
}

a['hello'](); // {}