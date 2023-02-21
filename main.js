$(function () {
  $('.p-name').text('')
  typeWriter('Elvis Ribeiro')
})

$('#linkedin').hover(
  function () {
    $('#linkedin').addClass('fa-beat-fade')
  },
  function () {
    $('#linkedin').removeClass('fa-beat-fade')
  }
)

$('#github').hover(
  function () {
    $('#github').addClass('fa-beat-fade')
  },
  function () {
    $('#github').removeClass('fa-beat-fade')
  }
)

$('#instagram').hover(
  function () {
    $('#instagram').addClass('fa-beat-fade')
  },
  function () {
    $('#instagram').removeClass('fa-beat-fade')
  }
)

$('#whatsapp').hover(
  function () {
    $('#whatsapp').addClass('fa-beat-fade')
  },
  function () {
    $('#whatsapp').removeClass('fa-beat-fade')
  }
)
$('#email').hover(
  function () {
    $('#email').addClass('fa-beat-fade')
  },
  function () {
    $('#email').removeClass('fa-beat-fade')
  }
)

function typeWriter(nome) {
  setTimeout(() => {
    var letrasNome = nome.split('')
    letrasNome.forEach((letra, index) => {
      setTimeout(function () {
        $('.p-name').text($('.p-name').text() + letra)
      }, 150 * index)
    })
  }, 1500)
}

window.sr = ScrollReveal({ reset: true })
ScrollReveal({ distance: '50px' })
sr.reveal(`.p-col__b, .p-about__text, .p-skill`, {
  duration: 3000,
  origin: 'right'
})
sr.reveal('.p-title', { duration: 3000, origin: 'top' })
sr.reveal(`.p-circle, .p-col__a `, {
  duration: 3000,
  origin: 'left'
})
sr.reveal(`.p-box-content`, {
  duration: 3000,
  origin: 'bottom'
})

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(skill)
  activateMenuAtCurrentSection(project)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
