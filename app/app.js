import './modules/featureFills'
import images from './assets/images'
import blurbs from './assets/blurbs'
import markupComponents from './assets/markup/markupComponents'
import markup from './assets/markup/markup'
import devSkills from './assets/devSkills'
import overviewSkills from './assets/overviewSkills'
import slides from './assets/slides'
import styles from './assets/styles'
import suchStuff from './assets/suchStuff'
import parseJsonToMarkup from './modules/parseJsonToMarkup'
import  './assets/styles.css'
import {
  createElement,
  setPos,
  getCharacterClass,
} from './modules/helpers'
import typeTextAndTalk from './modules/typer'

// begin cv constructor


const winHeight = window.innerHeight
const winWidth = window.innerWidth

export default class CV {
  // TODO these could maybe be functions
  cvImages = images
  overviewSkills = overviewSkills
  slides = slides
  blurbs = blurbs
  markupComponents = markupComponents
  markup = markup
  devSkills = devSkills
  suchStuffStuff = suchStuff
  styles = styles
  state = {
    hp: 75,
    mp: 75,
    currentSlide: 1,
  }

  setState = (update) => {
    this.state = {
      ...this.state,
      ...update,
    }
  }

  init(whoIsCalling) {

    // helper functions

    // Utils Stuff

    // hide body before styles load
    document.body.style.opacity = '0'

    // inject styles into head
    createElement({
      parent: document.head, 
      type: 'style', 
      id: null, 
      classes: null, 
      content: this.styles,
    })

    createElement({
      parent: document.head, 
      type: 'title',
    })

    document.body.appendChild(parseJsonToMarkup(this.markup.nextPrev))
    document.body.appendChild(parseJsonToMarkup(this.markup.loading))

    // createElement({
    //   parent: document.body, 
    //   type: 'section', 
    //   id: null, 
    //   classes: 'blank-wrapper',
    // })

    document.querySelector('#next').addEventListener('click', () => {
      this.slideTo(this.slides.slideNames[this.state.currentSlide + 1])
    })

    document.querySelector('#prev').addEventListener('click', () => {
      this.slideTo(this.slides.slideNames[this.state.currentSlide - 1])
    })

    const initSlide = location.hash.split('#')[1]

    // change to promises / loading etc
    window.addEventListener('load', () => {
      document.body.style.opacity = '1'
      setTimeout(() => {
        this.slideTo(initSlide)
      }, 100)
    })

    window.addEventListener('popstate', () => {
      const currentSlideNum = this.state.currentSlide
      const currentSlideName = this.slides.slideNames[currentSlideNum]
      const slideNameFromHash = location.hash.split('#')[1]
      if (currentSlideName !== slideNameFromHash) {
        this.slideTo(slideNameFromHash)
      }
    })

    // hello
    console.debug(' _             __  __        __  __       _  \n| |    ___ ___|  \\/  | ___  / _|/ _| __ _| |_ \n| |   / _ / __| |\\/| |/ _ \\| |_| |_ / _` | __|\n| |__|  __\\__ | |  | | (_) |  _|  _| (_| | |_ \n|_____\\___|___|_|  |_|\\___/|_| |_|  \\__,_|\\__|\n==============================================\n*******   You should totally hire me   *******\n==============================================\n\nType \'cv\' to in the console to view the cv object')

    // phone home
    this.phoneHome(whoIsCalling)
  }

  me = {
    Name: 'Les Moffat',
  }

