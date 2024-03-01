function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else { html.classList.add('light')}
  //toda essa linha de código pode ser simplificada para
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "um cara usando oculos escuros")
  } else {
    //se tiver root mode manter a imagem
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "um cara usando oculos")
  }
}
