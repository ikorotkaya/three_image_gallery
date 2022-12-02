const arr = ["a", "b", "c", "d", "e", "f"];
           // 0,  1,   2,   3,   4,   5

const fixIndex = (index, arr) => {
  if (index < 0) {
    return (index % arr.length === 0 ? 0 : arr.length + index % arr.length)
  } else {
    return index % arr.length

  }
}

// 0: 0
// 6: 1
// 7: 2

for (let i = -36; i < 36; i++) {
  console.log(`${i}: ${fixIndex(i, arr)}`);
}
