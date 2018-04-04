export default function parseJsonToMarkup (jsonInput, parentElement) {
  // function to take json page data stored and insert it as html into the DOM
  for (var entry in jsonInput) {
    // for every 1st level item in the json object
    var input = jsonInput[entry]

    var element = document.createElement(input.type)
    if (input.textContent) {
      var text = document.createTextNode(input.textContent)
      element.appendChild(text)
    }

    // if classes exist then add classes

    if (input.classes) {
      element.setAttribute('class', input.classes)
    }

    // if there's an id add it

    if (input.id) {
      element.id = input.id
    }

    // if there are any custom attributes, add them

    if (input.attributes) {
      for (var attr in input.attributes) {
        element.setAttribute(attr, input.attributes[attr])
      }
    }

    // if there's any child nodes, recursively call the function with this branch and element
    // and append the element or just append the element.

    if (input.children) {
      parentElement.appendChild(element)
      parseJsonToMarkup(input.children, element)
    } else {
      parentElement.appendChild(element)
    }

  }
} // end parse json to markup