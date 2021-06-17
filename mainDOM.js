const myform = document.querySelector('#myform')
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email')
const submit = document.querySelector('#submit');

const mesg = document.querySelector('#msg');
/*
submit.addEventListener('click', (e)=> {
    e.preventDefault()

    //document.querySelector('#myform').style.backgroundColor = 'red';
})
*/

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    //lets do some validations
    if (inputName.value == '' || inputEmail.value == ''){
        //alert('hey, dude follow simple instruction');
        mesg.innerHTML = 'Hey  dude, i know you are sick.. please read instructions well';

        setTimeout(() =>mesg.remove(), 3000);
    }
    else {
        alert('okay')}


}