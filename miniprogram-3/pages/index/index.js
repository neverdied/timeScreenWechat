// index.js
// 获取应用实例
const util = require('../../utils/util.js')

Page({
  data: {
    color:'white',
    bgColor:'black',
    Time:'',
  },
  changeColor:function(){
    console.log(this.data.color)
    if(this.data.color=='white'){
      this.setData({
        color:'red',
        bgColor:'white',
      })
    }else{
      this.setData({
        color:'white',
        bgColor:'black'
      })
      
    }
    
  },
  
  onLoad:function(options){
    var that = this;
    setInterval(function(){
        that.setData({
            Time: util.formatTime(new Date()),
        });    

    },1000);    
  }
  
})
