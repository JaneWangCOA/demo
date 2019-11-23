import $ from 'jquery'
import "./app2.css"
const $tabBar = $('#div2 .tab-bar')
const $tabContent = $('#div2 .tab-content')

let index = localStorage.getItem('index') || 0
$tabBar.on('click',"li",(e)=>{
  const $li = $(e.currentTarget)
  $li.addClass('selected').siblings().removeClass('selected')
  const index = $li.index()
  localStorage.setItem('index',index)
  $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})

$tabBar.children().eq(index).trigger('click')