const form = document.querySelector('.formField')
const takeElement = document.querySelector('.takeElement')
const messageArea = document.getElementById('txtarea')
testPattern = /^[a-zA-Z]{6,10}$/
const menubtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
let isOpen = false;



form.addEventListener('submit', e =>{
    e.preventDefault();
    let firstN = form.Firstname.value;
     let secondN = form.middlename.value;
      let textarea = messageArea.value;
      

     

      if(!firstN || !secondN || !textarea){
        alert('Every filled must be alive!')
        return
      }
     
      console.log(firstN, secondN, textarea, 'somethings>>>>')
     

    const formValue = form.Firstname.value;
    

    if(testPattern.test(formValue)){
        takeElement.textContent = 'A strong character'
     takeElement.style.color = 'white'
     takeElement.style.backgroundColor = 'green'
     takeElement.style.width = '50%'
     takeElement.style.padding = '5px'
     takeElement.style.opacity = '0.6'
   
        console.log('hippie yo!')
    }
    else{
        takeElement.textContent = 'not a strong one'
        takeElement.style.color = 'red'
         console.log('too bhad!')
    }

});



form.Firstname.addEventListener('keyup',(e)=>{
    
    const trueName = e.target.value;
   
 
    
    if(testPattern.test(trueName)){
        // form.Firstname.setAttribute('class','success')
        form.Firstname.classList.add('success')
        form.Firstname.classList.remove('error')
        
    }

    else{
        // form.FirstName.setAttribute('class','redcol')
         form.Firstname.classList.add('error')
          form.Firstname.classList.remove('success')
    }
   
  
})

form.middlename.addEventListener('keyup',(e)=>{
    
    const queName = e.target.value;
   
 
    
    if(testPattern.test(queName)){
        // form.Firstname.setAttribute('class','success')
        form.middlename.classList.add('success')
        form.middlename.classList.remove('error')
        
    }

    else{
        // form.FirstName.setAttribute('class','redcol')
         form.middlename.classList.add('error')
          form.middlename.classList.remove('success')
    }
   
  
})


menubtn.addEventListener('click', ()=>{
    isOpen = !isOpen
     mobileMenu.classList.toggle("hidden", !isOpen); // show/hide menu
    menubtn.textContent = isOpen ? "✕" : "☰"; // change icon
})