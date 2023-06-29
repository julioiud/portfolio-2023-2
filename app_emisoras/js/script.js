const emisoras = [
    {
        id: 0,
        label: 'Selecciona una...',
        url: '',
        param: 'selected'
    },
    {
        id: 1,
        label: 'Bésame',
        url: 'http://26673.live.streamtheworld.com/BESAME_MEDELLIN_SC',
        param: ''
    },
    {
        id: 2,
        label: 'La X',
        url: 'http://stream.eleden.com:8230/lax.aac',
        param: ''
    },
    {
        id: 3,
        label: 'Olimpica (La Dorada)',
        url: 'https://server2.ejeserver.com:8244/stream',
        param: ''
    }
]

const selectEmisoras = document.getElementById('select-emisoras')
const reproductor = document.getElementById('reproductor')
const signal = document.getElementById('signal')
const btnPause = document.getElementById('pause')
const btnPlay = document.getElementById('play')
const ctrlVolume = document.getElementById('volume')

let playing
let currentVolume

function llenarEmisoras() {
    let info = '';
    for(const emisora of emisoras) {
        info +=
        `
            <option ${emisora.param} value="${emisora.id}">${emisora.label}</option>
        `
    }
    selectEmisoras.innerHTML = info
}

function cambiarEmisora(evt) {
    console.log(evt.value)
    if(evt.value == 0){
        enableButtons(true)
    }else {
        enableButtons(false)
    }
    reproductor.src = emisoras[evt.value].url
    reproductor.value = currentVolume/100
    changeSignal()
}

function playMusic() {
    playing = true
    reproductor.play()
    reproductor.volume = currentVolume / 100
    changeSignal()
}

function pauseMusic() {
    playing = false
    reproductor.pause()
    changeSignal()
}

function changeVolume(evt) {
    console.log(evt.value)
    currentVolume = evt.value
    reproductor.volume = currentVolume / 100
    changeSignal()
}

function changeSignal() {
    const color = playing ? 'green': 'red'
    signal.style.color = color
}

function enableButtons(value){
    btnPlay.disabled = value
    btnPause.disabled = value
    ctrlVolume.disabled = value
    playing = !value
}


function init() {
    currentVolume = 20
    enableButtons(true)
    ctrlVolume.value = currentVolume
    reproductor.volume = currentVolume / 100
    llenarEmisoras()
    changeSignal()
}

(function(){
    init()
})();

