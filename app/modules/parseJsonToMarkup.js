export default function parseJsonToMarkup (json, isRoot = true) {
  const nodeTree = Object.values(json).map(({
    type,
    textContent,
    classes,
    id,
    attributes,
    children,
  }) => {
    const node = document.createElement(type)

    if (textContent) {
      const text = document.createTextNode(textContent)
      node.appendChild(text)
    }

    if (classes) {
      node.setAttribute('class', classes)
    }

    if (id) {
      node.id = id
    }

    if (attributes) {
      for (const attr in attributes) {
        node.setAttribute(attr, attributes[attr])
      }
    }

    if (children) {
      parseJsonToMarkup(children, false)
        .forEach(element => {
          node.appendChild(element) 
        })
    }
    return node
  })

  return isRoot
    ? nodeTree[0]
    : nodeTree
} // end parse json to markup