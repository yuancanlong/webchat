const app = getApp()

 Page({
   data:{
      longitude:"",
      latitude:"",
      markers:[],
      controls: [{
        iconPath: '/resources/timg.jpg',
        position: {
          left: (app.globalData.windowWidth/2)-15,
          top: ((app.globalData.windowHeight-40) / 2) - 30,
          width: 30,
          height: 30
        }
      },{
        id: 1,
        iconPath: '/resources/timg1.png',
        position: {
          left: 20,
          top: app.globalData.windowHeight - 90,
          width: 30,
          height: 30
        },
        clickable: true 
      }]
   },
   onShow(){
      this.getLocation();
      this.getMessages();
   },
   getMessages(){
     wx.request({
       url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_list',
       data:{
         distinct: "yuancanlong"
       },
       header:{
         'content-type': 'application/x-www-form-urlencoded'
       },
       success: this.getMessagesSucc.bind(this)     
     })
   },
   getMessagesSucc(res){
     const data=res.data.data
      const arr=data.map((value,index)=>{  
        return{
          iconPath: "/resources/"+value.type+".png",
          id: value.id,
          latitude: value.latitude,
          longitude: value.longitude,
          width: 40,
          height: 40
        }
        
      });
      this.setData({
        markers:arr
      })
   },
   onReady() {
     this.mapCtx = wx.createMapContext('map')
   },
   getLocation() {
     wx.getLocation({
       type: 'gcj02',
       success: this.getLocationSucc.bind(this)
     })
   },
   getLocationSucc(bind){
      this.setData({
        longitude: bind.longitude,
        latitude: bind.latitude
      })
   },
   controltap() {
      this.mapCtx.moveToLocation();
   },
   handleMakerTap(e){
     wx.navigateTo({
       url: '/pages/detail/detail?id='+e.markerId
     })
   },
  onShareAppMessage(){
    return{
      title:"萌宠交易平台",
      path:"/pages/index/index"
    }
  }
 })
