import $ from 'jquery'
import "./app1.css"
const $btn1 = $('#btn1')
const $btn2 = $('#btn2')
const $btn3 = $('#btn3')
const $btn4 = $('#btn4')
const $number = $('#number')

let n = localStorage.getItem('n')
$number.text(n || 100)

$btn1.on('click',()=>{
  let n = parseInt($number.text())
  n+=1
  $number.text(n)
  localStorage.setItem('n',n)
})
$btn2.on('click',()=>{
  let n = parseInt($number.text())
  n+=2
  $number.text(n)
  localStorage.setItem('n',n)
})
$btn3.on('click',()=>{
  let n = parseInt($number.text())
  n*=2
  $number.text(n)
  localStorage.setItem('n',n)
})
$btn4.on('click',()=>{
  let n = parseInt($number.text())
  n/=2
  $number.text(n)
  localStorage.setItem('n',n)
})