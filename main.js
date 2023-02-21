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
ScrollReveal({ distance: '15px' })
sr.reveal(`.p-col__a, .p-content__cod`, { duration: 3000, origin: 'right' })
sr.reveal('.descricao', { duration: 3000, origin: 'left' })
sr.reveal('.linkedin', { duration: 3000, origin: 'left' })
sr.reveal('.desenho-bg', { duration: 3000, origin: 'left' })
sr.reveal('.sobre-mim', { duration: 3000, origin: 'right' })
sr.reveal('.projetos-itens', { duration: 3000, origin: 'bottom' })
sr.reveal('.project', { duration: 3000, origin: 'bottom' })
sr.reveal('.github-link', { duration: 3000, origin: 'bottom' })
sr.reveal('.conteiner-skills', { duration: 3000, origin: 'left' })
sr.reveal('.conteiner-descricao', { duration: 3000, origin: 'right' })
