import {
  meFire,
  skillScale,
  prevBtn,
  nextBtn,
  tapeLoader,
  phone,
  phoneIcon,
  phoneMessage,
  terminal8Bit,
  boba8Bit,
  notebook8Bit,
  isoMachine,
  construct,
  engine,
  portrait,
  icons,
  twitterIcon,
  codepenIcon,
  mailIcon,
  lesIcon,
  elloIcon,
  githubIcon,
} from '../images'

import markupCompnents from './markupComponents'

import blurbs from '../blurbs'

export default {

  'loading': {
    child1: {
      type: 'div',
      classes: 'loading-wrapper center-parent',
      id: 'loading',
      children: {
        child1: {
          type: 'div',
          classes: 'loader centered',
          children: {
            child1: {
              type: 'img',
              attributes: {
                'src': tapeLoader,
                'alt': 'gif animation of a hovering tape',
              },
            },
            child2: {
              type: 'div',
              textContent: '',
            },
          },
        },
      },
    },
  },

  'woops': {
    child1: {
      type: 'section',
      classes: 'woops-wrapper center-parent out-of-view-right',
      id: 'loading',
      children: {
        child1: {
          type: 'div',
          classes: 'loader centered me',
          children: {
            child1: {
              type: 'img',
              id: 'me-img',
              attributes: {
                'src': meFire,
              },
            },
            child2: {
              type: 'div',
              textContent: 'woops! something\'s gone wrong there!',
              children: {
                child1: {
                  type: 'br',
                },
                child2: {
                  type: 'a',
                  textContent: 'Try again!',
                  attributes: {
                    'href': '#intro',
                    'onclick': 'location.reload()',
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  'nextPrev': {
    child1: {
      type: 'div',
      classes: 'next-prev',
      children: {
        child1: {
          type: 'button',
          id: 'prev',
          classes: 'prev',
          children: {
            child1: {
              type: 'img',
              attributes: {
                'src': prevBtn,
              },
            },
          },
        },
        child2: {
          type: 'button',
          id: 'next',
          classes: 'next',
          children: {
            child1: {
              type: 'img',
              attributes: {
                'src': nextBtn,
              },
            },
          },
        },
      },
    },
  }, // end next / prev

  'intro': {
    child1: {
      type: 'section',
      classes: 'intro-wrapper center-parent out-of-view-right',
      children: {
        child1: {
          type: 'div',
          id: 'content',
          classes: 'centered',
          children: {
            child1: {
              type: 'h1',
              classes: 'title',
              textContent: 'Hello!',
            },
            child2: {
              type: 'div',
              classes: 'intro--me-grp',
              textContent: '',
              children: markupCompnents.meGrp,
            },
            child3: {
              type: 'div',
              classes: 'intro--me-grp--blurb centered',
              children: {
                child1: {
                  id: 'intro-blurb',
                  type: 'p',
                  textContent: '',
                },
              },
            },
          },
        },
      },
    },
  }, // end intro

  'overview': {
    child1: {
      type: 'section',
      classes: 'overview-wrapper  out-of-view-right',
      children: {
        child1: {
          type: 'div',
          id: 'skills-list',
          classes: 'overview--skills-list',
          children: {
            child1: {
              type: 'img',
              classes: 'overview--skills-list--scale',
              attributes: {
                'src': skillScale,
                'alt': 'a for comparing the skills listed',
              },
            },
          },
        },
        child2: {
          type: 'div',
          classes: 'overview--me-grp center-parent',
          children: {
            child1: {
              type: 'div',
              classes: 'centered',
              id: 'content',
              children: {
                child1: {
                  type: 'h1',
                  classes: 'title',
                  textContent: 'Les Moffat',
                },
                child2: {
                  type: 'h2',
                  classes: 'overview--me-grp-char-class',
                  textContent: '',
                  id: 'char-class',
                },
                child3: {
                  type: 'div',
                  classes: 'me-grp',
                  textContent: '',
                  children: markupCompnents.meGrp,
                },
                child4: {
                  type: 'div',
                  classes: 'overview--me-grp--blurb centered',
                  children: {
                    child1: {
                      type: 'p',
                      id: 'overview-blurb',
                      textContent: '',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }, // end overview

  'devSkills': {
    child1: {
      type: 'section',
      classes: 'dev-skills--page-wrapper center-parent  out-of-view-right',
      children: {
        child1: {
          type: 'div',
          classes: 'centered dev-skills--myConsole-wrapper',
          id: 'content',
          children: {
            child1: {
              type: 'div',
              classes: 'dev-skills--myConsole-grp',
              children: {
                child1: {
                  type: 'div',
                  classes: 'dev-skills--myConsole-grp--title-bar',
                  children: {
                    child1: {
                      type: 'div',
                      classes: 'os-btn',
                    },
                    child2: {
                      type: 'div',
                      classes: 'os-btn',
                    },
                    child3: {
                      type: 'div',
                      classes: 'os-btn',
                    },
                    child4: {
                      type: 'span',
                      classes: 'dev-skills--myConsole-grp--title',
                      textContent: '1.dev_skills',
                    },
                  },
                },
                child2: {
                  type: 'div',
                  id: 'myConsole',
                  classes: 'dev-skills--myConsole-grp--myConsole',
                  children: {
                    child1: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: ' _             __  __        __  __       _   ',
                    },
                    child2: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: '| |    ___ ___|  \\/  | ___  / _|/ _| __ _| |_ ',
                    },
                    child3: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: '| |   / _ / __| |\\/| |/ _ \\| |_| |_ / _` | __|',
                    },
                    child4: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: '| |__|  __\\__ | |  | | (_) |  _|  _| (_| | |_ ',
                    },
                    child5: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: '|_____\\___|___|_|  |_|\\___/|_| |_|  \\__,_|\\__|',
                    },
                    child6: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: '==============================================',
                    },
                    child7: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: '*******   You should totally hire me   *******',
                    },
                    child8: {
                      type: 'pre',
                      classes: 'myConsole-line elmo',
                      textContent: '==============================================',
                    },
                    child9: {
                      type: 'pre',
                      classes: 'myConsole-line',
                      children: {
                        child1: {
                          type: 'br',
                        },
                      },
                    },
                    child10: {
                      type: 'pre',
                      classes: 'myConsole-line',
                      textContent: 'type \'help\' for help',
                    },
                    child11: {
                      type: 'pre',
                      id: 'myConsole-prompt',
                      classes: 'myConsole-line usr',
                      textContent: '~/les/cv/skills usr$: ',
                    },
                    child12: {
                      type: 'kbd',
                      id: 'myConsole-input',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }, // end dev skills

  'mobile': {
    child1: {
      type: 'section',
      classes: 'design-wrapper  out-of-view-right',
      id: 'design-wrapper',
      children: {
        child1: {
          type: 'div',
          classes: 'design-skills--page-wrapper center-parent',
          children: {
            child1: {
              type: 'div',
              classes: 'centered design-skills--phone inactive',
              id: 'phone',
              children: {
                child1: {
                  type: 'img',
                  id: 'phone-image',
                  attributes: {
                    'src': phone,
                  },
                },
              },
            },
          },
        },
        child2: {
          type: 'div',
          classes: 'design-skills--icon-wrapper center-parent',
          children: {
            child1: {
              type: 'div',
              classes: 'centered design-skills--phone-content',
              id: '',
              children: {
                child1: {
                  type: 'img',
                  id: 'message-icon',
                  classes: 'tadaa',
                  attributes: {
                    'src': phoneIcon,
                    'data-swap-img': phoneMessage,
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  'layout': {
    child1: {
      type: 'section',
      classes: 'layout-skills--page-wrapper center-parent  out-of-view-right',
      children: {
        child1: {
          type: 'div',
          classes: 'centered layout-skills--window-wrapper',
          id: 'content',
          children: {
            child1: {
              type: 'div',
              classes: 'layout-skills--window-grp',
              children: {
                child1: {
                  type: 'div',
                  classes: 'layout-skills--window-grp--title-bar',
                  children: {
                    child1: {
                      type: 'div',
                      classes: 'os-btn',
                    },
                    child2: {
                      type: 'div',
                      classes: 'os-btn',
                    },
                    child3: {
                      type: 'div',
                      classes: 'os-btn',
                    },
                    child4: {
                      type: 'span',
                      classes: 'dev-skills--myConsole-grp--title',
                      textContent: 'wireframing / UX / UI',
                    },
                  },
                },
                child2: {
                  type: 'div',
                  id: 'layout',
                  classes: 'center-parent layout-skills--window-grp--window',
                  children: {
                    child1: {
                      type: 'div',
                      classes: 'centered',
                      children: {
                        child1: {
                          type: 'div',
                          classes: 'layout--me-grp',
                          children: markupCompnents.meGrp,
                        },
                        child2: {
                          type: 'div',
                          classes: 'layout--me-grp--blurb',
                          children: {
                            child1: {
                              type: 'h1',
                              textContent: 'I\'ve been framed',
                            },
                            child2: {
                              type: 'h2',
                              textContent: 'Wireframing / layout',
                            },
                            child3: {
                              type: 'p',
                              id: 'layout-blurb',
                              textContent: '',
                            },
                            child4: {
                              type: 'button',
                              classes: 'btn cta',
                              id: 'next-btn',
                              textContent: 'cool!',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  'illustration': {
    child1: {
      type: 'section',
      classes: 'illustration-skills--page-wrapper center-parent  out-of-view-right',
      children: {
        child1: {
          type: 'div',
          classes: 'illus centered',
          children: {
            child1: {
              type: 'div',
              classes: 'illus--column',
              children: {
                child1: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': terminal8Bit,
                      },
                    },
                  },
                },
                child2: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': boba8Bit,
                      },
                    },
                  },
                },
              },
            },
            child2: {
              type: 'div',
              classes: 'illus--column',
              children: {
                child1: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': notebook8Bit,
                      },
                    },
                  },
                },
                child2: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': isoMachine,
                      },
                    },
                  },
                },
              },
            },
            child3: {
              type: 'div',
              classes: 'illus--column',
              children: {
                child1: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': construct,
                      },
                    },
                  },
                },
                child2: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': engine,
                      },
                    },
                  },
                },
              },
            },
            child4: {
              type: 'div',
              classes: 'illus--column',
              children: {
                child1: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': portrait,
                      },
                    },
                  },
                },
                child2: {
                  type: 'div',
                  classes: 'illus--item',
                  children: {
                    child1: {
                      type: 'img',
                      attributes: {
                        'src': icons,
                      },
                    },
                  },
                },
              },
            },
            child5: {
              type: 'div',
              classes: 'illus--blurb',
              children: {
                child1: {
                  type: 'p',
                  id: 'illus-blurb',
                  textContent: '',
                },
              },
            },
          },
        },
      },
    },
  },

  'learning': {
    child1: {
      type: 'section',
      classes: 'want-to-learn-skills--page-wrapper center-parent  out-of-view-right',
      children: {
        child1: {
          type: 'div',
          classes: 'centered',
          children: {
            child1: {
              type: 'h1',
              classes: 'want-to-learn--title',
              textContent: 'And it\'s a big \'ol internet out there...',
            },
            child2: {
              type: 'h2',
              classes: 'word-scroller',
              children: {
                child1: {
                  type: 'span',
                  classes: 'i-build',
                  textContent: '...there\'s so much more to learn, like ',
                },
                child2: {
                  type: 'div',
                  id: 'wheecher',
                  classes: 'to-learn',
                  children: {
                    child1: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'everything!',
                    },
                    child2: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'css grid!',
                    },
                    child3: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'SVG filters!',
                    },
                    child4: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'React.js',
                    },
                    child5: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Node, Angular2 and MEAN!',
                    },
                    child6: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Electron!',
                    },
                    child7: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'A-frame & web VR!',
                    },
                    child8: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'PenTesting!',
                    },
                    child9: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Swift / iOS!',
                    },
                    child10: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Magento!',
                    },
                    child11: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'C# and .NET!',
                    },
                    child12: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Web components!',
                    },
                    child13: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'WebSocket!',
                    },
                    child14: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Python / Django',
                    },
                    child15: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'three.js!',
                    },
                    child16: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'pixi.js!',
                    },
                    child17: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Processing / p5.js!',
                    },
                    child18: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'GSL Shaders!',
                    },
                    child19: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: 'Yeoman!',
                    },
                    child20: {
                      type: 'span',
                      classes: 'to-learn-item below',
                      textContent: '¡Español!',
                    },
                  },
                },
              },
            },
            child3: {
              type: 'div',
              classes: 'want-to-learn--me-grp--blurb centered',
              children: blurbs.learning,
            },
          },
        },
      },
    },
  },

  'general': {
    child1: {
      type: 'section',
      classes: 'want-to-learn-skills--page-wrapper center-parent  out-of-view-right',
      id: 'such-stuff-stuff',
      children: {
        child1: {
          type: 'div',
          classes: 'centered',
          children: {
            child1: {
              type: 'div',
              classes: 'general--me-grp',
              children: markupCompnents.meGrp,
            },
            child2: {
              type: 'div',
              classes: 'intro--me-grp--blurb centered',
              children: {
                child1: {
                  type: 'p',
                  id: 'such-blurb',
                  textContent: '',
                },
              },
            },
          },
        },
      },
    },
  },

  'sumUp': {
    child1: {
      type: 'section',
      classes: 'center-parent sum-up-wrapper  out-of-view-right',
      children: {
        child1: {
          type: 'div',
          classes: 'centered',
          id: 'content',
          children: {
            child1: {
              type: 'h1',
              classes: 'title',
              textContent: 'Et voila, c\'est ça!',
            },
            child2: {
              type: 'div',
              classes: 'sum-up--me-grp',
              children: markupCompnents.meGrp,
            },
            child3: {
              type: 'div',
              classes: 'sum-up--me-grp--blurb centered',
              children: {
                child1: {
                  type: 'p',
                  id: 'sum-up-blurb',
                },
              },
            },
            child4: {
              type: 'ul',
              classes: 'contact-list',
              children: {
                child1: {
                  type: 'li',
                  children: {
                    child1: {
                      type: 'a',
                      attributes: {
                        'href': 'http://www.twitter.com/@_lesbaa_',
                        'target': '_blank',
                        'title': 'twitter',
                      },
                      children: {
                        child1: {
                          type: 'img',
                          attributes: {
                            'alt': 'twitter Icon',
                            'src': twitterIcon,
                          },
                        },
                      },
                    },
                  },
                },
                child2: {
                  type: 'li',
                  children: {
                    child1: {
                      type: 'a',
                      attributes: {
                        'href': 'http://codepen.io/lesbaa/pens/popular/',
                        'target': '_blank',
                        'title': 'codepen',
                      },
                      children: {
                        child1: {
                          type: 'img',
                          attributes: {
                            'alt': 'codepen Icon',
                            'src': codepenIcon,
                          },
                        },
                      },
                    },
                  },
                },
                child3: {
                  type: 'li',
                  children: {
                    child1: {
                      type: 'a',
                      attributes: {
                        'href': 'mailto:les@lesmoffat.co.uk',
                        'title': 'eMail me',
                      },
                      children: {
                        child1: {
                          type: 'img',
                          attributes: {
                            'alt': 'mail Icon',
                            'src': mailIcon,
                          },
                        },
                      },
                    },
                  },
                },
                child4: {
                  type: 'li',
                  children: {
                    child1: {
                      type: 'a',
                      attributes: {
                        'href': 'https://www.lesmoffat.co.uk/contact.html',
                        'target': '_blank',
                        'title': 'contact me on my site',
                      },
                      children: {
                        child1: {
                          type: 'img',
                          attributes: {
                            'alt': 'les Icon',
                            'src': lesIcon,
                          },
                        },
                      },
                    },
                  },
                },
                child5: {
                  type: 'li',
                  children: {
                    child1: {
                      type: 'a',
                      attributes: {
                        'href': 'http://ello.co/lesbaa',
                        'target': '_blank',
                        'title': 'say ello',
                      },
                      children: {
                        child1: {
                          type: 'img',
                          attributes: {
                            'alt': 'ello Icon',
                            'src': elloIcon,
                          },
                        },
                      },
                    },
                  },
                },
                child6: {
                  type: 'li',
                  children: {
                    child1: {
                      type: 'a',
                      attributes: {
                        'href': 'https://github.com/lesbaa/',
                        'target': '_blank',
                        'title': 'view my stuff on github',
                      },
                      children: {
                        child1: {
                          type: 'img',
                          attributes: {
                            'alt': 'github Icon',
                            'src': githubIcon,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        child2: {
          type: 'div',
          classes: 'level-up',
          textContent: 'LEVEL UP!!',
        },
      },
    },
  },
}
