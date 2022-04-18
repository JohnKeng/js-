
//// COMBINATORS

// combinator Idaiot
I = a => a

// MockingBird
M = f => f(f)

try {
    M(M)
} catch (e) {
    console.log(e)
}
// Maximum call stack size exceeded


// const Haskell Kestrel
K = a => b => a

// const K5 = 5
K5 = K(5)
K5(3) //5

// Kite
// K(I)(x)(y) === I(y) === y
KI = a => b => b
KI()(9) //9

// K(I)(KI) === KI

// Cardinal
C = f => a => b => f(b)(a)
// C(K)(I)(M) === KI(I)(M) === M

// 實現邏輯閘
const TRUE = K
const FALSE = KI
const NOT = p => p(FALSE)(TRUE)
const AND = p => q => p(q)(p)
const OR = p => q => p(p)(q)
const XOR = p => q => p(q)(NOT(q))
