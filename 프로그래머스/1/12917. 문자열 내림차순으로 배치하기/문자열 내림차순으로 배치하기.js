function solution(s) {
  const arr = [...s];
  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });

  const lowerCase = [];
  const upperCase = [];
  // 대문자  소문자 구별
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      lowerCase.push(arr[i]);
    } else {
      upperCase.push(arr[i]);
    }
  }

  return [...lowerCase, ...upperCase].join("");
}