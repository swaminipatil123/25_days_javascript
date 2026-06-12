function one(){
    const username = "swamini"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

 one()

if (true) {
    const username = "swamini"
    if (username === "swamini") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

//console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num + 2
}
addTwo(5)