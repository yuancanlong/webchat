Page({
  data:{
    address:"",
    type:"",
    message:"",
    contact:""
  },
  onLoad(options){
    this.getDetailInfo(options.id);
  },

  getDetailInfo(id){
    wx.request({
      url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_item',
      data: {
        distinct: "yuancanlong",
        id:id
      },
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success: this.getDetailInfoSucc.bind(this)
    })
  },
  getDetailInfoSucc(res){ 
    const result= res.data.data
     this.setData({
       address:result.address,
       type:result.type,
       message:result.message,
       contact:result.contact
     })
  },
})