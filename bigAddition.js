function add(a, b) {
    return (Number(a) + Number(b)).toString()
}

function padNumber(a, b){
    let [ longer, shorter ] = longerNumber(a, b)
    for(let i = 0; i < longer.length; i++){
         
    }
}

function longerNumber(a, b){
    let longer = 0
    let shorter = 0
    if(a.length > b.length){
        longer = a
        shorter = b
    } else {
        longer = a
        shorter = b
    }
    return [ longer, shorter ]
}

module.exports = {
    add,
    padNumber
}

