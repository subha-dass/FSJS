# DOM Assignment 2.0 1,2,3
![img1](./firstAssignmentImage/task2Output.png)
```
//1st 
const list="<li><a>Hire Me</a></li>"
const nav=document.querySelector('ul');
nav.innerHTML+=list;
//2nd 
const input=document.querySelector('.search-field input');
input.placeholder="Search My Project"
//3rd 
const text=document.querySelectorAll('.hero-left-section p span')
text[1].innerText="Product Devlope";
text[2].innerText="Comviva Technology"
//4th 
const img=document.querySelector('.hero-right-section img')
img.src='./73764750.jpg'
//5th
const btn=document.querySelector('.hero-right-section-btns')
const btn2=document.createElement('button')
btn2.textContent="Support Me"
btn.appendChild(btn2)
```
### Output image
![img1](./firstAssignmentImage/Screenshot%20(101).png)
![img2](./secondAssignmentImage/Screenshot%20(103).png)
![img3](./thirdAssignmentImage/Screenshot%20(104).png)