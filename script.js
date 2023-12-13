const authbtn = document.getElementsByClassName('authbtn');
const show_password = document.getElementsByClassName('show_password');
const submit_form = document.getElementsByClassName('submit_form');
const explore_dropdown = document.getElementsByClassName('explore_dropdown')
const singupbtn = document.getElementsByClassName('singupbtn')
const profile = document.getElementsByClassName('profile')
const auth_section = document.getElementsByClassName('auth_section')
const connect_section = document.getElementsByClassName('connect_section')
const add_your_own = document.getElementsByClassName('add_your_own')
const testimonials = document.getElementsByClassName('testimonials')
const section = document.getElementsByClassName('section')
const footer = document.getElementsByClassName('footer')
const logedin = document.getElementsByClassName('logedin')

const password = document.getElementById('password')
const password_strength = document.getElementById('password_strength')
const remember_password = document.getElementById('remember_password')
const policy_link = document.getElementById('policy_link')

let exploredropdown = false

function switchform(a, b) {
  authbtn[a].classList.remove('active_form')
  authbtn[b].classList.add('active_form')
  if (a === 0) {
    submit_form[0].style.display = "none"
    submit_form[1].style.display = "block"
    password_strength.style.display = "flex"
    policy_link.style.display = "block"
    remember_password.style.display = 'none'
  } else {
    submit_form[1].style.display = "none"
    submit_form[0].style.display = "block"
    password_strength.style.display = "none"
    policy_link.style.display = "none"
    remember_password.style.display = "flex"
  }
}

function visible(a, b) {
  show_password[a].style.display = "none"
  show_password[b].style.display = "block"
  if (a === 0) {
    password.type = "text"
  } else {
    password.type = "password"
  }
}

function actiondropdown() {
  if (exploredropdown) {
    explore_dropdown[0].style.display = "none"
    exploredropdown = !exploredropdown
  } else {
    explore_dropdown[0].style.display = "block"
    exploredropdown = !exploredropdown
  }
}

function login() {
  singupbtn[0].style.display = "none"
  profile[0].style.display = "flex"
  auth_section[0].style.display = "none"
  connect_section[0].style.display = "none"
  add_your_own[0].style.display = "none"
  testimonials[0].style.display = "none"
  section[0].style.display = "none"
  footer[0].style.display = "none"
  logedin[0].style.display = "flex"
}
