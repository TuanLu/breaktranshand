var clone = require('lodash/lang/clone')
var CustomCursor = require('./CustomCursor')
//var CustomTranshandDesign = require('./CustomTranshandDesign')
//var CustomCursorHintDesign = require('./CustomCursorHintDesign')
//var tinycolor = require('tinycolor2')

const INIT_TRANSFORM = {
  tx: 0, ty: 0,
  sx: 1, sy: 1,
  rz: 0,
  ox: 0.5, oy: 0.5,
}

export default function scatterThings() {

  var colors = ['#7FDBFF', '#0074D9', '#01FF70', '#001F3F', '#39CCCC', '#3D9970',
    '#2ECC40', '#FF4136', '#85144B', '#FF851B', '#B10DC9', '#FFDC00', '#F012BE',
    '#aaa', '#fff', '#111', '#ddd']

  // var takeOne = arr => pullAt(arr, random(arr.length - 1))

  var rootNode = document.querySelector('#stuffs')
  document.body.style.backgroundColor = '#006699'
  // document.querySelector('#source > a').style.color = tinycolor.mostReadable(
  //   document.body.style.backgroundColor,
  //   colors
  // ).toHexString()

  var red = createDiv(122, 122, rootNode, '#aaa')
  red.transhandProps = {
    stroke: {
      stroke: '#FF4136',
      strokeWidth: 3,
      strokeDasharray: '20,10,5,5,5,10',
    },
    cursor: new CustomCursor('#FFDC00'),
    //CursorHintDesignComponent: CustomCursorHintDesign,
  }

  var orange = createDiv(122, 122, rootNode, '#85144b')
  orange.transhandProps = {
    stroke: {
      stroke: '#FF851B',
      strokeWidth: 1,
    },
    cursor: new CustomCursor('#FF851B'),
    //DesignComponent: CustomTranshandDesign,
    //CursorHintDesignComponent: CustomCursorHintDesign,
  }

  function createDiv(w, h, deParent, color) {
    var div = document.createElement('div')
    div.style.width = w + 'px'
    div.style.height = h + 'px'
    div.style.backgroundColor = color
    div.style.boxShadow = '1px 1px 4px 0px rgba(50, 50, 50, 0.75)'
    div._handlerTransform = clone(INIT_TRANSFORM)

    place(div, deParent)

    return div
  }

  function place(de, deParent) {
    deParent.appendChild(de)

    var w = deParent.offsetWidth - de.offsetWidth
    var h = deParent.offsetHeight - de.offsetHeight

    de.style.left = parseInt(w * Math.random()) + 'px'
    de.style.top = parseInt(h * Math.random()) + 'px'
    de.style.position = 'absolute'
    de.style.cursor = 'pointer'
    de._handlerDemo = true
  }
}
