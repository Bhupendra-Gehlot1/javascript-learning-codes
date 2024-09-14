function sayHello(userName) {
    if(!userName){
        console.log("Please enter userName");
        return;
    }
    return `${userName}, Just Logged In`;
}

console.log(sayHello("Bhupii"))
console.log(sayHello());

function sayHello2(userName = "GodLike") {
    if(!userName){
        console.log("Please enter userName");
        return;
    }
    return `${userName}, Just Logged In`;
}

console.log(sayHello2("Bhupii"))
console.log(sayHello2());