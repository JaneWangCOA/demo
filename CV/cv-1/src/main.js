let html = document.querySelector('#demo');
let style = document.querySelector('#style')
let string = `/*您好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*接下来我把div变成一个八卦图
请注意
先变个圆*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*八卦是由阴阳组成的，
一黑一白*/
#div1{
  background: linear-gradient(90deg,white 50%,black 50%,black 100%)
}
#div1::before{
  content: '';
  display:block;
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translateX(50%);
  background: radial-gradient(circle,white 25%,black 25%,black 100%)
}
#div1::after{
  content: '';
  display:block;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translateX(50%);
  background: radial-gradient(circle,black 25%,white 25%,white 100%)
}
`
let sContainer = ''
let n = 0

let step = ()=>{
  setTimeout(()=>{
    console.log(string[n])
    if(string[n].charCodeAt() === 10){
      sContainer += '<br/>'
    }else if(string[n] === ' '){
      sContainer += '&nbsp;'
    }else{
      sContainer += string[n]
    }
    html.innerHTML = sContainer
    style.innerHTML = string.substring(0,n)
    window.scrollTo(0,99999)
    demo.scrollTo(0,9999)
    n = n+1
    if(n < string.length){
      step()
    }
  },10)
}

step()

