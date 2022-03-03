// Lambda 演算
// 用函數表達任何東西
log = console.log
// 1 用函數表達 Boolen 判斷兩個東西，真就選右邊 假就選左邊
True = (a, b) => a // 真就選右邊
False = (a, b) => b // 假就選左邊

// 用函數表達 If
If = (bool, p1, p2) => bool(p1, p2)
log(If(True, '1', '2')) // '1'
log(If(False, '1', '2')) // '2'

// 2 用函數表達 Number
One = (d, q) => d(q)
Two = (d, q) => d(d(q))
Three = (d, q) => d(d(d(q)))
Ten = (d, q) => d(d(d(d(d(d(d(d(d(d(q))))))))))

// 用函數表達 AddOne 與 Zero，就能表達所有數字
Zero = (d, q) => q
AddOne = (n) =>(d,q) =>d(n(d, q))
/*
AddOne(Zero)
=== (d, q) => d(Zero(d, q))
=== (d, q) => d(q)
=== One

AddOne(Two)
=== (d, q) => d(Two(d, q))
=== (d, q) => d(d(d(q)))
=== Three
*/

// 3 用函數表達 Object
LObject = (k1, v1, k2, v2, k3, v3) =>
(k)=>{
    if(k === k1) return v1
    if(k === k2) return v2
    if(k === k3) return v3
}

obj = LObject('name','john', 'age',18 , 'gen', 'male')
log(obj('name')) // 'john'
log(obj('age')) // 18
log(obj('gen')) // 'male'