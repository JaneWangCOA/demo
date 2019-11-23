import $ from 'jquery'

import "./app4.css"

const $circle = $('#div4 .circle')

// console.log(circle)

$circle.on('mouseenter',()=>{
  $circle.addClass('active')
  console.log('来了')
}).on('mouseleave',()=>{
  $circle.removeClass('active')
  console.log('走了')
})