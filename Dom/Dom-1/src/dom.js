window.dom = {
  //增加节点
  create(string){
    const container = document.createElement('template');
    container.innerHTML = string.trim()
    return container.content.firstChild
  },
  after(node,node2){
    node.parentNode.insertBefore(node2,node.nextSibling)
  },
  before(node,node2){
    node.parentNode.insertBefore(node2,node)
  },
  append(parent,node){
    parent.appendChild(node)
  },
  wrap(node,parent){
    //先做兄弟
    dom.before(node,parent)
    //再做爸爸
    dom.append(parent,node)
  },
  //增加节点
  //删除节点
  remove(node){
    node.parentNode.removeChild(node)
    return node
  },
  empty(node){
    let array = []
    let {firstChild} = node
    console.log(firstChild)
    while(firstChild){
      array.push(dom.remove(node.firstChild))
      firstChild = node.firstChild
    }
    return array
  },
  //删除节点
  //修改节点
  attr(node,name,value){//重载
    if(arguments.length === 3){
      node.setAttribute(name,value)
    }else if(arguments.length === 2){
      return node.getAttribute(name)
    }
  },
  text(node,string){//适配
    if(arguments.length === 2){
      if('innerText' in node){
        node.innerText = string // ie
      }else{
        node.textContent = string // firefox/chrome
      }
    }else if(arguments.length === 1){
      if('innerText' in node){
        return node.innerText // ie
      }else{
        return node.textContent // firefox/chrome
      }
    }
  },
  html(node,string){
    if(arguments.length === 2){
      node.innerHTML = string
    }else if(arguments.length === 1){
      return node.innerHTML
    }
  },
  style(node,name,value){
    if(arguments.length === 3){
      //dom.style(div,'color','yellow')
      node.style[name] = value
    }else if(arguments.length === 2){
      //dom.style(div,'color')
      if(typeof name === 'string'){
        return node.style[name]
      }else if (name instanceof Object){
        //dom.style(div,{color: 'red',height: '120px'})
        const object = name
        for(let key in object){
          node.style[key] = object[key]
        }
      }
    } 
  },
  class:{
    add(node, className){
      node.classList.add(className)
    },
    remove(node,className){
      node.classList.remove(className)
    },
    has(node,className){
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn){
    node.addEventListener(eventName,fn)
  },
  off(node, eventName, fn){
    node.removeEventListener(eventName,fn)
  },
  //修改节点
  //查找节点
  find(selector,scope){
    return (scope || document).querySelectorAll(selector)
  },
  parent(node){
    return node.parentNode
  },
  children(node){
    return node.children
  },
  siblings(node){
    return Array.from(node.parentNode.children).filter(n=>n!==node)
  },
  next(node){
    let x = node.nextSibling
    while(x && x.nodeType === 3){
      x = x.nextSibling
    }
    return x
  },
  previous(node){
    let x = node.previousSibling
    while(x && x.nodeType === 3){
      x = x.previousSibling
    }
    return x
  },
  each(nodeList, fn){
    for(let i =0; i<nodeList.length; i++){
      fn.call(null,nodeList[i])
    }
  },
  index(node){
    const list = dom.children(node.parentNode)
    for(let i = 0; i< list.length;i++){
      if(list[i] === node){
        return i+1
      }
    }
  }
  //查找节点

}
