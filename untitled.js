// copy JSON stringify from object
let x = {
    a: 1,
    b: "g",
    method: () => "ok"
}

copy(x)
JSON.stringify(x)



// fn for
const add1 = v => v+1

// const myfor = (fn, ...r) => r.map(fn)
// myfor(add1, 3, 4, 5, 6)

// const myfor = (fn, r) => r.map(fn)
// myfor(add1, [3, 4, 5, 6])

const myfor = (fn, r) => Object.values(r).map(fn)
myfor(add1, {3:3, 4:4, 5:5, 6:6})


// pipe
log = console.log
const pipe = (...fns) => x => fns.reduce((y, f)=> f(y), x)
const f1 = x => {log(x); return x * x}
const f2 = x => {log(x); return x + x}
const f3 = x => {log(x); return x - x/2}
const f4 = x => {log(x); return x / 2 * x}
const f5 = x => {log(x); return x >> 1}
pipe(f1, f2, f3, f4, f5)(100) //25000000
