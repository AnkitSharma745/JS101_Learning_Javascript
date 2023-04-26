function mySubstring(str, start, end) {
  if (end === undefined || end > str.length) {
    end = str.length;
  }

  if (start < 0) {
    start += str.length;
  }

  if (end < 0) {
    end += str.length;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  let result = '';
  for (let i = start; i < end; i++) {
    result += str[i];
  }

  return result;
}
let str = 'Hello, world!';
const substring1 = mySubstring(str, 0, 5)
console.log(substring1)
