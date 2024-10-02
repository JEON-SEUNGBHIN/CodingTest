function solution(s) {
    const last = {};
    const result = [];
    for(let i = 0; i < s.length; i++ ){
        const char = s[i];
        if(last[char] !== undefined){
            result.push(i - last[char]);
        }else{
            result.push(-1);
        }
        last[char] = i;
    }
    return result;
}