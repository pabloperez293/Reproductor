

function iniciar() {
    let btn = document.getElementById("escuchar")
        btn.addEventListener("click", presionar )
}
    function presionar(){
        let audio = document.getElementById("audio")
        audio.play()
    }
    function presionar() {
        let audio = document.getElementById("audio")
        audio.stop()
    }

window.addEventListener("load", iniciar)