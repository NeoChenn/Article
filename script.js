button = document.querySelector("button");
arrow = document.querySelector(".arrow");
share = document.querySelector(".share");
button.addEventListener("click",function(){
  if (arrow.style.visibility==="visible" && share.style.visibility === "visible"){
    arrow.style.visibility = "hidden";
    share.style.visibility = "hidden";
  } else{
    arrow.style.visibility = "visible";
    share.style.visibility = "visible";
  }
})