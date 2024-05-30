const form=document.querySelector('.form');
const btn=document.querySelector('.submit_btn');
const errors=document.querySelectorAll('.error');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const email=document.getElementById('email');
const query1=document.querySelector('.general');
const query2=document.querySelector('.support');
const msg=document.getElementById('msg');
const terms=document.getElementById('consent');
const success=document.getElementById('success-message');

form.addEventListener('submit', e=>{

    let message= [];
    function isValid(email){
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
   
    console.log('submitted');

    if(fname.value === ""){
        message.push('error');
        console.log(message);
        errors[0].style.display="block";
    }else{
        errors[0].style.display="none";
    }
    if(lname.value === ""){
        message.push('error');
        console.log(message);
        errors[1].style.display="block";
    }
    else{
        errors[1].style.display="none";
    }
    if(email.value === "" || !isValid(email.value)){
        message.push('error');
        console.log(message);
        errors[2].style.display="block";
    }
    else{
        errors[2].style.display="none";
    }
    if(!query1.checked && !query2.checked){
        message.push('error');
        console.log(message);
        errors[3].style.display="block";
    }
    else{
        errors[3].style.display="none";
    }
    
    if(msg.value === ""){
        message.push('error');
        console.log(message);
        errors[4].style.display="block";
    }
    else{
        errors[4].style.display="none";
    }
    if(!terms.checked){
        message.push('error');
        console.log(message);
        errors[5].style.display="block";
    }
    else{
        errors[5].style.display="none";
    }

    if(message.length > 0){
        console.log('it is');
        e.preventDefault();
    }
    else{
        showSuccessMessage();
        e.preventDefault();
    }
    function showSuccessMessage() {
        success.classList.remove('hidden');
        setTimeout(() => {
            form.submit();
          success.classList.add('hidden');
        }, 2000); // Hide the message after 3 seconds
      }
   
})