import {
  createElement,
} from './helpers'

const typeTextAndTalk = ({
  text,
  el,
  startAt,
  img,
  fast,
}) => {
  // doc please!!
  if (!img) {
    createElement(document.body, 'span', 'img-ting', '', '')
    img = document.getElementById('#img-ting') // create blank span if there's no image.
  }
  const imgSwap = (img.getAttribute('data-swap-img')) ? img.getAttribute('data-swap-img') : img.getAttribute('src') // get image url to swap to from swap-img attr, in this case gif of me talking.
  const imgOrig = (img.getAttribute('data-orig-img')) ? img.getAttribute('data-orig-img') : img.getAttribute('src') // get image url of original image, gif of me not talking.

  const i = startAt ? startAt : 0 // set counter for what part of the string to begin from

  const currentText = text.substr(0, i) // set currentText as substring of text argument

  const currentChar = currentText.charAt(currentText.length - 1)

  const currentCharIsPunctuation = (
    currentChar === '.' ||
    currentChar === ','
  )

  if (currentChar === '<') {
    fast = true
  }

  if (currentChar === '>') {
    fast = false
  }


  if (currentCharIsPunctuation) {
    // if the last character typed was '.' or ',' take a breather
    if (img.getAttribute('src') != imgOrig) {
      img.src = imgOrig // swap image to original image
    } // en if src = original image
  } else {
    if (img.getAttribute('src') != imgSwap) {
      // if img is not imgSwap set img to imgSwap
      // use .getAttribute() instead of .src as .src returns whole url not just attribute / filename
      img.src = imgSwap
    }
  }

  if (currentText.length == text.length) {
    if (img) {
      el.innerHTML = text
      img.src = imgOrig // switch back to original image
      return
    }
  } else {
    el.innerHTML = currentText // update element's html to currentText and increase character
    const speedFactor = fast ? 0 : 1
    const delta = currentCharIsPunctuation
      ? 600
      : 50

    setTimeout(() => {
      typeTextAndTalk({
        text,
        el,
        startAt: i + 1,
        img,
        fast,
      }) // recursive call of function
    }, delta * speedFactor)
  }
}

export default typeTextAndTalk
