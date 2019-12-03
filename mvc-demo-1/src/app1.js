import $ from 'jquery'
import "./app1.css"
import Model from './base/Model';
import View from './base/View';

const eventBus = $({})
console.log(eventBus)
// 数据相关都放到m
const m = new Model({
    data: {
        n: parseInt(localStorage.getItem('n')) || 0
    },
    update: function (data) {
        Object.assign(m.data, data)
        eventBus.trigger('updated')
        localStorage.setItem('n', m.data.n)
    }
})
// 视图相关都放到v
// 其它的放到c
const view = {
    el: null,
    html: `
      <div>
      <div class="output">
      <span id="number">{{n}}</span>
      </div>
      <div class="actions">
      <button id="btn1">+1</button>
      <button id="btn2">+2</button>
      <button id="btn3">*2</button>
      <button id="btn4">÷2</button>
      </div>
      </div>
  `,
    render(n) {
        const newEl = $(view.html.replace('{{n}}', n))
        if (view.el.children.length !== 0) view.el.empty()
        view.el = newEl.prependTo(view.el)
    },
    init(container) {
        view.el = $(container)
        view.render(m.data.n)
        view.autoBind()
        eventBus.on('updated', () => {
            view.render(m.data.n)
        })
    },
    events: {
        '#btn1': 'add',
        '#btn2': 'double',
        '#btn3': 'mul',
        '#btn4': 'div',
    },
    add() {
        m.update({n: m.data.n + 1})
    },
    double() {
        m.update({n: m.data.n + 2})
    },
    mul() {
        m.update({n: m.data.n * 2})
    },
    div() {
        m.update({n: m.data.n / 2})
    },
    autoBind() {
        for (let key in view.events) {
            view.el.on('click', key, view[view.events[key]])
        }
    }
}

export default view
 