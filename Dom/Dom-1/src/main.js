const div = dom.create("<tr><td>我是tr里的td</td></tr>");
const div2 = dom.create("<tr><td>我是tr里的td</td></tr>");
const div3 = dom.create("<tr><td>我是tr里的td</td></tr>");

// console.log(div)

dom.after(test,div)
dom.after(div,div2)

const div4 = dom.create(`<div id="parent" style="color: purple"></div>`)
dom.wrap(div, div4)
dom.wrap(div2,div4)


console.log(dom.empty(empty))

dom.attr(test,'title','Hi,I am Jane')
console.log(dom.attr(test,'title'))

dom.text(test,'这是我修改过的内容')

const fn = () => {
  console.log('别点我！')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

console.log(dom.find('.red',test3)[0])

console.log(dom.siblings(test))

console.log(dom.next(test2))
console.log(dom.previous(test2))

const nodeList = dom.children(dom.find('.travel')[0])
console.log(nodeList)
dom.each(nodeList, (item) => {
  dom.style(item,{color:'red'})
  console.log(item)
})

console.log(dom.index(test))