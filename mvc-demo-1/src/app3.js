import $ from 'jquery'
import "./app3.css"

const $square = $('#div3 .square')

let position = localStorage.getItem('position') || 'left'

let point = function(position){
  if(position === 'left'){
    $square.removeClass('active')
    position = 'right'
  }else{
    $square.addClass('active')
    position = 'left'
  }
  console.log(position)
}

$square.on('click',()=>{
  if(position === 'right'){
    $square.removeClass('active')
    position = 'left'
  }else{
    $square.addClass('active')
    position = 'right'
  }
  localStorage.setItem('position',position)
})

point(position)
