var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
  // After 'cats' and 'ca', it will become 'andog', 'tsandog'
  // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
    let visited = new Set();
    let queue = [0];

    while(queue.length){
        let current = queue.shift()

        if(!visited.has(current)){
            for(let end = current + 1; end <= s.length; end++){
            console.log(end)
            if(set.has(s.slice(current, end))){
                if(s.length === end){
                    return true
                }
                queue.push(end)
            }
        }
        visited.add(current)
        }
    }
    return false;
};