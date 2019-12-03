import $ from 'jquery'
import "./app3.css"


const html = `
<div id="div3">
<div class="square">123</div>
</div>
`

const $element = $(html).appendTo($('body>.page'))
const $square = $('#div3 .square')

let position = localStorage.getItem('position') || 'left'

$square.toggleClass('active',position)

$square.on('click',()=>{
  if(position){
    $square.removeClass('active')
    position = false
  }else{
    $square.addClass('active')
    position = true
  }
  localStorage.setItem('position',position)
})

