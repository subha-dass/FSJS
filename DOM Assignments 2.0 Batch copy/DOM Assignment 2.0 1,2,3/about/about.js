
//1st
const list="<li><a>Projects</a></li>"
const nav=document.querySelector('ul')
nav.innerHTML+=list
//2nd
const faq=document.querySelector('.accordian-wrapper')
let skill=document.createElement('div')
skill.className="accordian"
faq.appendChild(skill)
let skill_h3=document.createElement('h3')
skill_h3.textContent="Skills"
let skill_p=document.createElement('p')
skill_p.textContent="posses a very good command over the Full Stack Development technologies like MERN which can beseen in my work over the Github."
skill.appendChild(skill_h3)
skill.appendChild(skill_p)
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

