import $ from "jquery";
import "./app2.css";

const html = `
<div id="div2">
<ol class="tab-bar">
<li>1</li>
<li>2</li>
</ol>
<ol class="tab-content">
<li>内容一</li>
<li>内容二</li>
</ol>
</div>
`;

const $element = $(html).appendTo($('body>.page'))

const $tabBar = $("#div2 .tab-bar");
const $tabContent = $("#div2 .tab-content");
let index = localStorage.getItem("index") || 0;
$tabBar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();
  localStorage.setItem("index", index);
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar
  .children()
  .eq(index)
  .trigger("click");
