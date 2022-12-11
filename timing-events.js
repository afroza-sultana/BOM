setTimeout(() =>{
    console.log('hi')
}, 2000);



setTimeout(display, 2000);
function display(){
    console.log("display function");
}



const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');
saveButton.addEventListener('click', saveUser);

function saveUser(){
    message.textContent = "user reg successful";
    setTimeout(()=>{
        message.textContent = "";
    } , 2000);
}


//set Interval()
const saveButton2 = document.querySelector('.save-btn2');
const message2 = document.querySelector('.message2');
saveButton2.addEventListener('click', displayCount);
function displayCount(){
    let count = 1;
    message2.textContent = count;
    setInterval(()=>{
        count++;
        message2.textContent = count;
    
    } , 1000)
}