function solution(order) {
    var answer = order.map((item) => item.includes("tte") ? 5000 : 4500).reduce((acc, curr) => acc + curr, 0);
    return answer;
}