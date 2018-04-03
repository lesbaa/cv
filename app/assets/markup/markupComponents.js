import {
  meSilent,
  meTalking,
  hp,
  mp,
} from '../images/index'

export default {
  'meGrp': {
    child1: {
      type: 'picture',
      classes: 'me',
      children: {
        child1: {
          type: 'img',
          id: 'me-img',
          attributes: {
            'src': meSilent,
            'data-swap-img': meTalking,
            'data-orig-img': meSilent,
          },
        },
      },
    },
    child2: {
      type: 'div',
      classes: 'hp',
      children: {
        child1: {
          type: 'img',
          classes: 'hp-mp-image blink',
          attributes: {
            src: hp,
          },
        },
        child2: {
          type: 'div',
          classes: 'hp-bar',
          id: 'hp-bar',
        },
      },
    },
    child3: {
      type: 'div',
      classes: 'mp',
      children: {
        child1: {
          type: 'img',
          classes: 'hp-mp-image blink',
          attributes: {
            src: mp,
          },
        },
        child2: {
          type: 'div',
          classes: 'mp-bar',
          id: 'mp-bar',
        },
      },
    },
  },
}
