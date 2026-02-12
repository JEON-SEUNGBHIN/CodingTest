function solution(k, m, score) {
    const counts = new Uint32Array(k + 1);
    
    for (let i = 0; i < score.length; i++) counts[score[i]]++;
    
    let current = 0;
    let result = 0;
    
    for (let i = k; i >= 1; i--) {
        current += counts[i];
        
        const boxCount = Math.floor(current/m);
        if(boxCount === 0) continue;
        
        result += boxCount * m * i;
        current -= boxCount * m;
    }
    
    return result;
}