function sockMerchant(n, ar) {
    let pairs = 0
    let sockObject = ar.reduce((object, sock) => {
        object[sock]
            ? object[sock] += 1
            : object[sock] = 1
        return { ...object }
    },{})

    Object.values(sockObject).forEach(numberOfSocks => {
        while(numberOfSocks > 0){
            if(numberOfSocks % 2 === 0){
                pairs += 1
                numberOfSocks -= 2
            } else {
                numberOfSocks -= 1 
            }
        }
    })
    return pairs
}

