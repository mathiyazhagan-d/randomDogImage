//--------------------------title------------------
let title=document.createElement("div")
title.innerHTML=` <div class="bg-dark">
<p class="text-white text-center display-4 container-fluid p-2 ">Welcome to Dogs gallery</p>
</div> <div class="text h4">You can the see the random dog image by click
<span class="btn  btn-outline-dark " onclick="dog()">CLICK ME</span>
<div>`
let divRow=document.createElement("div")
divRow.classList.add("justify-content-between")
let div=document.createElement("div")
div.setAttribute("id","mainDiv")
divRow.append(div)
document.body.classList.add("alert-secondary")
document.body.append(title,divRow)
//--------------------asyncFunction----------------
async function dog() {
  let image = await (
    await fetch("https://dog.ceo/api/breeds/image/random")
  ).json();
  let mainDiv = document.querySelector("#mainDiv");
  mainDiv.innerHTML += `<div class="d-inline m-3 " >
<img src="${image.message}" class="card-img-top p-2 shadow mt-3 d-inline " style="width: 19rem;" alt="...">
</div>`;
}