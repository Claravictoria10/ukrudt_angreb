console.log("loaded..");

document.querySelector("#information").addEventListener("click", information);
function information() {
  console.log("tjek tjek information");
  document.querySelector("#_roots_").classList.toggle("jump");
  document.querySelector(".info-text h2").textContent = "Information";
  document.querySelector(".placeholder").textContent = "Vigtig information";
  document.querySelector("#efficiency").textContent =
    "Hvor kommer den farlig ukrudt fra og hvad gør den?";
  document.querySelector("#requirement").textContent =
    "GravRoot begyndte som et “helt harmløst laboratorieforsøg” i USA, hvor forskerne ville skabe en plante, der kunne rydde ukrudt af sig selv. I stedet skabte de en plante, der rydder alt… inklusive ting, der bestemt ikke burde ryddes. Den muterede plante har udviklet en ekstremt aggressiv rodstruktur. De dybeste rødder fungerer som fangarme, der kan trække tunge objekter ned i jorden og det er nu bekræftet, at følgende er blevet “absorberet”: Hele mennesker (uden invitation) En fuld turistbus Et mindre fly, som GravRoot efter sigende tog “fordi det fløj for tæt på jorden” Huller forårsaget af planten er dybe, symmetriske og lugter af en blanding af muld og dårlig samvittighed.";
}

document.querySelector("#ukrudt").addEventListener("click", ukrudt);
function ukrudt() {
  console.log("tjek tjek ukrudt");
  document.querySelector("#_face_").classList.toggle("big");
  document.querySelector(".info-text h2").textContent = "Hvad gør urkudten?";
  document.querySelector(".placeholder").textContent = "  ";
  document.querySelector("#efficiency").textContent =
    "Her kan du læse dig klogere på ukrudten og hvordan den kan identificeres.";
  document.querySelector("#requirement").textContent =
    "Ukrudten kan identificeres, da der større end normalt ukrudt og vokser i voldsommere og større mængder, ukrudtet er tykkere i roden og meget livligt. Hvis du kommer i besidelse af kornene, er det runde med små rødder ud af hovedet. De er først farlige når de kommer i jorden og får fat i vandkilderne, derfor opfordrer vi i høj grad at man putter kornene i helt tætte glas uden jord eller væske";
}

document.querySelector("#liveblog").addEventListener("click", liveblog);
function liveblog() {
  console.log("tjek tjek liveblog");
  document.querySelector("#_face_").classList.toggle("big");
  document.querySelector("#_roots_").classList.toggle("jump");
  document.querySelector(".info-text h2").textContent = "Live blog";
  document.querySelector(".placeholder").textContent =
    "live blog - opdateres løbene";
  document.querySelector("#efficiency").textContent =
    "MANDAG: der er kl 10:17 blevet rappoteret et indbrud på et topsikret laboratorium i Navada USA. Det siges at der er blevet stjålet en sjælen og meget farlig udvikning af ukrudt. Kl 15:32 er der i New York blevet rappoteret det første udnrud af farlig ukrudt, her er flere mennesker forsvundet ned i jorden, samt en turistbus med hele 57 turister væk. TIRSDAG: kl 12:34 er det første udbrud i Europa blevet registreret, her står forsvaret i Paris lige nu med hænderne fulde, da ukrudten er ved at få fat i Eifeltårnet.";
  document.querySelector("#requirement").textContent =
    "Denne live-blok er hermed lukket.";
}
