function solution(n) {
  let answer = 1;

  for (i = 1; (7 * i) / n < 1; i++) {
    answer = answer + 1;
  }
  return answer;
}
