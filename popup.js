//popup boxes - alert, confirm, promt

alert("error here");

confirm("are you sure");



function deleteSomething(){
    let value = confirm("Do you want to delete?");
    if(value){
        console.log('deleted');
    }
    else{
        console.log('not deleted');
    }
}

function welcomeMessage(){
    const h1 = document.createElement('h1');
    let text;
    let name = prompt("Enter your name: ");
    if(name == null || name == ''){
        text = "no name found";
    }
    else{
        text= "welcome " + name;
    }
    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1)
}
welcomeMessage();
