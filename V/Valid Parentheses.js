var isValid = function(s) {
    let hashMap = {"{" : "}", "[" : "]", "(" : ")"}
    let stack = []
    for (let ch of s){
        if(hashMap[ch]){
            stack.push(hashMap[ch])
        }
        else if (stack.length > 0 && stack[stack.length - 1] == ch) {
            stack.pop()
        }
        else {
            return false
        }
    }
    if (stack.length < 1){
        return true
    }
};