## 微信小程序之晋江文学城
### 一、页面预览
![第一页](2019-08-05-16-28-07.png)
---
![第二页](2019-08-05-16-32-53.png)
### 二、功能介绍
1. 可以通过小程序了解最近完结好文。
2. 可以通过点击阅读读者评论。
~~其余功能尚待发掘……~~
### 三、主要代码
#### 第一部分
```
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
 ```
 #### 第二部分
 ```
 <!--pages/details/details.wxml-->
<view>
 <view class="title">
   <text>近期完结的好文</text>
  </view>

  <view>
    <view wx:for="{{list}}" wx:key="id" >
     <view class="lesson" id="{{item.id}}">
      <image class="lessonPic" src="{{item.src}}"></image>
      <view class="lessonName">{{item.name}}</view>
      <view class="lessonIntroduce">{{item.introduce}}</view>
     </view>
    </view>
  </view>
</view>
 ```
 其余代码不一一展示了……
