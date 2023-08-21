const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const stringStartChecking = (s) => {
    return s[0] === ")" || s[0] === "]" || s[0] === "}";
}

const stringEndChecking = (s) => {
    const stringLength = s.length;
    return s[stringLength - 1] === "(" || s[stringLength - 1] === "[" || s[stringLength - 1] === "{"
}

const isOddLengthOfString = (s) => {
    return s.length % 2 === 1;
}


const isValidParentheses = (s) => {

    isOddLengthOfString(s);
    stringStartChecking(s);
    stringEndChecking(s);

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