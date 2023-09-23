function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // Troca de imagem

  let img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./media/avatar-lightmode.png")
  } else {
    img.setAttribute("src", "./media/avatar.png")
  }

}