const d = new Date();
document.getElementById("fullyear").innerHTML = d.getFullYear();




// Create an empty Object
const current_month = { current_month };

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// Display Data from Object
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";


/* 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const m = new Date();

let month = months[m.getMonth()]; 
document.getElementById("month").innerHTML = month;

const lastday = function(y, m){
	return new Date(y, m + 1,0).getDate();
}

for ( i = 0; i<lastday(d.getFullYear(), d.getMonth()); i++) {

const para = document.createElement("li");
const node = document.createTextNode(i+1);
para.appendChild(node);

const element = document.getElementById("days");
element.appendChild(para);
}
*/