let form=document.forms['myform'];
let cont=document.getElementById('main_wrapper');
let submit=document.getElementById('submit');
let reset=document.getElementById('reset');

let div=document.createElement('div');
div.id='error_display';
cont.appendChild(div);
div.style.display='none';
div.style.zIndex='30';

submit.addEventListener('click',()=>{
    let name=form['name'].value;
    let email=form['Email-Id'].value;
    let phone=form['Phone'].value;
    let message='';
    if(name.length > 25){
        message+=`Name shouldn't excceed more<br> than 25 characters<br>`;
    }
   let reg=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
   if(!reg.test(email)){
    message+=`email must have '@' and '.'<br>`;
   }
   let num=/^\d{10}$/;
   if(!num.test(phone)){
    message+=`phone number shouldn't be more than 10 digits or less than 10 digits<br> `;
   }
   if(message){
    div.innerHTML=message;
    div.style.display='block';
   }else{
    div.style.display='none';
   }
})
reset.addEventListener('click',()=>{
    let name=form['name'];
    let email=form['Email-Id'];
    let phone=form['Phone'];
    let query=form['query'];
    name.value='';
    email.value='';
    phone.value='';
    query.value='';
})