// TODO if no parent element return rendered element
export default function parseJsonToMarkup (jsonInput) {
  // function to take json page data stored and insert it as html into the DOM
  for (var entry in jsonInput) {
    // for every 1st level item in the json object
    var child = jsonInput[entry]

    var element = document.createElement(child.type)
    if (child.textContent) {
      var text = document.createTextNode(child.textContent)
      element.appendChild(text)
    }

    // if classes exist then add classes

    if (child.classes) {
      element.setAttribute('class', child.classes)
    }

    // if there's an id add it

    if (child.id) {
      element.id = child.id
    }

    // if there are any custom attributes, add them

    if (child.attributes) {
      for (var attr in child.attributes) {
        element.setAttribute(attr, child.attributes[attr])
      }
    }

    // if there's any child nodes, recursively call the function with this branch and element
    // and append the element or just append the element.

    if (child.children) {
      debugger
      const rendered = parseJsonToMarkup(child.children)
      debugger
      return rendered
    }
    debugger
    return element
  }
} // end parse json to markup