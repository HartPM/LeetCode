/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;

  let a = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        a.push(')')
        break;
      case '[':
        a.push(']')
        break;
      case '{':
        a.push('}')
        break;
      case ')':
        if (s[i] === ')' && a[a.length - 1] === ')') {
          a.pop()
          break;
      }
      case ']':
        if (s[i] === ']' && a[a.length - 1] === ']') {
          a.pop()
          break;
        }
      case '}':
        if (s[i] === '}' && a[a.length - 1] === '}') {
          a.pop()
          break;
        }
      default:
        return false;  
    }
  }
  if (a.length === 0) return true;
  return false;
};