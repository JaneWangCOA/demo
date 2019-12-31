window.$ = window.jQuery = function(selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  //api操纵elements
  const api = Object.create(jQuery.prototype);
  Object.assign(api, {
    elements: elements,
    oldApi: selectorOrArray.oldApi
  });
  return api;
};

jQuery.fn =jQuery.prototype = {
  jquery: true,
  //返回一个可以访问上级作用域的对象
  find(selector) {
    let arr = [];
    // for(let i=0; i<elements.length;i++){
    //   arr = arr.concat(Array.from(elements[i].querySelectorAll(selector)))
    // }
    this.each(node => {
      arr = arr.concat(Array.from(node.querySelectorAll(selector)));
    });
    arr.oldApi = this;
    return jQuery(arr);
  },
  each(fn) {
    for (let i = 0; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i);
    }
    return this;
  },
  parent() {
    const arr = [];
    this.each(node => {
      if (arr.indexOf(node.parentNode) === -1) {
        arr.push(node.parentNode);
      }
    });
    return jQuery(arr);
  },
  children() {
    const arr = [];
    this.each(node => {
      if (arr.indexOf(node.children) === -1) {
        arr.push(...node.children);
      }
    });
    return jQuery(arr);
  },
  print() {
    console.log(this.elements);
  },
  addClass(className) {
    // for(let i = 0; i<elements.length;i++){
    //   elements[i].classList.add(className)
    // }
    this.each(node => {
      node.classList.add(className);
    });
    return this;
  },
  end() {
    return this.oldApi;
  }
};
