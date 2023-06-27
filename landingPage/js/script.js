const foot = document.getElementById('year')

const year = new Date().getFullYear()

foot.innerHTML = year

const btnMenu = document.getElementById('btn-menu')

const list = document.getElementById('nav-items')

let show = true;

btnMenu.addEventListener('click', () => {
    show = !show
    if(show){
        list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }
}, true)

window.addEventListener('resize', () => {
    const width = screen.width
    if(width >= 425.99999){
        list.style.display = 'flex'
    }else{
        list.style.display = 'none'
        show = false
    }
}, true)


window.addEventListener('load', ()=> {
    const width = screen.width
    if(width >= 425.99999){
        list.style.display = 'flex'
    }else{
        list.style.display = 'none'
        show = false
    }
})
