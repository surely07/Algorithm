function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const subStr = t.substring(i, i + p.length);
    if (subStr <= p) {
      answer += 1;
    }
  }
  return answer;
}
