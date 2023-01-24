function checkIPv6(address){
    return /^([A-Fa-f0-9]){1,4}$/.test(address);
}

function checkIPv4(address){  
    return /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))$/.test(address);
}


var validIPAddress = function(queryIP) {
    let query = queryIP.split(/[:.]/);
    
        if (query.length === 4){
            if(query.every(checkIPv4)){
            return "IPv4"
            }
            return "Neither"
        }
        
        else if (query.length === 8){
            if(query.every(checkIPv6)){
                return "IPv6"
            }
            return "Neither"
        }
    
    else {
      return  "Neither";  
    }
};