function solution(n) {
    const arr = n.toString().split('');
    const sortNum = arr.sort((a,b) => b - a);
    return parseInt(sortNum.join(''),10)
}