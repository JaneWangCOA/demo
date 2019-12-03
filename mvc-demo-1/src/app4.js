import $ from 'jquery'

import "./app4.css"


// console.log(circle)
const html = `
<div id="div4">
<div class="circle"></div>
</div>
`

const $element = $(html).appendTo($('body>.page'))

const $circle = $('#div4 .circle')
$circle.on('mouseenter',()=>{
  $circle.addClass('active')
  console.log('来了')
}).on('mouseleave',()=>{
  $circle.removeClass('active')
  console.log('走了')
})