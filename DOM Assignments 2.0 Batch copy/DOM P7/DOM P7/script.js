
const val=document.querySelectorAll('.main__languages a')
val.forEach((val1,i)=>{if(i%2!=0){val1.innerHTML=""}})
const add=document.querySelector('.main')
const inp=document.querySelector('.main__form-input')
inp.placeholder="iNeuron"
const field=document.querySelector('.main__form')
const new1=document.createElement('div')
// new1.style.height="400px"
// new1.style.width="200px"
new1.style.minHeight="200px"
new1.style.display="flex"
new1.style.flexDirection="column"
new1.style.alignItems="center"
new1.style.justifyContent="space-around"
add.appendChild(new1)
new1.appendChild(field)
const divnew=document.createElement('div')
divnew.style.height="30px"
divnew.style.width="300px"
divnew.style.backgroundColor="Red"
divnew.style.color="white"
divnew.innerText="After Writing the Text submit the form"
divnew.style.display="flex"
divnew.style.justifyContent="center"
divnew.style.alignItems="center"
divnew.style.marginTop="10px"
new1.appendChild(divnew)
