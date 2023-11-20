function solution(phone_number) {
  const arr = [...phone_number];

  return arr.fill("*", 0, arr.length - 4).join("");
}

console.log(solution("01033334444"));
