// Write a function to check if a string which consists of ()[]{} is valid or not
// E.g. [{}](): valid
// (()){}: valid
// )(){]: invalid

function solution(S) {  
    var stack = [];
    var open = ['(', '[', '{'];
    var close = [')', ']', '}'];
    for (var i = 0; i < S.length; i++) {
        if (open.indexOf(S[i]) > -1) {
            stack.push(S[i]); // push open brackets to stack
        } else {
            var last = stack.pop(); // pop last open bracket from stack
            if (open.indexOf(last) !== close.indexOf(S[i])) {  /// if last open bracket is not the same as the current close bracket
                return 0;
            }
        }
    }
    return stack.length === 0 ? 1 : 0;
}

s = "[{}]()";

console.log(solution(s));