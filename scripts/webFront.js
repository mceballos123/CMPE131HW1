// This function accepts a default password. However, if the user enters "FrankButt" on the screen,
// the function will display "frankbutt" instead.

//Next style the all elements displayed on the home page and the transcript page
//let lowerCasePassword='frankbutt'
let correctPassword='frankbutt';

const linkButton=document.querySelector('.transcriptTableJs');
const dropdownTable=document.getElementById('dropdown')
//const submitButton=document.getElementById('submitButton');

const submitButton=document.querySelector('.submitButton');

function verifyPassword(event){
    let userPassword=prompt('Please enter the password')

    if(userPassword==correctPassword){
        window.location.href='transcript.html'
    }else{
        event.preventDefault();
        alert('Please enter the correct password')
    }
}


if(linkButton){

    linkButton.addEventListener('click',verifyPassword);
}else{
    console.error("The .transcriptTableJs class was not found")
}

submitButton.addEventListener('click',()=>{
    const selectedPage=dropdown.value;
    if(selectedPage){
        window.location.href=selectedPage;
    }else{
        alert('Please select a page')
    }
})


