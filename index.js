let image=document.getElementById("image")
let warning=document.getElementById("warning")
image.style.width="500px";
count=120;
function onIncBtn(){
    if(count<=350){
        count+=5
        image.style.width=count+"px";
        warning.textContent="";
    }else{
        warning.textContent="image is to high"
        warning.style.color="red";
    }
}
function onDecBtn(){
    if(count>=200){
        count-=5
        image.style.width=count+"px";
        warning.textContent="";
    }else{
        warning.textContent="image is to low"
        warning.style.color="red";
    }
}

