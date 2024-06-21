function solution(x) {
    var answer = true;
    let y = String(x);
    let s = 0;
    for(let i =0; i < y.length; i++){
        s += parseInt(y[i]); 
    }if( x % s == 0){
        return answer;
        }else if( x % s != 0){
            return false;
        }
}