
function dropdownMenu() {

    var x = document.getElementById("dropdownclick");

    if (x.className === "topnav") {

        x.className += " responsive";
        /*#########change topnav to topnav respnsive*/
    } else {
        x.className = "topnav";
    }
}
var name = "x";
var age = 23;

var message = "what it do" + name + "i am" + age + "years old";

console.log(message);