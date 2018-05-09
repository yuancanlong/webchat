Page({
  data:{
    list:[]
  },
  staticData:{
    inputValue:""
  },
  onLoad() {
    this.getSearchResult()
   },
  getSearchResult(){
    wx.request({
      url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_search_list',
      data: {
        distinct: "yuancanlong",
        keyword:this.staticData.inputValue
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: this.getSearchResultSucc.bind(this)
    })
  },

  getSearchResultSucc(res){
    if(res.data.ret){
    const result=res.data.data
    console.log(result)
    this.setData({
      list:result
    })
    }else{
      this.setData({
        list:[]
      })
    }
  },

  handleInputChange(e) {
    this.staticData.inputValue = e.detail.value
  },

  handleSearch(){
    this.getSearchResult()
  },

  handleItemTap(e){
    wx.navigateTo({
      url:'/pages/detail/detail?id='+e.currentTarget.id
    })
  },
 
})