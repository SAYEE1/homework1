// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:"地球上线",
        introduce:"简介：地球已加入黑塔豪华午餐~",
        src: "../../image/地球上线.jpg",
        catalog:[
          {section:"1.文章详情"},
          {section:"2.主角介绍"},
          {section:"3.结局预测"}
        ]
      },
      {
        id: 1,
        name: "撒野",
        introduce: "简介：来啊，撒野啊，反正有大把时光",
        src: "../../image/撒野.jpg",
        catalog: [
          { section: "1.文章详情" },
          { section: "2.主角介绍" },
          { section: "3.结局预测" }
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})