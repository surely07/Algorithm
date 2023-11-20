function solution(phone_number) {
  const arr = [...phone_number];

  for (i = 0; i < arr.length - 4; i++) {
    arr[i] = "*";
  }
  return arr.join("");
}

console.log(solution("01033334444"));
