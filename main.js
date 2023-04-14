const cover = document.querySelector('cover');
const loader = document.querySelector('.loader-container')
const main = document.querySelector('main')

document.querySelector('form').addEventListener('submit', (e)=>{
  if(e == undefined){e= window.event}

  e.preventDefault()

  const data = Object.fromEntries( new FormData(e.target) )
  const username = data.username

  load()
})

function load(){
  loader.classList.toggle('off')
  const int = setTimeout(() => {
    loader.classList.toggle('off')
    cover.classList.toggle('off')
    main.classList.toggle('off')
  }, 2000);
}

const popup = document.querySelector('popup')

const close_btn = document.querySelector('.close').addEventListener('click', ()=>{
  popup.classList.toggle('off')
})

const qst_btn = document.querySelector('.qst').addEventListener('click', ()=>{
  popup.classList.toggle('off')
})

const sect_1 = document.querySelector('.sect-1')
const main_sect = document.querySelector('.main-sect')

const next = document.querySelector('.arrow').addEventListener('click', ()=>{
  loader.classList.toggle('off')
  const int = setTimeout(() => {
    loader.classList.toggle('off')
    sect_1.classList.toggle('off')
    main_sect.classList.toggle('off')
  }, 2000);
})

const f_sect = document.querySelector('f-section')

const next_btn = document.querySelector('.next').addEventListener('click', ()=>{
  loader.classList.toggle('off')
  const int = setTimeout(() => {
    loader.classList.toggle('off')
    main.classList.toggle('off')
    f_sect.classList.toggle('off')
  }, 2000);
})


const count = document.querySelector('.count')

const random_btn = document.querySelector('.random').addEventListener('click', ()=> {
  let res = Math.floor(Math.random() * (22- 1) + 1)
  count.innerHTML = res
})