console.log ()
let form=document.getElementById("formu");
let input=document.getElementById("inp");
let list=document.getElementById("list");

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let msg=document.getElementById("msg");
    if (input.value=="") {
        msg.textContent="Can't be empty";
    } else {
        msg.textContent="";
        let elemento=document.createElement("li");
        elemento.textContent=input.value;
        input.value="";
        elemento.addEventListener("click",()=>{
            elemento.setAttribute("class","rayar")
        })
        list.appendChild(elemento);
    }
})
