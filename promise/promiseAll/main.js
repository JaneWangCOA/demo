
const loadImg = (src) => {
  return new Promise((resolve,reject) => {
    const img = new Image();
    img.src = src
    img.onload = () =>{
      resolve(img)
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}

const imgs = [
  'https://tse4-mm.cn.bing.net/th?id=OIP.wMMWA_q58fVc9xcjPiZY2QHaFj&w=264&h=197&c=7&o=5&dpr=2&pid=1.7',
  'https://tse2-mm.cn.bing.net/th?id=OIP.bBiitwexCFx8KxqSx1_7LAHaFj&w=241&h=178&c=7&o=5&dpr=2&pid=1.7',
  'https://tse1-mm.cn.bing.net/th?id=OIP.NkEpuFb36_FjaLhDQ6kh8QHaEo&w=300&h=187&c=7&o=5&dpr=2&pid=1.7'
]

Promise.all(imgs.map(src => loadImg(src))).then((arr) => {
  console.log(arr)
  arr.forEach((img) => {
    container.appendChild(img)
  })
}).catch((e) => {
  console.log(e)
})
// Promise.all中如果有哪一项不是promise对象，它就会用Promise.resolve对它进行自动封装
//