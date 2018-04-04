HTMLCollection.prototype.forEach = NodeList.prototype.forEach = [].forEach

// set el size in one statement

Element.prototype.setInlineSize = function (width, height) {
  this.style.height = height
  this.style.width = width
}
