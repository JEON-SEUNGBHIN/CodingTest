function solution(myString) {
    var answer = myString.split("x").filter(str => str.length > 0).sort();
    return answer;
}