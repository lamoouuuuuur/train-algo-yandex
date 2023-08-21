const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const isValidParentheses = (s) => {
    if (s.length % 2 === 1) return false;
    if (s[0] === ')' || s[0] === ']' || s[0] === "}") return false;
    if (s[s.length - 1] === "(" || s[s.length - 1] === "[" || s[s.length - 1] === "{") return false;

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let bracket = s[i];

        if (bracket === "(" || bracket === "[" || bracket === "{") {
            stack.push(bracket)
        } else if (pairs[stack.pop()] !== s[i]) {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("]()"))
console.log(isValidParentheses("[)])"))
console.log(isValidParentheses("[(])"))
console.log(isValidParentheses("[()]"))