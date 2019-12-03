class Model{
  constructor(options){
    ['data','update','create','delete','update','get'].forEach((key)=>{
      if(key in options){
        this[key] = options[key]
      }
    })
  }
  create(){
    console && console.error && console.error('你还没有实现create')
  }
  delete(){
    console && console.error && console.error('你还没有实现delete')
  }
  update(){
    console && console.error && console.error('你还没有实现update')
  }
  get(){
    console && console.error && console.error('你还没有实现get')
  }
}

export default Model