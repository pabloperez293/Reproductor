

// function iniciar() {
//     let btn = document.getElementById("escuchar")
//         btn.addEventListener("click", presionar )
// }
//     function presionar(){
//         let audio = document.getElementById("audio")
//         audio.play()
//     }
//     function presionar() {
//         let audio = document.getElementById("audio")
//         audio.stop()
//     }

// window.addEventListener("load", iniciar)

const songList = [
    {
    title: "homero",
    File: "homero.mp3",
    cover: "1.jpeg"
    },
    {
    title: "Donald",
    File: "pato-donald.mp3",
    cover: "2.jpeg"
    },
    {
    title: "Rosa",
    File: "pink-panther.mp3",
    cover: "3.jpeg"
    },
    {
    title: "Mario",
    File: "super-mario-bros.mp3",
    cover: "4.jpeg"
    },
]

// Mostrar listado del DOM

    const songs = document.getElementById("songs")


// cargar lista 
function loadSongs(){
    songList.forEach((song, index) => {
        // Se crea elemento li 
        const li = document.createElement("li")
        // Se crea elemento a
        const link = document.createElement("a")

        link.textContent = song.title
        link.href = "#"
        // añade a y li 
        li.appendChild(link)
        songs.appendChild(li)


    })
}

// done 
loadSongs()