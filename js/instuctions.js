console.log("loaded..");

document.querySelector("#information").addEventListener("click", information);
function information() {
  console.log("tjek tjek information");
  document.querySelector("#_roots_").classList.add("jump");
}

document.querySelector("#ukrudt").addEventListener("click", ukrudt);
function ukrudt() {
  console.log("tjek tjek ukrudt");
  document.querySelector("#_face_").classList.add("big");
}

document.querySelector("#liveblog").addEventListener("click", liveblog);
function liveblog() {
  console.log("tjek tjek liveblog");
  document.querySelector("#_face_").classList.add("big");
  document.querySelector("#_roots_").classList.add("jump");
}
