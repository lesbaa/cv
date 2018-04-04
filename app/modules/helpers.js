export const createElement = ({
  parent,
  type,
  id,
  classes,
  content,
  pushToArray,
  arrayName,
}) => {
  const el = document.createElement(type)

  if (id) {
    el.id = id // set id
  }

  if (classes) {
    el.setAttribute('class', classes || '') // set class(es) if it's defined
  }

  if (content) { // if it's an image use content for src
    if (type == 'img') {
      el.src = content
    }

    if (type == 'style') { // if it's a style then make a style element.
      el.setAttribute('type', 'text/css')
      const text = document.createTextNode(content)
      el.appendChild(text)
    }

    else { // otherwise just smoosh it in
      el.innerHTML = (content || '')
    }

  } else {
    el.innerHTML = ''
  }

  parent.appendChild(el)
  // push to array for bulk manipulation.
  if ((pushToArray) && (pushToArray === true)) {
    if (arrayName) {
      arrayName.push(el)
    } // end if arrayName
  } else {
    return el
  }
}

export const setPos = (xValue, yValue, element) => {
  // sets x and y coords for absolutely positioned elements
  if (xValue.charAt(0) == '-') {
    // if minus value set to from the right
    element.style.right = xValue.substr(1)
  } else {
    element.style.left = xValue
    // if positive, from the left
  }
  if (yValue.charAt(0) == '-') {
    // same idea with y coords
    element.style.bottom = yValue.substr(1)
  } else {
    element.style.top = yValue
  }
}

export const getCharacterClass = () => {
  const rand = Math.round(Math.random() * 2)
  const choices = [
    'Level 19 Renegade Bounty Hunter',
    'Level 20 Dwarven Code-smith',
    'Level 18 Wise-cracking Code Smuggler',
  ]

  return choices[rand]
}