  tasks = {
    intro: () => {
      this.setState({
        mp: 57,
        hp: 53,
      })
      typeTextAndTalk({
        text: this.blurbs.intro,
        el: document.querySelector('#intro-blurb'),
        startAt: 0,
        img: document.querySelector('#me-img'),
        fast: false,
      })
      this.removeBlink()
    },
    overview: () => {
      this.setState({
        mp: 68,
        hp: 57,
        characterClass: getCharacterClass(),
      })
      this.setCharClass()
      typeTextAndTalk({
        text: this.blurbs.overview,
        el: document.querySelector('#overview-blurb'),
        startAt: 0,
        img: document.querySelector('#me-img'),
        fast: false,
      })
      this.drawOverviewSkills()
      this.removeBlink()
    },
    devSkills: () => {
      this.setState({
        mp: 72,
        hp: 62,
      })
      this.myConsole()
    },
    mobile: () => {
      this.phoneStuff()
    },
    layout: () => {
      this.setState({
        mp: 79,
        hp: 74,
      })
      typeTextAndTalk({
        text: this.blurbs.layout,
        el: document.querySelector('#layout-blurb'),
        startAt: 0,
        img: document.querySelector('#me-img'),
        fast: false,
      })
      this.removeBlink()
      document.getElementById('next-btn').addEventListener('click', () => {
        this.slideTo('illustration')
      })
    },
    illustration: () => {
      typeTextAndTalk({
        text: this.blurbs.illus,
        el: document.querySelector('#illus-blurb'),
        startAt: 0,
        img: document.querySelector('#me-img'),
        fast: false,
      })
    },
    learning: () => {
      this.wheecher()
    },
    general: () => {
      this.setState({
        mp: 84,
        hp: 86,
      })
      typeTextAndTalk({
        text: this.blurbs.suchStuff,
        el: document.querySelector('#such-blurb'),
        startAt: 0,
        img: document.querySelector('#me-img'),
        fast: false,
      })
      this.suchStuff()
      this.removeBlink()
    },
    sumUp: () => {
      this.setState({
        mp: 100,
        hp: 100,
      })
      typeTextAndTalk({
        text: this.blurbs.sumUp,
        el: document.querySelector('#sum-up-blurb'),
        startAt: 0,
        img: document.querySelector('#me-img'),
        fast: false,
      })
      this.removeBlink()
    },
    woops: () => {

    }
  }

  suchStuff = () => {
    // TODO tidy this
    var i = 1

    for (var thing in this.suchStuffStuff) {
      
      createElement({
        parent: document.querySelector('#such-stuff-stuff'),
        type: 'div',
        id: thing.replace(/ /g, '-'),
        classes: 'such-stuff',
        content: thing,
      })

      var element = document.querySelector(`#${thing.replace(/ /g, '-')}`)
      setPos(this.suchStuffStuff[thing].x, this.suchStuffStuff[thing].y, element)
      element.style.fontSize = this.suchStuffStuff[thing].fontSize
      element.style.color = this.suchStuffStuff[thing].color
      element.style.webkitTransitionDelay = element.style.transitionDelay = element.style.mozTransitionDelay = element.msTransitionDelay = i * 0.5 + 's'
      i++
    } // for thing in cv.suchStuff
    setTimeout((el) => {
      document.querySelectorAll('.such-stuff').forEach((elem) => {
        elem.classList.add('such-expanded')
      })
    }, 1000)
  }

  slideOutCurrentSlide = () => {
    return new Promise((resolve, reject) => {
      try {
        const currentSlideElement = document.querySelector('.current-slide')
        if (currentSlideElement) {
          currentSlideElement.classList.remove('current-slide')
          currentSlideElement.classList.add('out-of-view-left')
        }
        setTimeout(() => {
          resolve()
        }, 1000)
      } catch (e) {
        reject(e)
      }
    })
  }

