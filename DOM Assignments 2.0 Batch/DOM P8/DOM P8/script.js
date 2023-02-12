const sec=document.querySelector('.new')
sec.style.height="92%"
sec.style.width="92%"
sec.style.overflow="auto"
const ele=document.createElement('aside')
ele.style.width="30%"
ele.style.border="2px solid black"
ele.style.display="flex"
ele.style.justifyContent="center"
ele.style.alignItems="center"
ele.appendChild(sec)
const man=document.querySelector('.row')
man.appendChild(ele)
const btn=document.querySelector('.navbar-toggler')
btn.addEventListener("click",func)


function func(){
    const fun=document.querySelector('.collapse')
    if(fun.style.display=="block"){
        fun.style.display="none"
    }
    else{
        fun.style.display="block"
    }
}