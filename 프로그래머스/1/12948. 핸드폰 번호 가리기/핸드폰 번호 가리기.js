function solution(phone_number) {
    var firstfix = '*'.repeat(phone_number.length - 4); 
    var lastfix = phone_number.slice(-4);
    return firstfix + lastfix;
}