function solution(a, b) {
    const minNum = Math.min(a,b);
    const maxNum = Math.max(a,b);
    
    let sum = 0;
    for(let i = minNum; i<=maxNum; i++){
        sum += i;
    }
    return sum
}