function expandir() {
    let more = document.getElementById("more");
    let btn = document.getElementById("btn-mais");

    if (more.style.display === "inline") {
        more.style.display = "none";
        btn.innerHTML = "Mais"; 
      } else{
        more.style.display = "inline";
        btn.innerHTML = "Menos"; 
      }
}