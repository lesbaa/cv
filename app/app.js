import images from './assets/images'
import blurbs from './assets/blurbs'
import markupComponents from './assets/markup/markupComponents'
import markup from './assets/markup/markup'
import devSkills from './assets/devSkills'
import suchStuff from './assets/suchStuff'
// begin cv constructor

export default class CV {
  me = {
    Name: 'Les Moffat',
    characterClass : function() {
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

  cvImages = images

  overviewSkills = {
    // these will need updated
    'XHTML / HTML5' : '88',
    'CSS3' : '84',
    'Javascript' : '78',
    'Jade/Pug' : '73',
    'Sass' : '74',
    'AJAX' : '68',
    'Bourbon, Neat' : '72',     
    'JQuery' : '76',
    'php' : '62',
    'git' : '67',
    'vagrant' : '60',
    'server': '62',
    'modX CMS' : '70',
    'Gulp taskrunner' : '76',
    'CLI' : '64',
    'Design / UI / UX' : '67',
    'Adobe Illustrator' : '83',
    'Problem Solving' : '79',
    'Lightsabre' : '71',
    'Affinity with The Force' : '85',
    'Getting Rings to Mordor' : '96',
  }
  slides = {
    slideNames: [
      'woops',
      'intro',
      'overview',
      'devSkills',
      'mobile',
      'layout',
      'illustration',
      'learning',
      'general',
      'sumUp'
    ],
  
    titles: {
      woops: 'Les Moffat CV | okay something went wrong there...',
      intro: 'Les Moffat CV | Well Hello...',
      overview: 'Les Moffat CV | A brief overview.',
      devSkills: 'Les Moffat CV | Let\'s see how things develop',
      mobile: 'Les Moffat CV | I\'m sure there\'s an app for that.',
      layout: 'Les Moffat CV | Laid out.',
      illustration: 'Les Moffat CV | Picture, if you will...',
      learning: 'Les Moffat CV | So much to learn...',
      general: 'Les Moffat CV | So job, much hire, wow.',
      sumUp: 'Les Moffat CV | Don\'t be a stranger...',
    }
  }

  currentSlide = 0

  tasks = {
    intro: () => {
      this.me.mp = 57
      this.me.hp = 53
      setTimeout(() => {
        this.typeTextAndTalk( this.blurbs.intro, getEID('intro-blurb'), 0, getEID('me-img'), false )
      }, 3000)
      this.removeBlink()
    },
    overview: () => {
      this.me.mp = 68
      this.me.hp = 57
      this.setCharClass()
      setTimeout(() => {
        this.typeTextAndTalk( this.blurbs.overview, getEID('overview-blurb'), 0, getEID('me-img'), false )
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
        this.typeTextAndTalk( this.blurbs.layout, getEID('layout-blurb'), 0, getEID('me-img'), false )
      }, 3000)
      this.removeBlink()
      document.getElementById('next-btn').addEventListener('click', () => {
        this.slideTo('illustration')
      })
    },
    illustration: () => {
      setTimeout(() => {
        this.typeTextAndTalk( this.blurbs.illus, getEID('illus-blurb'), 0, getEID('me-img'), false )
      }, 3000)
    },
    learning: () => {
      this.wheecher()
    },
    general: () => {
      this.me.mp = 84
      this.me.hp = 86
      setTimeout(() => {
        this.typeTextAndTalk( this.blurbs.suchStuff, getEID('such-blurb'), 0, getEID('me-img'), false )
        this.suchStuff()
      }, 3000)
      this.removeBlink()
    },
    sumUp: () => {
      this.me.mp = 100
      this.me.hp = 100
      setTimeout(() => {
        this.typeTextAndTalk( this.blurbs.sumUp, getEID('sum-up-blurb'), 0, getEID('me-img'), false )
      }, 2000)
      this.removeBlink()
    },
    woops: () => {

    }
  }

  // TODO these chouls maybe be functions
  blurbs = blurbs
  markupComponents = markupComponents
  markup = markup
  devSkills = devSkills
  suchStuffStuff = suchStuff
  styles = styles
}

var Cv = function() {




    this.styles = 

    this.suchStuff = function() {
        var i = 1

        for (var thing in this.suchStuffStuff) {
            createEl( getEID('such-stuff-stuff'),'div', thing.replace(/ /g, '-'), 'such-stuff', thing)
            var element = getEID( thing.replace(/ /g, '-') )
            setPos(this.suchStuffStuff[thing].x, this.suchStuffStuff[thing].y, element)
            element.style.fontSize = this.suchStuffStuff[thing].fontSize
            element.style.color = this.suchStuffStuff[thing].color
            element.style.webkitTransitionDelay = element.style.transitionDelay = element.style.mozTransitionDelay = element.msTransitionDelay = i * 0.5 + 's'
            i++
        } // for thing in cv.suchStuff
        setTimeout(function(el, ind){
            getEBC('such-stuff').forEach(function(elem, index) {
                elem.classList.add('such-expanded')
            })
        },1000)
    },


    // the logic of it all (or lack thereof)
    this.getMarkup = function(property) {
        return this.markup[property].toString()
    },

    this.init = function(whoIsCalling) {

        // helper functions

        // Utils Stuff

        // hide body before styles load
        document.body.style.opacity = '0'

        window.body = document.body,
        window.winHeight = window.innerHeight,
        window.winWidth = window.innerWidth,

        // Shortened getElementByID and getElementsByClass, add to global object 
        // !!! BAD JUJU !!! SORT THIS OUT LES !!!

        window.getEID = function(ele) {
            return document.getElementById(ele)
        },

        window.getEBC = function(className){
            return document.getElementsByClassName(className)  
        },

        // forEach method to HTMLCollection and NodeList (returned by getElementById and querySelectorAll) prototypes

        HTMLCollection.prototype.forEach = NodeList.prototype.forEach = [].forEach

        // set el size in one statement

        Element.prototype.setInlineSize = function(width, height) {
            this.style.height = height
            this.style.width = width
        }

        window.setPos = function(xValue, yValue, element) {
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
        },
        // and this

        window.createEl = function(parent, type, id, classes, content, pushToArray, arrayName){
            // createElement helper function.
            var el = document.createElement(type)

            if (id) { 
                el.id = id // set id
            }

            if (classes) {
                el.setAttribute('class', classes || '') // set class(es) if it's defined
            }

            if (content){ // if it's an image use content for src
                if (type =='img') {
                    el.src = content 
                }

                if (type =='style') { // if it's a style then make a style element.
                    el.setAttribute('type', 'text/css')
                    text = document.createTextNode(content)
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
            if ( (pushToArray) && (pushToArray === true) ) {
                if (arrayName) {
                    arrayName.push(el)
                } // end if arrayName
            } else {
                return
            }
        } //  end window.createEl

        // to use the method elsewhere
        var that = this

        // inject styles into head
        createEl(document.head, 'style', null, null, this.styles)
        createEl(document.head,'title')

        that.parseJsonToMarkup(this.markup.nextPrev, body)
        that.parseJsonToMarkup(this.markup.loading, body)
        createEl(body,'section',null, 'blank-wrapper')

        getEID('next').addEventListener('click', function() {
            that.slideTo( that.slides.slideNames[ that.slides.currentSlide + 1] )
        })

        getEID('prev').addEventListener('click', function() {
            that.slideTo( that.slides.slideNames[ that.slides.currentSlide - 1] )
        })

        var hash = location.hash.split('#')[1], initSlide

        // so that it loads from window location, if null then load intro slide
        initSlide = (location.hash) ? ( ( that.slides.slideNames.indexOf(hash) == -1 ) ? 'woops' : hash ) : 'intro'

        // reveal body, sounds pervy.

        // once window has loaded, reveal body (sounds pervy), wait 500ms then slideTo first slide.
        // change to promises / loading etc
        window.addEventListener('load', function() {
            body.style.opacity = '1'
            setTimeout(function() {
                that.slideTo(initSlide)
            }, 1000)
        })

        // so that navigation in the broswer calls the slideTo function w/animation rather than jumpy 
        // view change.
        window.addEventListener('popstate', function() {
            that.slideTo(location.hash.split('#')[1])
        })

        // hello
        console.debug(' _             __  __        __  __       _  \n| |    ___ ___|  \\/  | ___  / _|/ _| __ _| |_ \n| |   / _ / __| |\\/| |/ _ \\| |_| |_ / _` | __|\n| |__|  __\\__ | |  | | (_) |  _|  _| (_| | |_ \n|_____\\___|___|_|  |_|\\___/|_| |_|  \\__,_|\\__|\n==============================================\n*******   You should totally hire me   *******\n==============================================\n\nType \'cv\' to in the console to view the cv object')

        // phone home
        that.phoneHome(whoIsCalling)

    }, // end init

    this.slideTo = function(slide) {
        // if the slide is undefined go back to beginning
        if (!slide) { slide = 'intro' }

        // there will only be one section present on the page at a time so..
        var thisSection = document.querySelector('section'),
            loading = getEID('loading'),
            that = this,

            // if we're going forwards then add out-of-view-left class else out-of-view-right class
            directionClass = (that.slides.slideNames.indexOf(slide) - that.slides.currentSlide > 0) ? 'out-of-view-left' : 'out-of-view-right'

        // set current slide to index of the slide with this name
        that.slides.currentSlide = that.slides.slideNames.indexOf(slide)

        // change title and hash
        document.querySelector('title').textContent = that.slides.titles[slide]
        location.hash = slide



        if ( !thisSection.classList.contains(directionClass) ) {
            thisSection.classList.add(directionClass)
            loading.classList.remove('not-loading')
        }
        // timeout for after animation is finished
        // remove current section and parse new section

        // this could all probably be done more elegantly done with web anim API and / or ES5 promises but...
        // I don't have the time at the mo.  Will refactor to include this.
        setTimeout(function() {
            body.removeChild(thisSection)
            setTimeout(function() {
                loading.classList.add('not-loading')
            }, 1000)
            that.parseJsonToMarkup(that.markup[slide], body)
            thisSection = document.querySelector('section')

            that.slides.tasks[slide].call(that)

            setTimeout(function() {
                thisSection.classList.remove('out-of-view-right')
            }, 2000)
        }, 500) 

    }, // end slideTo

    this.setCharClass = function() {
        var that = this
        getEID('char-class').innerHTML = this.me.characterClass()
    },

    this.drawOverviewSkills = function() {
        var that = this
        var totalSkills = Object.keys(that.overviewSkills).length, // get total number of skills
            skillsList = Object.getOwnPropertyNames(that.overviewSkills), // get names of skills
            skills = [], // create blank array to push new elements to.
            i = 0
        // iterate through values and keys of devSkills and create div element

        for (var skillValue in this.overviewSkills) {

            createEl( getEID('skills-list'), 'div', undefined, 'overview--skills-list--skill', '', true, skills)
            // create elements and push to skills array

            skills[i].setInlineSize(that.overviewSkills[skillValue] / 3 + 'vw', (winHeight / totalSkills) + 1 + 'px') 
            // set sizes of elements, width to skillpercentage / 3, making 100% 33vw, height 100vh / however many skills there are.
            i++
        }

        // iterate through each new element and add css for changing colour at each element
        // add skill name labels to bars.

        skills.forEach( 
            function(elem, index) {
                var colourSpread = 183 - 78
                var colourOffset = 78
                elem.style.backgroundColor = 'hsl(' + ((colourSpread / totalSkills) * index + colourOffset) + ' ,55% ,49% )' 
                // change colour for 'rainbow'
                var timer = (totalSkills >= 10) ?  1 + (index/totalSkills) + 's' : '0.' + index + 's' 
                // if < 10 skills make time offset 0.index, if not then offset = current index / totalSkills

                elem.style.webkitTransitionDelay = elem.style.transitionDelay = elem.style.mozTransitionDelay = elem.msTransitionDelay = timer
                // set delay on transition so skills load in sequence

                var skillText = document.createElement('div')
                skillText.classList.add('overview--skills-list--skill--skill-text')
                timer = (totalSkills > 10) ?  (index/totalSkills + 1) + 's' : '0.' + (index + 1) + 's'
                // set delay on transition so skills load in sequence but 1s after bars

                skillText.style.webkitAnimationDelay = skillText.style.msAnimationDelay = skillText.style.mozAnimationDelay = skillText.style.animationDelay = timer
                var text = document.createTextNode(skillsList[index])
                skillText.appendChild(text)
                elem.appendChild(skillText)
        })

        removeExpanded = function(thisArray) {
            thisArray.forEach( function(elem, ind) {
                elem.classList.remove('expanded')
                var timer = (thisArray.length >= 10) ?  (ind/thisArray.length) + 's' : '0.' + ind + 's'
                elem.style.webkitTransitionDelay = elem.style.transitionDelay = elem.style.mozTransitionDelay = elem.msTransitionDelay = timer
            })
        }

        getEID('next').addEventListener('click', removeExpanded(skills))
        getEID('prev').addEventListener('click', removeExpanded(skills))

        var devTimeout = window.setTimeout(function() {
            skills.forEach( function(elem, index) {
                elem.classList.add('expanded') 
            })
        }, 100)

    }, // still needs work!!

    this.removeBlink = function() {
        // the health and mana bars are set to scaleX(0) by default
        // the health and mana icons are set to css 'blink' animation by default
        // this function removes the classes
        // sort this out with animation API and promises 
        // because the setTimeouts thing is getting a little out of hand

        var hpMp = [ getEID('mp-bar'), getEID('hp-bar') ]

        hpMp.forEach( function(elem, index) {
            var mpOrHp = elem.id.split('-')[0]
            elem.style.width = that.me[mpOrHp] +'px'
            elem.style.borderRightWidth = 100 - that.me[mpOrHp] + 'px'
        })

        // I could do with removing some of these setTimeouts
        setTimeout(function() {
            // ANOTHER ONE!! sort this
            setTimeout( function() {
                getEBC('hp-mp-image').forEach(function(elem, ind){
                    // energy level is the width as a number primitive, get width, remove 'px' and parse to number
                    var energyLevel = parseInt(hpMp[ind].style.width.split('px')[0])
                    // if each bar is past a certain amount, remove the blink class w/animation
                    if (energyLevel > 64) {
                        elem.classList.remove('blink')
                    }
                })
            }, 1500)
            hpMp.forEach( function(elem) {
                elem.classList.add('expanded')
            })
        }, 3000)

    }, // end remove blink

    this.typeTextAndTalk = function(text, el, start, img, fast){
        // doc please!!
        var that = this
        if(!img) { 
            createEl(body, 'span','img-ting','','')
            img = getEID('img-ting') // create blank span if there's no image.
        }
        var imgSwap = ( img.getAttribute('data-swap-img') ) ? img.getAttribute('data-swap-img') : img.getAttribute('src'), // get image url to swap to from swap-img attr, in this case gif of me talking.
            imgOrig = ( img.getAttribute('data-orig-img') ) ? img.getAttribute('data-orig-img') : img.getAttribute('src'), // get image url of original image, gif of me not talking.

            i = (start) ? start : 0, // set counter for what part of the string to begin from
            currentText = text.substr(0,i) // set currentText as substring of text argument

        if (currentText.charAt(currentText.length - 1) == '<') {
            i++
            currentText = text.substr(0,i)
            fast = true
        }

        if (currentText.charAt(currentText.length - 1) == '>') {
            fast = false
        }

        var speedFactor = fast ? 0 : 1  

        if ( ( currentText.charAt(currentText.length - 1) == '.' || currentText.charAt(currentText.length - 1 ) == ',') ) { 
        // if the last character typed was '.' or ',' take a breather
            delta = 600 * speedFactor
            if ( img.getAttribute('src') != imgOrig ) {
                    img.src = imgOrig // swap image to original image
                } // en if src = original image
        } else {
            delta = 50 * speedFactor // delay is 50ms
            if ( img.getAttribute('src') != imgSwap ) {
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
            i++ 
            setTimeout(function() {
                that.typeTextAndTalk(text, el, i, img, fast) // recursive call of function
            }, delta)
        }
    }, // end typeTextAndTalk

    // actual cv functions

    this.myConsole = function() {
        // assign elements
        var myConsoleInput = getEID('myConsole-input'),
            promptInput = getEID('myConsole-prompt'),
            myConsole = getEID('myConsole'),
            that = this,

        newLine = function(outputString, isCommand, isLastInSeries) {
        // function to insert new line with content at the end of the console.
            var newPrompt = isCommand ? '~/les/cv/skills usr$:\ ' : ''
            // usr name and prompt, if a command has been entered, 'converts' the prompt
            // and entry div into a single new line
            createEl(myConsole, 'pre', null, 'myConsole-line', newPrompt + outputString)
            // create new console line
            if (isLastInSeries) {
                // if it's the last line
                myConsole.removeChild(promptInput)
                myConsole.removeChild(myConsoleInput)
                // delete old prompt and input and create and append new ones
                createEl(myConsole, 'pre', 'myConsole-prompt', 'myConsole-line usr', '~/les/cv/skills usr$:\ ')
                createEl(myConsole, 'div', 'myConsole-input', '','')

                // timeout just incase we aren't done yet
                setTimeout(function() {
                    getEID('myConsole-input').setAttribute('contenteditable', true)
                    myConsoleInput = getEID('myConsole-input')
                    promptInput = getEID('myConsole-prompt')
                    myConsoleInput.focus()
                }, 200)
            }

        },

        processCommand = function(command) {
            // reads in command from input div (easier to style)

            command = command.split('<')[0]
            // firefox and it's weird addition of line breaks
            // maybe look at fixing this properly instead of hacking it

            command = command.split(' ')
            // split command and argument / flag apart
            switch (command[0]) {
                case 'help' :
                // show help
                    newLine(command.join(' '),true)
                    newLine(' ')
                    newLine('ls -a \t\t-\t list all skills')
                    newLine('showme [skill] \t-\t view details')
                    newLine('next \t\t-\t next slide')
                    newLine(' ', false, true)
                    break

                case 'ls' :
                // list command
                    if (command[1] == '-a') {
                        // if
                        var skillArray = [],
                            skillString = '',
                            stringSeperator

                        newLine(command.join(' '),true)
                        newLine(' ')

                        for (var skill in that.devSkills) {
                            skillArray.push(that.devSkills[skill].skillName)
                        }

                        skillArray.forEach( function(element, index) {
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
                        newLine(command.join(' '),true)
                        newLine('"' + command[1] + '": invalid flag / argument')
                        newLine(' ', false, true)                        
                    }

                    break

                case 'next':
                    that.slideTo('mobile')
                    break

                case 'showme':
                // display skill blurb if command is showme [skill]
                    newLine(command.join(' '),true)
                    newLine(' ')
                    var name, blurb, level, learnNext, underline = ''
                    for (var devSkill in that.devSkills) {
                        // iterate through skills and match
                        // is there a 'filter' type method?
                        if (that.devSkills[devSkill].skillName == command[1]) {
                            name = that.devSkills[devSkill].skillName
                            blurb = that.devSkills[devSkill].blurb
                            level = that.devSkills[devSkill].level
                            learnNext = that.devSkills[devSkill].learnNext
                        }
                    }
                    // new line for the skill name

                    if (name) {
                        newLine(name)
                        for (var i = name.length - 1 i >= 0 i--) {
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
                        newLine('Whoa! Calm down! I haven\'t quite got to learning that yet!', false, true)
                    }
                    break

                default:
                // if what's entered doesn't fit any of the above...
                    newLine(command.join(' '),true)
                    newLine('"' + command[0] + '"' + ' command not found!',false, true)
                    break
            }

            // could probably make that a little more functional.

        }

        // make the new input div editable and then focus
        myConsoleInput.setAttribute('contenteditable','true')
        myConsoleInput.focus()

        // add listener for hitting return
        // keypress event is deprecated apparently although
        // i can't find a decent alternative
        window.addEventListener('keypress', function(event) {
            if (event.keyCode == 13) {
                var command = myConsoleInput.innerHTML
                processCommand(command, true)
            }
        })
    }, // end my console

    this.parseJsonToMarkup = function(jsonInput, parentElement) {
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
                this.parseJsonToMarkup(input.children, element)
                parentElement.appendChild(element)
            } else {
                parentElement.appendChild(element)
            }

        }
    }, // end parse json to markup

    // method that changes the sizes and event listeners of the phone icons / images
    // maybe look at refactoring this away from being a constructor.  means that you just call the
    // method in tasks instead of using 'new'
    // not entirely sure why I did it this way.
    this.phoneStuff = function(cvImages) {
        var phoneThat = this,
            img = document.getElementById('phone-image'),
            icon = document.getElementById('message-icon'),
            phone = document.getElementById('phone'),
            designWrapper = document.getElementById('design-wrapper')

        this.doStuffWhenActive = function() {
            // remove event listener so to avoid double tap
            // sort out your this and that's, Les !!!
            this.removeEventListener('click', phoneThat.doStuffWhenActive)

            phone.classList.remove('inactive')
            icon.classList.add('micro')
            setTimeout(function() {
                icon.src = icon.dataset.swapImg
                icon.classList.remove('micro')
                icon.classList.remove('tadaa')
                icon.addEventListener('click', function() {
                    designWrapper.classList.add('micro')
                    that.slideTo('layout')
                })
            }, 500)
        }, // end 

        // init method.
        this.init = function() {
            icon.addEventListener('click', phoneThat.doStuffWhenActive)
        } //  end init
    }, // end phone stuff

    this.wheecher = function(){
        // this method selects the parent element "#wheecher" and it's children ".to-learn-item"
        // and sequentially adds a css animation class to animate the to-learn-items in and out
        // recursively calling itself to change the timeout on each call so that the last element
        // hold for longer

        // assign get elements, declare variable
        var container = document.getElementById('wheecher'),
            typesList = document.getElementsByClassName('to-learn-item'),

        // counter and 
            thisOne = 0,
            delta

        var wordWheecher = function() {
            window.setTimeout( function() {

                var current, next

                // if this is the last element change the timeout delay to hold for longer
                // else normal delay
                if (thisOne == typesList.length - 1) {
                    delta = 2500
                } else {
                    delta = 1500
                }

                // if counter is beyond number of elements, reset

                if (thisOne >= (typesList.length - 1) ) {
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
    
        if ( document.getElementById('wheecher') !== null) {
            wordWheecher()
        }
    },

    this.phoneHome = function(whoYouGonnaCall) {
        // create new xhr, duh
        var xhr = new XMLHttpRequest()

        // phone home and let me know that someone has been looking at my cv. :-)
        xhr.open('get', 'http://www.lesmoffat.co.uk/dev/devdev/cv-poke.php?usr=' + whoYouGonnaCall)
        xhr.send()
    }

} // end cv constructor


// create new instance of cv

var cv = new Cv()

// run init method
cv.init('ibizaDigital')