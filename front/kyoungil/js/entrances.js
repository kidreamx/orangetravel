const imgs = document.querySelector("#imgs")
const bg = ["bg1.jpeg","bg2.jpeg","bg3.jpeg","bg4.jpeg"]
const button_pev = document.querySelector(".button-pev");
const button_next = document.querySelector(".button-next");
const pages_current = document.querySelector("#current");
let imgs_index = 0;
imgs.src = `img/${bg[0]}`
button_pev.addEventListener("click",(e)=>{
  if(pages_current.innerHTML == "01"){
    pages_current.innerHTML = "04";
    imgs_index=3;
  }
  else{
    pages_current.innerHTML = "0"+imgs_index;
    imgs_index--;
  }
  imgs.src = `img/${bg[imgs_index]}`
})
button_next.addEventListener("click",(e)=>{
  if(pages_current.innerHTML == "04"){
    pages_current.innerHTML = "01";
    imgs_index=0;
  }
  else{
    pages_current.innerHTML = "0"+(imgs_index+2);
    imgs_index++;
  }
  imgs.src = `img/${bg[imgs_index]}`
})
