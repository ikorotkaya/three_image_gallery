const arr = ["a", "b", "c", "d", "e", "f"];
            // 0,  1,   2,   3,   4,   5

const printThreeLetters = (firstLetterIndex) => {

  let i1 = firstLetterIndex % arr.length;
  let i2 = (firstLetterIndex + 1) % arr.length;
  let i3 = (firstLetterIndex + 2) % arr.length;

  console.log(arr[i1] + arr[i2] + arr[i3])

}

// 0: abc
// 1: bcd
// 3: def
// 4: efa

printThreeLetters(0);
printThreeLetters(1);
printThreeLetters(3);
printThreeLetters(4);

printThreeLetters(6);