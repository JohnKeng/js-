// 1
Promise.prototype.delay = function (t) {
    return this.then((v) => {
        return new Promise(resolve => setTimeout(resolve.bind(null, v), t))
    })
}

Promise.resolve('hello').delay(5000).then((v) => console.log(v))



// 2
function timeout(t) {
    return new Promise(resolve => setTimeout(resolve, t))
}
async function wait(v, t) {
    await timeout(t)
    return v
}

wait('hi', 5000).then((v) => console.log(v))
