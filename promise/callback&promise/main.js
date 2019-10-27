// 动画
//promise和回调在流程控制上的区别
let el = document.querySelector("#el");
let btn = document.querySelector("#btn");
btn.className = "cover coverB"
setTimeout(function(){
  btn.style.display = "none"
}, 6000)


//传统写法
// function moveTo(el, x, y, cb) {
//   el.style.transform = `translate(${x}%,${y}%)`;
//   setTimeout(function() {
//     cb && cb();
//   }, 120);
// }

// el.addEventListener("click", e => {
//   moveTo(el, 10, 10, function() {
//     console.log("我移动了");
//     moveTo(el, 30, 20, function() {
//       console.log("我移动了2");
//       moveTo(el, -30, -10, function() {
//         console.log("我移动了3");
//         moveTo(el, -100, -10, function() {
//           console.log("我移动了4");
//           moveTo(el, 10, -100, function() {
//             console.log("我移动了5");
//             moveTo(el, -70, -120, function() {
//               console.log("我移动了6");      
//             });
//           });
//         });
//       });
//     });
//   });
// });

promise
function moveTo(el,x,y,val){
  return new Promise((resolve,reject) => {
    if(val){
      el.style.transform = `translate(${x}%,${y}%)`
      setTimeout(function(){
        resolve()
      },150)
    }else{
      reject()
    }
  })
}

el.addEventListener('click', e=>{
  moveTo(el, 10, 1, true)
    .then(function(){
      console.log('喵')
      return moveTo(el,30,-20);
    })
    .then(function(){
      console.log('喵喵')
      return moveTo(el,-6,-68)
    })
    .then(function(){
      console.log('喵喵喵')
      return moveTo(el,-50,0)
    })
    .then(function(){
      console.log('喵喵喵喵')
      return moveTo(el,-100,-8)
    })
    .then(function(){
      console.log('喵喵喵喵喵')
      return moveTo(el,66,38)
    })
    .then(function(){
      console.log('喵喵喵喵喵喵')
      return moveTo(el,6,-150)
    })
})
