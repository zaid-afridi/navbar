let nav = document.getElementById('header1')
let navicn = document.getElementById('header-2')
let navhot = document.getElementById('header-3')
function showmenu() {
    nav.style.display = "flex"
}
function showx() {
    navicn.style.display = 'none'
    navhot.style.display = "flex"
}

function close() {
    nav.style.display = "none"
    navicn.style.display = 'flex'
    navhot.style.display = "none"
}
navicn.addEventListener('click', showmenu)
navicn.addEventListener('click', showx)
navhot.addEventListener('click', close)



