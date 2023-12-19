function solution(s) {
  let answer = "";

  const arr = s.split(" ");

  // 각각의 단어
  for (let i = 0; i < arr.length; i++) {
    // 단어의 각각의 알파펫
    for (let j = 0; j < arr[i].length; j++) {
      const word = arr[i].charAt(j);
      answer += j % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
    }
    if (i < arr.length - 1) {
      answer += " ";
    }
  }

  return answer;
}