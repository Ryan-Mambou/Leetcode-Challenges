var capitalizeTitle = function(title) {
    let string = title.split(' ');
    for (let i = 0; i < string.length; i++){
        if(string[i].length > 2){
            string[i] = string[i][0].toUpperCase() + (string[i].slice(1)).toLowerCase()
        }
        else{
            string[i] = string[i].toLowerCase()
        }
    }
    return string.join(' ');
};