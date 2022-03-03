log = console.log

function m(x, y, k) {
    return k(x * y)
}
function a(x, y, k) {
    return k(x + y)
}
function s(x, y, k) {
    return k(x - y)
}

log(m(4, 5, x=> a(x, 1, y=> s(y, 5, z=>z*2))))

function fact(n) {
    if(n==0) return 1
    return n * fact(n-1)
}
function cps(n, k) {
    if(n==0) return k(1)
    return s(n, 1, x=> fact(x, y=> m(y, n, k)))
}

log(cps(6, fact))