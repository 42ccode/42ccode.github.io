let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable = "cc"
myVariable = "kiki"

let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("我最喜欢巧克力冰淇淋了。");
} else {
    alert("但是巧克力才是我的最爱呀……");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiply(5, 2));
console.log(multiply(5, 3));

// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
// });

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Starship.jpg") {
        myImage.setAttribute("src", "images/about.png");
    } else {
        myImage.setAttribute("src", "images/Starship.jpg");
    }
}

let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("What is your name?");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName;
}

myButton.onclick = () => {
    setUserName();
}