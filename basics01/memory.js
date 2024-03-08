// stack(primitive) -----> copy
// heap(non primitive) ----> reference


let myYoutubeName = "khushi08.com"

let anothername = myYoutubeName
anothername = "hello.com"

console.log(myYoutubeName)
console.log(anothername)


let userOne = {
    email: "user@google.com",
    upi : "user@ybl"

}

let userTwo = userOne

userTwo.email = "khushi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);