  toggleLoader = (hide, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      try {
        const loading = document.querySelector('#loading')
        setTimeout(() => {
          if (hide) {
            loading.classList.add('not-loading')
            resolve()
          } else {
            loading.classList.remove('not-loading')
            resolve()
          }
        }, timeout)
      } catch (e) {
        reject(e)
      }
    })
  }

  showLoader = () => this.toggleLoader(false)
  hideLoader = () => this.toggleLoader(true)

  renderNewSlide = (slideName, timeout = 500) => {
    console.log(`===${slideName}===`)
    return new Promise((resolve, reject) => {
      try {
        const slideMarkup = this.markup[slideName] || this.markup['woops']
        const newSlideSection = parseJsonToMarkup(slideMarkup)
        newSlideSection.classList.add('current-slide')
        
        document.body.appendChild(newSlideSection)
        setTimeout(() => {
          resolve()
        }, timeout)
      } catch (e) {
        reject(e)
      }
    })
  }

  slideInNewSlide = (timeout = 3000) => {
    return new Promise((resolve, reject) => {
      const currentSlideSection = document.querySelector('.current-slide')
      currentSlideSection.classList.remove('out-of-view-right')
      if (!currentSlideSection) reject('no current slide to slide in!')
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  }

  runTasks = (slideName) => {
    return new Promise((resolve, reject) => {
      this.tasks[slideName]()
    })
  }

  deletePreviousSlide = () => {
    return new Promise((resolve, reject) => {
      const previousSlide = document.querySelector('.out-of-view-left')
      if (previousSlide) {
        previousSlide.parentNode.removeChild(previousSlide)
      }
      resolve()
    })
  }

  updatePageTitle = (slideName) => {
    return new Promise((resolve, reject) => {
      try {
        document.querySelector('title').textContent = this.slides.titles[slideName]
        location.hash = slideName
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }

  slideTo = (slideName = 'intro') => {

    // if there is an active slide, slide it out - 
    // slide in loading image, wait - 
    // parse in markup for correct slide
    // delete old slide 
    // slide in new slide
    // update hash and title
    // run tasks for that slide

    // if the slide is undefined go back to beginning

    Promise.all([
      this.slideOutCurrentSlide(),
      this.showLoader(),
    ])
      .then(() => {
        console.log('renderNewSlide')
        return this.renderNewSlide(slideName)
      })
      .then(() => {
        console.log('deletePreviousSlide')
        return this.deletePreviousSlide()
      })
      .then(() => {
        return this.hideLoader()
      })
      .then(() => {
        console.log('slideInNewSlide')
        return this.slideInNewSlide()
      })
      .then(() => {
        console.log('updatePageTitle')
        return this.updatePageTitle(slideName)
      })
      .then(() => {
        console.log('runtasks')
        return this.runTasks(slideName)
      })
      .catch(e => console.error('Error in promise chain', e))
  }

  setCharClass = () => {
    document.querySelector('#char-class').innerHTML = this.state.characterClass
  }

  drawOverviewSkills = () => {
    const skillsList = Object.entries(this.overviewSkills)
    const totalSkills = skillsList.length // get total number of skills
    // iterate through values and keys of devSkills and create div element

    const skills = skillsList.map((
      [
        skillName,
        skillValue,
      ],
      index
    ) => {
      const skillBar = createElement({
        parent: document.querySelector('#skills-list'),
        type: 'div',
        id: undefined,
        classes: 'overview--skills-list--skill',
        content: '',
      })
      // create elements and push to skills array
      const inlineWidth = skillValue / 3 + 'vw'
      const inlineHeight = (winHeight / totalSkills) + 1 + 'px'
      
      skillBar.setInlineSize(inlineWidth, inlineHeight)
      // set sizes of elements, width to skillpercentage / 3, making 100% 33vw, height 100vh / however many skills there are.
      // return skillBar

      const colourSpread = 183 - 78
      const colourOffset = 78
      skillBar.style.backgroundColor = 'hsl(' + ((colourSpread / totalSkills) * index + colourOffset) + ' ,55% ,49% )'
      // change colour for 'rainbow'
      const timer = (totalSkills >= 10) ? 1 + (index / totalSkills) + 's' : '0.' + index + 's'
      // if < 10 skills make time offset 0.index, if not then offset = current index / totalSkills

      skillBar.style.webkitTransitionDelay = skillBar.style.transitionDelay = skillBar.style.mozTransitionDelay = skillBar.msTransitionDelay = timer
      // set delay on transition so skills load in sequence

      // set delay on transition so skills load in sequence but 1s after bars
      
      const skillText = document.createElement('div')
      const text = document.createTextNode(skillName)
      
      skillText.classList.add('overview--skills-list--skill--skill-text')
      skillText.style.webkitAnimationDelay = skillText.style.msAnimationDelay = skillText.style.mozAnimationDelay = skillText.style.animationDelay = timer
      skillText.appendChild(text)
      
      
      skillBar.appendChild(skillText)
      
      return skillBar
    })

    // iterate through each new element and add css for changing colour at each element
    // add skill name labels to bars.

    const removeExpanded = (thisArray) => {
      thisArray.forEach((elem, ind) => {
        elem.classList.remove('expanded')
        var timer = (thisArray.length >= 10) ? (ind / thisArray.length) + 's' : '0.' + ind + 's'
        elem.style.webkitTransitionDelay = elem.style.transitionDelay = elem.style.mozTransitionDelay = elem.msTransitionDelay = timer
      })
    }

    document.querySelector('#next').addEventListener('click', () => removeExpanded(skills))
    document.querySelector('#prev').addEventListener('click', () => removeExpanded(skills))

    const devTimeout = window.setTimeout(() => {
      skills.forEach((elem) => {
        elem.classList.add('expanded')
      })
    }, 100)

  }

  removeBlink = () => {
    // the health and mana bars are set to scaleX(0) by default
    // the health and mana icons are set to css 'blink' animation by default
    // this function removes the classes
    // sort this out with animation API and promises 
    // because the setTimeouts thing is getting a little out of hand

    const hpMp = [document.querySelector('#mp-bar'), document.querySelector('#hp-bar')]

    hpMp.forEach((elem) => {
      const mpOrHp = elem.id.split('-')[0]
      elem.style.borderLeftWidth = this.state[mpOrHp] + 'px'
      elem.style.borderRightWidth = 100 - this.state[mpOrHp] + 'px'
    })

    // I could do with removing some of these setTimeouts
    setTimeout(() => {
      document.querySelectorAll('.hp-mp-image').forEach((elem, ind) => {
        // energy level is the width as a number primitive, get width, remove 'px' and parse to number
        const energyLevel = parseInt(elem.style.width.split('px')[0])
        // if each bar is past a certain amount, remove the blink class w/animation
        if (energyLevel > 64) {
          elem.classList.remove('blink')
        }
      })
    }, 1000)
  }

  // TODO make this a class on it's todd
  // and bind it to the dom elements
  myConsole = () => {
    // assign elements
    let myConsoleInput = document.querySelector('#myConsole-input')
    let promptInput = document.querySelector('#myConsole-prompt')
    const myConsole = document.querySelector('#myConsole')

    const newLine = (outputString, isCommand, isLastInSeries) => {
        // function to insert new line with content at the end of the console.
        const newPrompt = isCommand ? '~/les/cv/skills usr$: ' : ''
        // usr name and prompt, if a command has been entered, 'converts' the prompt
        // and entry div into a single new line
        createElement({
          parent: myConsole,
          type: 'pre',
          id: null,
          classes: 'myConsole-line',
          content: newPrompt + outputString,
        })

        // create new console line
        if (isLastInSeries) {
          // if it's the last line
          myConsole.removeChild(promptInput)
          myConsole.removeChild(myConsoleInput)
          // delete old prompt and input and create and append new ones
          promptInput = createElement({
            parent: myConsole, 
            type: 'pre', 
            id: 'myConsole-prompt', 
            classes: 'myConsole-line usr', 
            content: '~/les/cv/skills usr$: ',
          })

          myConsoleInput = createElement({
            parent: myConsole,
            type: 'div',
            id: 'myConsole-input',
            classes: '',
            content: '',
          })

          // timeout just incase we aren't done yet
          setTimeout(() => {
            myConsoleInput.setAttribute('contenteditable', true)
            myConsoleInput.focus()
          }, 200)
        }

      },

      processCommand = (input) => {
        const commandAndFlag = input.split('<')[0]
        // firefox and it's weird addition of line breaks

        const [
          command,
          flag,
        ] = commandAndFlag.split(' ')

        switch (command) {
          case 'help': {
            // show help
            newLine(commandAndFlag, true)
            newLine(' ')
            newLine('ls -a \t\t-\t list all skills')
            newLine('showme [skill] \t-\t view details')
            newLine('next \t\t-\t next slide')
            newLine(' ', false, true)
            break
          }

          case 'ls': {
            // list command
            if (flag === '-a') {
              newLine(commandAndFlag, true)
              newLine(' ')

              const skillArray = Object.values(this.devSkills)
                .map(({ skillName }) => skillName)

              let stringSeperator
              let skillString = ''

              skillArray.forEach((element) => {
                if (element.length < 5) {
                  stringSeperator = '\t\t'
                } else {
                  stringSeperator = '\t'
                }
                skillString = skillString.concat(element + stringSeperator)

              })
              newLine(skillString)
              newLine(' ', false, true)

            } else {
              newLine(commandAndFlag, true)
              newLine('"' + flag + '": invalid flag / argument')
              newLine(' ', false, true)
            }

            break
          }
          case 'next': {
            this.slideTo('mobile')
            break
          }

          case 'showme': {
            const [{
              skillName: name,
              blurb,
              level,
              learnNext,
            }] = Object.values(this.devSkills)
              .filter(({ skillName }) => skillName === flag)

            newLine(commandAndFlag, true)
            newLine(' ')

            if (name) {
              newLine(name)
              const underline = name.split('')
                .map(() => '*')
                .join('')

              newLine(underline)
              newLine('Level : ' + level)
              newLine(blurb)

              if (learnNext) {
                newLine('on the hitlist: ' + learnNext)
              }

              newLine(' ', false, true)

            } else {
              newLine('Whoa! Calm down! I haven\'t quite got to learning this yet!', false, true)
            }
            break
          }

          default: {
            // if what's entered doesn't fit any of the above...
            newLine(commandAndFlag, true)
            newLine('"' + command + '"' + ' command not found!', false, true)
            break
          }
        }

        // could probably make this a little more functional.

      }

    // make the new input div editable and then focus
    myConsoleInput.setAttribute('contenteditable', 'true')
    myConsoleInput.focus()

    window.addEventListener('keypress', (event) => {
      if (event.keyCode == 13) {
        processCommand(myConsoleInput.innerHTML, true)
      }
    })
  } // end my console

  // TODO turn this into a class or make it functional
  phoneStuff = () => {

    const icon = document.querySelector('#message-icon')
    const phone = document.querySelector('#phone')
    const designWrapper = document.querySelector('#design-wrapper')

    const doStuffWhenActive = () => {
      // remove event listener so to avoid double tap
      // sort out your this and this's, Les !!!
      icon.removeEventListener('click', doStuffWhenActive)

      phone.classList.remove('inactive')
      icon.classList.add('micro')
      setTimeout(() => {
        icon.src = icon.dataset.swapImg
        icon.classList.remove('micro')
        icon.classList.remove('tadaa')
        icon.addEventListener('click', () => {
          designWrapper.classList.add('micro')
          this.slideTo('layout')
        })
      }, 500)
    } // end 

    icon.addEventListener('click', doStuffWhenActive)
  }

  wheecher = () => {
    // this method selects the parent element "#wheecher" and it's children ".to-learn-item"
    // and sequentially adds a css animation class to animate the to-learn-items in and out
    // recursively calling itself to change the timeout on each call so this the last element
    // hold for longer

    // assign get elements, declare variable
    var container = document.getElementById('wheecher'),
      typesList = document.getElementsByClassName('to-learn-item'),

      // counter and 
      thisOne = 0,
      delta

    var wordWheecher = () => {
      window.setTimeout(() => {

        var current, next

        // if this is the last element change the timeout delay to hold for longer
        // else normal delay
        if (thisOne == typesList.length - 1) {
          delta = 2500
        } else {
          delta = 1500
        }

        // if counter is beyond number of elements, reset

        if (thisOne >= (typesList.length - 1)) {
          next = typesList[0]
          current = typesList[thisOne]
          thisOne = 0

          // else move to next element
        } else {
          next = typesList[thisOne + 1]
          current = typesList[thisOne]
          thisOne++
        }

        // animate current element out
        current.classList.remove('in')
        current.classList.add('out')
        current.classList.add('below')

        // animate next element in
        next.classList.remove('out')
        next.classList.add('in')
        next.classList.remove('below')

        // set the width of the container to width of next element
        // css transition is present for smoothness
        // *** in terms of performance, might be an idea to use a seperate element and
        // transform it instead.  changing the width causes reflows etc.
        container.style.width = next.offsetWidth + 'px'

        // recursion call itself, a wheecher within a wheecher within a wheecher...
        wordWheecher()

      }, delta)
    }

    if (document.getElementById('wheecher') !== null) {
      wordWheecher()
    }
  }

  // TODO set up express app for the endpoint of this fetch request
  // or remove it entirely
  phoneHome = (whoYouGonnaCall) => {
    // create new xhr, duh
    var xhr = new XMLHttpRequest()

    // phone home and let me know this someone has been looking at my cv. :-)
    xhr.open('get', 'http://www.lesmoffat.co.uk/dev/devdev/cv-poke.php?usr=' + whoYouGonnaCall)
    xhr.send()
  }

}

// create new instance of cv

const cv = new CV()

cv.init('fanduel')
