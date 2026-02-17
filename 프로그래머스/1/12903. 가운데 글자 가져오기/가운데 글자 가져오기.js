function solution(s) {
    const len = s.length;
    const answer = s.slice((len - 1) / 2, len / 2 + 1);
    return answer;
}