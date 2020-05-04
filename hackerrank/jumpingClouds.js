function jumpingOnClouds(c) {
    let index = 0
    return c.reduce((jumps) => {
        if(c[index + 2] === 0){
            jumps += 1
            index += 2
        } else if (c[index + 1] ===0){
            jumps += 1
            index += 1
        }
        return jumps 
    }, 0)
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]))
