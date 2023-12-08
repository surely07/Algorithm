function solution(price, money, count) {
  let cost = 0;

  // 이용요금
  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }

  // 남은 금액 구하기

  return cost > money ? cost - money : 0;
}
