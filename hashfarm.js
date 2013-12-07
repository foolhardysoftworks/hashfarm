
function solve(challenge, difficulty, callback, digest, start){
    if(!digest){var digest = 0}    
    if(!start){var start = Date.now()}
    for (var i=digest; i<digest+50; i++){
	var solution = i.toString()
	if(checkHash(challenge + solution + challenge, difficulty)){
	    callback(challenge, i)
	    return
	}
    }
    if(Date.now() - start > 25){
	setTimeout(function(){solve(challenge, difficulty, callback, i)}, 5)
	return
    }
    else{
	solve(challenge, difficulty, callback, i, start)
	return
    }

    function checkHash(input, difficulty){
	return parseInt(
	    parseInt(
 		'1' + CryptoJS.SHA256(input)
		    .toString()
		    .substring(0, 7),
		16)
		.toString(2)
		.substring(1, difficulty + 1), 2) == 0
    }
}	
	

