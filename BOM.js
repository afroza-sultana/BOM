//window  object
//location  object
console.clear();
console.log(window.location);

//href
console.log(location.href);

//protocol
console.log(location.protocol);
//hostname
console.log(location.hostname);
//port
console.log(location.port);
//pathname
console.log(location.pathname);


let locationDiv = document.querySelector(".location-div");
let p1 = locationDiv.children[0];
p1.textContent = location.href;

let p2 = locationDiv.children[1];
p2.textContent = location.hostname;

let p3 = locationDiv.children[2];
p3.textContent = location.protocol;

let p4 = locationDiv.children[3];
p4.textContent =location.port;


const visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click", function(){
    location.assign("https://www.studywithanis.com")
})