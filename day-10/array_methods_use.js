//array methods use in real world

// push()  :  Add product to cart
let cart = ["Laptop", "Mouse"];
cart.push("Keyboard");
console.log("Cart :",cart);




// pop()  :  Remove last item from cart
let cart1 = ["Laptop", "Mouse", "Keyboard"];
console.log("removed element from cart :",cart1.pop());


// unshift()  :  Add breaking news at top
let news = ["Sports Update", "Weather Report"];
news.unshift("Breaking News");
console.log("unshift() :",news);



// shift()  :  Remove oldest notification
let notifications = ["Old Message", "New Message"];
notifications.shift();
console.log("shift():",notifications);


// includes()  :  Check if movie is in watchlist
let watchedMovies = ["3 Idiots", "KGF", "jawan"];
console.log("includes():",watchedMovies.includes("KGF"))


// indexOf()  :  Find position of a song in playlist
let playlist = ["Song A", "Song B", "Song C"];
console.log ("indexOf():",playlist.indexOf("Song B"))

// slice()  :  Show first 10 products on a page
let products = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10", "P11", "P12", "P13", "P14", "P15"];
console.log("slice():",products.slice(0, 10));

// splice()  :  Delete/edit a task from todo list
let tasks = ["Study", "Exercise", "Shopping"];
console.log("task remove from todo list :", tasks.splice(1, 1,));

console.log("splice() delete:",tasks)
tasks.splice(1, 1, "codding")
console.log("splice() edit:",tasks);



