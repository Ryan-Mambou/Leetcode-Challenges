var checkIfPangram = function(sentence) {
    let arr = [];
    let count = 0;
    
    for (let i = 0; i < sentence.length; i++){
        if (arr.indexOf(sentence[i]) == -1){
            arr.push(sentence[i])
            count++
        }
    }
    
    return count == 26;
};