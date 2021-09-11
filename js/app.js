import galleryItems from '../js/items.js'

const galleryEl = document.querySelector('.js-gallery')
// console.log(galleryEl)
const imageMarkup = createImageCardMarkup(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', imageMarkup)

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    })
    .join('')
}

const modalEl = document.querySelector('.js-lightbox')
// console.log(modalEl)
const imgEl = document.querySelector('.lightbox__image')
// console.log(imgEl)
galleryEl.addEventListener('click', openModal)

function openModal(event) {
  // console.log(event.target.nodeName)
  event.preventDefault()
  // console.log(event.target)
  // console.log(event.target.dataset.source)
  modalEl.classList.add('is-open')
  imgEl.src = event.target.dataset.source
}
const buttonEl = document.querySelector('.lightbox__button')
// console.log(buttonEl)
buttonEl.addEventListener('click', closeModal)
function closeModal(event) {
  modalEl.classList.remove('is-open')
  imgEl.src = ''
}
// Закрытие модального окна по клику на div.lightbox__overlay
const divEl = document.querySelector('.lightbox__overlay')
divEl.addEventListener('click', closeModal)

// Закрытие модального окна по нажатию клавиши ESC
window.addEventListener('keydown', closeModalOnEsc)
function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    modalEl.classList.remove('is-open')
  }
}
