window.onload = init;

function init () {
    let image = document.getElementById("avatar2")
    image.onclick = showAnswer;
    image.onmouseover = fnReplacement;
    image.onmouseout = fnRecovery;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        let style = document.getElementById("style")
        style.href = "stylePhone.css"
        let ad = document.getElementById("ad")
        ad.innerHTML = "PS: Советую нажать на картинку снежинки &#10052; в начале страницы"
      }
}

function fnReplacement () {
    let image = document.getElementById("avatar2")
    image.src = "thanks2.gif"
}

function fnRecovery () {
    let image = document.getElementById("avatar2")
    image.src = "avatar2.jpg"
}

 function showAnswer () {
    let image = document.getElementById("avatar2")
    image.src = "thanks2.gif"
 }
