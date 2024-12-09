function solution(name, yearning, photo) {
    const yearningList = name.reduce((acc, n, index) => {
        acc[n] = yearning[index];
        return acc;
    },{});
    
    return photo.map(p => {
        return p.reduce((score, person) => {
            return score + (yearningList[person] || 0);
        }, 0);
    });
}