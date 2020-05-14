// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
// that checks whether the two arrays have the "same" elements, 
// with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, 
// regardless of the order.

let a = [121, 144, 19, 161, 19, 144, 19, 11] 
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
function comp(array, arrayMultiplied){
    if(array == null || arrayMultiplied == null){
        return false
    } 
    array.sort((a, b) => a-b)
    arrayMultiplied.sort((a, b) => a-b)
    let i = 0
    return array.reduce((sameArray, number) => {
        if((number * number) === arrayMultiplied[i]){
            i++
            return true
        } else {
            return false
        }
    }, false)
}

console.log(comp(a,b))
