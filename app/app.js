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
import {
  createElement,
  getEBC,
  getEID,
  setPos,
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
  currentSlide = 0
  state = {
        
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

    parseJsonToMarkup(this.markup.nextPrev, document.body)
    parseJsonToMarkup(this.markup.loading, document.body)
    createElement({
      parent: document.body, 
      type: 'section', 
      id: null, 
      classes: 'blank-wrapper',
    })

    getEID('next').addEventListener('click', () => {
      this.slideTo(this.slides.slideNames[this.slides.currentSlide + 1])
    })

    getEID('prev').addEventListener('click', () => {
      this.slideTo(this.slides.slideNames[this.slides.currentSlide - 1])
    })

    const hash = location.hash.split('#')[1]

    // so this it loads from window location, if null then load intro slide
    const initSlide = hash ? ((slides.slideNames.indexOf(hash) == -1) ? 'woops' : hash) : 'intro'
    // reveal body, sounds pervy.

    // once window has loaded, reveal body (sounds pervy), wait 500ms then slideTo first slide.
    // change to promises / loading etc
    window.addEventListener('load', () => {
      document.body.style.opacity = '1'
      setTimeout(() => {
        this.slideTo(initSlide)
      }, 500)
    })

    // so this navigation in the broswer calls the slideTo function w/animation rather than jumpy 
    // view change.
    window.addEventListener('popstate', () => {
      this.slideTo(location.hash.split('#')[1])
    })

    // hello
    console.debug(' _             __  __        __  __       _  \n| |    ___ ___|  \\/  | ___  / _|/ _| __ _| |_ \n| |   / _ / __| |\\/| |/ _ \\| |_| |_ / _` | __|\n| |__|  __\\__ | |  | | (_) |  _|  _| (_| | |_ \n|_____\\___|___|_|  |_|\\___/|_| |_|  \\__,_|\\__|\n==============================================\n*******   You should totally hire me   *******\n==============================================\n\nType \'cv\' to in the console to view the cv object')

    // phone home
    this.phoneHome(whoIsCalling)
  }

  me = {
    Name: 'Les Moffat',
    characterClass: () => {
      const rand = Math.round(Math.random() * 2)
      const choices = [
        'Level 19 Renegade Bounty Hunter',
        'Level 20 Dwarven Code-smith',
        'Level 18 Wise-cracking Code Smuggler',
      ]

      return choices[rand]
    },
    // health and mana points
    hp: 75,
    mp: 75,
  }

  tasks = {
    intro: () => {
      this.me.mp = 57
      this.me.hp = 53
      setTimeout(() => {
        typeTextAndTalk({
          text: this.blurbs.intro,
          el: getEID('intro-blurb'),
          startAt: 0,
          img: getEID('me-img'),
          fast: false,
        })
      }, 3000)
      this.removeBlink()
    },
    overview: () => {
      this.me.mp = 68
      this.me.hp = 57
      this.setCharClass()
      setTimeout(() => {
        typeTextAndTalk({
          text: this.blurbs.overview,
          el: getEID('overview-blurb'),
          startAt: 0,
          img: getEID('me-img'),
          fast: false,
        })
        this.drawOverviewSkills()
      }, 3000)
      this.removeBlink()
    },
    devSkills: () => {
      this.me.mp = 72
      this.me.hp = 62
      setTimeout(() => {
        this.myConsole()
      }, 3000)
    },
    mobile: () => {
      youPhoneEum = new this.phoneStuff(this.cvImages) // this doesn't need to be a constructor, refactor!
      youPhoneEum.init()
    },
    layout: () => {
      this.me.mp = 79
      this.me.hp = 74
      setTimeout(() => {
        typeTextAndTalk({
          text: this.blurbs.layout,
          el: getEID('layout-blurb'),
          startAt: 0,
          img: getEID('me-img'),
          fast: false,
        })
      }, 3000)
      this.removeBlink()
      document.getElementById('next-btn').addEventListener('click', () => {
        this.slideTo('illustration')
      })
    },
    illustration: () => {
      setTimeout(() => {
        typeTextAndTalk({
          text: this.blurbs.illus,
          el: getEID('illus-blurb'),
          startAt: 0,
          img: getEID('me-img'),
          fast: false
        })
      }, 3000)
    },
    learning: () => {
      this.wheecher()
    },
    general: () => {
      this.me.mp = 84
      this.me.hp = 86
      setTimeout(() => {
        typeTextAndTalk({
          text: this.blurbs.suchStuff,
          el: getEID('such-blurb'),
          startAt: 0,
          img: getEID('me-img'),
          fast: false
        })
        this.suchStuff()
      }, 3000)
      this.removeBlink()
    },
    sumUp: () => {
      this.me.mp = 100
      this.me.hp = 100
      setTimeout(() => {
        typeTextAndTalk({
          text: this.blurbs.sumUp,
          el: getEID('sum-up-blurb'),
          startAt: 0,
          img: getEID('me-img'),
          fast: false
        })
      }, 2000)
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
        parent: getEID('such-stuff-stuff'),
        type: 'div',
        id: thing.replace(/ /g, '-'),
        classes: 'such-stuff',
        content: thing,
      })

      var element = getEID(thing.replace(/ /g, '-'))
      setPos(this.suchStuffStuff[thing].x, this.suchStuffStuff[thing].y, element)
      element.style.fontSize = this.suchStuffStuff[thing].fontSize
      element.style.color = this.suchStuffStuff[thing].color
      element.style.webkitTransitionDelay = element.style.transitionDelay = element.style.mozTransitionDelay = element.msTransitionDelay = i * 0.5 + 's'
      i++
    } // for thing in cv.suchStuff
    setTimeout((el, ind) => {
      getEBC('such-stuff').forEach((elem, index) => {
        elem.classList.add('such-expanded')
      })
    }, 1000)
  }

  slideTo = (slide) => {
    // if the slide is undefined go back to beginning
    if (!slide) { slide = 'intro' }

    // there will only be one section present on the page at a time so..
    let thisSection = document.querySelector('section')
    const loading = getEID('loading')

    // if we're going forwards then add out-of-view-left class else out-of-view-right class
    const directionClass = (this.slides.slideNames.indexOf(slide) - this.slides.currentSlide > 0) ? 'out-of-view-left' : 'out-of-view-right'

    // set current slide to index of the slide with this name
    this.slides.currentSlide = this.slides.slideNames.indexOf(slide)

    // change title and hash
    document.querySelector('title').textContent = this.slides.titles[slide]
    location.hash = slide

    if (!thisSection.classList.contains(directionClass)) {
      thisSection.classList.add(directionClass)
      loading.classList.remove('not-loading')
    }
    // timeout for after animation is finished
    // remove current section and parse new section

    // this could all probably be done more elegantly done with web anim API and / or ES5 promises but...
    // I don't have the time at the mo.  Will refactor to include this.
    setTimeout(() => {
      document.body.removeChild(thisSection)
      setTimeout(() => {
        loading.classList.add('not-loading')
      }, 1000)
      parseJsonToMarkup(this.markup[slide], document.body)
      thisSection = document.querySelector('section')

      this.tasks[slide].call(this)

      setTimeout(() => {
        thisSection.classList.remove('out-of-view-right')
      }, 2000)
    }, 500)
  }

  setCharClass = () => {
    getEID('char-class').innerHTML = this.me.characterClass()
  }

  drawOverviewSkills = () => {
    var totalSkills = Object.keys(this.overviewSkills).length, // get total number of skills
      skillsList = Object.getOwnPropertyNames(this.overviewSkills), // get names of skills
      skills = [], // create blank array to push new elements to.
      i = 0
    // iterate through values and keys of devSkills and create div element

    for (var skillValue in this.overviewSkills) {

      createElement({
        parent: getEID('skills-list'),
        type: 'div',
        id: undefined,
        classes: 'overview--skills-list--skill',
        content: '',
        pushToArray: true,
        arrayName: skills,
      })
      // create elements and push to skills array

      skills[i].setInlineSize(this.overviewSkills[skillValue] / 3 + 'vw', (winHeight / totalSkills) + 1 + 'px')
      // set sizes of elements, width to skillpercentage / 3, making 100% 33vw, height 100vh / however many skills there are.
      i++
    }

    // iterate through each new element and add css for changing colour at each element
    // add skill name labels to bars.

    skills.forEach(
      (elem, index) => {
        var colourSpread = 183 - 78
        var colourOffset = 78
        elem.style.backgroundColor = 'hsl(' + ((colourSpread / totalSkills) * index + colourOffset) + ' ,55% ,49% )'
        // change colour for 'rainbow'
        var timer = (totalSkills >= 10) ? 1 + (index / totalSkills) + 's' : '0.' + index + 's'
        // if < 10 skills make time offset 0.index, if not then offset = current index / totalSkills

        elem.style.webkitTransitionDelay = elem.style.transitionDelay = elem.style.mozTransitionDelay = elem.msTransitionDelay = timer
        // set delay on transition so skills load in sequence

        var skillText = document.createElement('div')
        skillText.classList.add('overview--skills-list--skill--skill-text')
        timer = (totalSkills > 10) ? (index / totalSkills + 1) + 's' : '0.' + (index + 1) + 's'
        // set delay on transition so skills load in sequence but 1s after bars

        skillText.style.webkitAnimationDelay = skillText.style.msAnimationDelay = skillText.style.mozAnimationDelay = skillText.style.animationDelay = timer
        var text = document.createTextNode(skillsList[index])
        skillText.appendChild(text)
        elem.appendChild(skillText)
      })

    const removeExpanded = (thisArray) => {
      thisArray.forEach((elem, ind) => {
        elem.classList.remove('expanded')
        var timer = (thisArray.length >= 10) ? (ind / thisArray.length) + 's' : '0.' + ind + 's'
        elem.style.webkitTransitionDelay = elem.style.transitionDelay = elem.style.mozTransitionDelay = elem.msTransitionDelay = timer
      })
    }

    getEID('next').addEventListener('click', removeExpanded(skills))
    getEID('prev').addEventListener('click', removeExpanded(skills))

    var devTimeout = window.setTimeout(() => {
      skills.forEach((elem, index) => {
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

    var hpMp = [getEID('mp-bar'), getEID('hp-bar')]

    hpMp.forEach((elem) => {
      var mpOrHp = elem.id.split('-')[0]
      elem.style.width = this.me[mpOrHp] + 'px'
      elem.style.borderRightWidth = 100 - this.me[mpOrHp] + 'px'
    })

    // I could do with removing some of these setTimeouts
    setTimeout(() => {
      // ANOTHER ONE!! sort this
      setTimeout(() => {
        getEBC('hp-mp-image').forEach((elem, ind) => {
          // energy level is the width as a number primitive, get width, remove 'px' and parse to number
          var energyLevel = parseInt(elem.style.width.split('px')[0])
          // if each bar is past a certain amount, remove the blink class w/animation
          if (energyLevel > 64) {
            elem.classList.remove('blink')
          }
        })
      }, 1500)
      hpMp.forEach((elem) => {
        elem.classList.add('expanded')
      })
    }, 3000)

  }

  // TODO make this a class on it's todd
  // and bind it to the dom elements
  myConsole = () => {
    // assign elements
    var myConsoleInput = getEID('myConsole-input'),
      promptInput = getEID('myConsole-prompt'),
      myConsole = getEID('myConsole'),

      newLine = (outputString, isCommand, isLastInSeries) => {
        // function to insert new line with content at the end of the console.
        var newPrompt = isCommand ? '~/les/cv/skills usr$:\ ' : ''
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
          createElement({
            parent: myConsole, 
            type: 'pre', 
            id: 'myConsole-prompt', 
            classes: 'myConsole-line usr', 
            content: '~/les/cv/skills usr$:\ ',
          })

          createElement({
            parent: myConsole,
            type: 'div',
            id: 'myConsole-input',
            classes: '',
            content: '',
          })

          // timeout just incase we aren't done yet
          setTimeout(() => {
            getEID('myConsole-input').setAttribute('contenteditable', true)
            myConsoleInput = getEID('myConsole-input')
            promptInput = getEID('myConsole-prompt')
            myConsoleInput.focus()
          }, 200)
        }

      },

      processCommand = (command) => {
        // reads in command from input div (easier to style)

        command = command.split('<')[0]
        // firefox and it's weird addition of line breaks
        // maybe look at fixing this properly instead of hacking it

        command = command.split(' ')
        // split command and argument / flag apart
        switch (command[0]) {
          case 'help':
            // show help
            newLine(command.join(' '), true)
            newLine(' ')
            newLine('ls -a \t\t-\t list all skills')
            newLine('showme [skill] \t-\t view details')
            newLine('next \t\t-\t next slide')
            newLine(' ', false, true)
            break

          case 'ls':
            // list command
            if (command[1] == '-a') {
              // if
              var skillArray = [],
                skillString = '',
                stringSeperator

              newLine(command.join(' '), true)
              newLine(' ')

              for (var skill in this.devSkills) {
                skillArray.push(this.devSkills[skill].skillName)
              }

              skillArray.forEach((element, index) => {
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
              newLine(command.join(' '), true)
              newLine('"' + command[1] + '": invalid flag / argument')
              newLine(' ', false, true)
            }

            break

          case 'next':
            this.slideTo('mobile')
            break

          case 'showme':
            // display skill blurb if command is showme [skill]
            newLine(command.join(' '), true)
            newLine(' ')
            var name, blurb, level, learnNext, underline = ''
            for (var devSkill in this.devSkills) {
              // iterate through skills and match
              // is there a 'filter' type method?
              if (this.devSkills[devSkill].skillName == command[1]) {
                name = this.devSkills[devSkill].skillName
                blurb = this.devSkills[devSkill].blurb
                level = this.devSkills[devSkill].level
                learnNext = this.devSkills[devSkill].learnNext
              }
            }
            // new line for the skill name

            if (name) {
              newLine(name)
              for (var i = name.length - 1; i >= 0; i--) {
                underline = underline.concat('*')
                // for the length in chars of the name underline
                // with ****
              }
              // print out the rest of the blurb
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

          default:
            // if what's entered doesn't fit any of the above...
            newLine(command.join(' '), true)
            newLine('"' + command[0] + '"' + ' command not found!', false, true)
            break
        }

        // could probably make this a little more functional.

      }

    // make the new input div editable and then focus
    myConsoleInput.setAttribute('contenteditable', 'true')
    myConsoleInput.focus()

    // add listener for hitting return
    // keypress event is deprecated apparently although
    // i can't find a decent alternative
    window.addEventListener('keypress', (event) => {
      if (event.keyCode == 13) {
        var command = myConsoleInput.innerHTML
        processCommand(command, true)
      }
    })
  } // end my console

  // TODO turn this into a class or make it functional
  phoneStuff = function (cvImages) {
    var phonethis = this,
      img = document.getElementById('phone-image'),
      icon = document.getElementById('message-icon'),
      phone = document.getElementById('phone'),
      designWrapper = document.getElementById('design-wrapper')

    this.doStuffWhenActive = () => {
      // remove event listener so to avoid double tap
      // sort out your this and this's, Les !!!
      this.removeEventListener('click', phonethis.doStuffWhenActive)

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
    }, // end 

    // init method.
    this.init = () => {
      icon.addEventListener('click', phonethis.doStuffWhenActive)
    } //  end init
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
