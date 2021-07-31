# ColorUI使用指南

## 布局

### Flex布局

#### 尺寸

> - xs
> - sm
> - df
> - lg

#### 固定尺寸

```html
<view class="flex flex-wrap">
    <view class="basis-xs padding-xs margin-xs bg-olive radius">1</view>
    <view class="basis-df"></view>
    <view class="basis-sm padding-xs margin-xs bg-red radius">2</view>
    <view class="basis-df"></view>
    <view class="basis-df padding-xs margin-xs bg-orange radius">3</view>
    <view class="basis-lg padding-xs margin-xs bg-blue radius">4</view>	
</view>
```

#### 比例布局

```html 
<view class="flex">
  <view class="flex-sub padding-xs margin-xs bg-red radius">1</view>
  <view class="flex-sub padding-xs margin-xs bg-olive radius">2</view>
</view>
<view class="flex">
  <view class="flex-sub padding-xs margin-xs bg-red radius">1</view>
  <view class="flex-twice padding-xs margin-xs bg-olive radius">2</view>
</view>
<view class="flex">
  <view class="flex-sub padding-xs margin-xs bg-red radius">1</view>
  <view class="flex-treble padding-xs margin-xs bg-olive radius">2</view>
</view>
<view class="flex">
  <view class="flex-twice padding-xs margin-xs bg-red radius">1</view>
  <view class="flex-twice padding-xs margin-xs bg-olive radius">2</view>
</view>
```

#### 水平对齐方式

```html
<view class="flex justify-start">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-xs margin-xs bg-olive radius">2</view>
</view>
<view class="flex justify-end">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-xs margin-xs bg-olive radius">2</view>
</view>
<view class="flex justify-center">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-xs margin-xs bg-olive radius">2</view>
</view>
<view class="flex justify-between">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-xs margin-xs bg-olive radius">2</view>
</view>
<view class="flex justify-around">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-xs margin-xs bg-olive radius">2</view>
</view>
```

#### 垂直对齐方式

```html
<view class="flex align-start">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-sm margin-xs bg-olive radius">2</view>
</view>
<view class="flex align-end">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-sm margin-xs bg-olive radius">2</view>
</view>
<view class="flex align-center">
  <view class="basis-xs padding-xs margin-xs bg-red radius">1</view>
  <view class="basis-xs padding-sm margin-xs bg-olive radius">2</view>
</view>
```

### Grid布局

#### 4列

```html
<view class="grid padding-sm col-4">
  <view class="padding-sm radius text-center" wx:for="{{12}}">
    <view class="padding-sm {{index%2==0?'bg-red':'bg-olive'}} radius">
      <view class="cuIcon-my"></view>
      <view class="margin-top">User</view>
    </view>
  </view>
</view>
```

#### 等高

```html
<view class="grid padding-sm col-4 grid-square">
  <view class="padding-sm radius text-center" wx:for="{{12}}">
    <view class="padding-sm {{index%2==0?'bg-red':'bg-olive'}} radius">
      <view class="cuIcon-my"></view>
      <view class="margin-top">User</view>
    </view>
  </view>
</view>
```

### 辅助布局

外边距```margin-{size}```

内边距```padding-{size}```

水平方向外边距```margin-lr-{size}```

水平方向内边距```padding-lr-{size}```

垂直方向外边距```margin-tb-{size}```

垂直方向内边距```padding-tb-{size}```

上外边距```margin-top-{size}```

上内边距```padding-top-{size}```

右外边距```margin-right-{size}```

右内边距```padding-right-{size}```

下外边距```margin-right-{size}```

下内边距```padding-right-{size}```

左外边距```margin-left-{size}```

左内边距```pading-left-{size}```

## 背景

### 深色

```html
<view class="padding grid col-3">
  <view class="padding-sm">
    <view class="padding-sm bg-red text-center radius shadow">
      <view>红色</view>
      <view class="margin-top text-Abc">red</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-orange text-center radius shadow">
      <view>桔橙</view>
      <view class="margin-top text-Abc">orange</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-yellow text-center radius shadow">
      <view>明黄</view>
      <view class="margin-top text-Abc">yellow</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-olive text-center radius shadow">
      <view>橄榄</view>
      <view class="margin-top text-Abc">olive</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-green text-center radius shadow">
      <view>森绿</view>
      <view class="margin-top text-Abc">green</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-cyan text-center radius shadow">
      <view>天青</view>
      <view class="margin-top text-Abc">cyan</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-blue text-center radius shadow">
      <view>海蓝</view>
      <view class="margin-top text-Abc">blue</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-purple text-center radius shadow">
      <view>姹紫</view>
      <view class="margin-top text-Abc">purple</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-mauve text-center radius shadow">
      <view>木槿</view>
      <view class="margin-top text-Abc">mauve</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-pink text-center radius shadow">
      <view>桃粉</view>
      <view class="margin-top text-Abc">pink</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-brown text-center radius shadow">
      <view>棕褐</view>
      <view class="margin-top text-Abc">brown</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-grey text-center radius shadow">
      <view>玄灰</view>
      <view class="margin-top text-Abc">grey</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-gray text-center radius shadow">
      <view>草灰</view>
      <view class="margin-top text-Abc">gray</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-black text-center radius shadow">
      <view>墨黑</view>
      <view class="margin-top text-Abc">black</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-white text-center radius shadow">
      <view>雅白</view>
      <view class="margin-top text-Abc">white</view>
    </view>
  </view>
</view>
```

### 浅色

```html
<view class="padding grid col-3">
  <view class="padding-sm">
    <view class="padding-sm bg-red text-center radius shadow light">
      <view>红色</view>
      <view class="margin-top text-Abc">red</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-orange text-center radius shadow light">
      <view>桔橙</view>
      <view class="margin-top text-Abc">orange</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-yellow text-center radius shadow light">
      <view>明黄</view>
      <view class="margin-top text-Abc">yellow</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-olive text-center radius shadow light">
      <view>橄榄</view>
      <view class="margin-top text-Abc">olive</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-green text-center radius shadow light">
      <view>森绿</view>
      <view class="margin-top text-Abc">green</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-cyan text-center radius shadow light">
      <view>天青</view>
      <view class="margin-top text-Abc">cyan</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-blue text-center radius shadow light">
      <view>海蓝</view>
      <view class="margin-top text-Abc">blue</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-purple text-center radius shadow light">
      <view>姹紫</view>
      <view class="margin-top text-Abc">purple</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-mauve text-center radius shadow light">
      <view>木槿</view>
      <view class="margin-top text-Abc">mauve</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-pink text-center radius shadow light">
      <view>桃粉</view>
      <view class="margin-top text-Abc">pink</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-brown text-center radius shadow light">
      <view>棕褐</view>
      <view class="margin-top text-Abc">brown</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-grey text-center radius shadow light">
      <view>玄灰</view>
      <view class="margin-top text-Abc">grey</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-gray text-center radius shadow light">
      <view>草灰</view>
      <view class="margin-top text-Abc">gray</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-black text-center radius shadow light">
      <view>墨黑</view>
      <view class="margin-top text-Abc">black</view>
    </view>
  </view>
  <view class="padding-sm">
    <view class="padding-sm bg-white text-center radius shadow light">
      <view>雅白</view>
      <view class="margin-top text-Abc">white</view>
    </view>
  </view>
</view>
```

### 渐变

```html
<view class="padding grid col-2">  <view class="padding-sm">    <view class="padding-sm bg-gradual-red">      <view>魅红</view>      <view class="margin-top text-Abc">bg-gradual-red</view>    </view>  </view>  <view class="padding-sm">    <view class="padding-sm bg-gradual-orange">      <view>鎏金</view>      <view class="margin-top text-Abc">bg-gradual-orange</view>    </view>  </view>  <view class="padding-sm">    <view class="padding-sm bg-gradual-green">      <view>翠绿</view>      <view class="margin-top text-Abc">bg-gradual-green</view>    </view>  </view><view class="padding-sm">    <view class="padding-sm bg-gradual-blue">      <view>靛青</view>      <view class="margin-top text-Abc">bg-gradual-blue</view>    </view>  </view>  <view class="padding-sm">    <view class="padding-sm bg-gradual-purple">      <view>惑紫</view>      <view class="margin-top text-Abc">bg-gradual-purple</view>    </view>  </view>  <view class="padding-sm">    <view class="padding-sm bg-gradual-pink">      <view>霞彩</view>      <view class="margin-top text-Abc">bg-gradual-pink</view>    </view>  </view></view>
```

#### 图片背景

```html
<view class="bg-img bg-mask flex align-center" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/css-picture/3.png?sign=0f2404adfc01ea2a7ab37ce842346853&t=1620902006)">  <text class="text-lg text-white padding-lg">Mr.Yao</text></view>
```

### 透明背景

```html
<view class="bg-img padding-bottom-xl" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/css-picture/3.png?sign=0f2404adfc01ea2a7ab37ce842346853&t=1620902006)">	<view class="bg-shadeTop padding padding-bottom-xl">上面开始</view></view><view class="bg-img padding-top-xl" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/css-picture/3.png?sign=0f2404adfc01ea2a7ab37ce842346853&t=1620902006)">	<view class="bg-shadeBottom padding padding-">下面开始</view></view>
```

## 文字

### 文字大小

```html
<view class="flex align-center flex-wrap">  <view class="basis-lg text-xsl">60:Mr.Yao</view>  <view class="basis-lg text-sl">40:Mr.Yao</view>  <view class="basis-lg text-xxl">22:Mr.Yao</view>  <view class="basis-lg text-xl">18:Mr.Yao</view>  <view class="basis-lg text-lg">16:Mr.Yao</view>  <viwe class="basis-lg text-df">14:Mr.Yao</viwe>  <view class="basis-lg text-sm">12:Mr.Yao</view>  <view class="basis-lg text-xs">10:Mr.Yao</view></view>
```

### 文字颜色

```html
<view class="flex align-center flex-wrap">  <view class="basis-lg text-xsl text-red">60:Mr.Yao</view>  <view class="basis-lg text-sl text-orange">40:Mr.Yao</view>  <view class="basis-lg text-xxl text-yellow">22:Mr.Yao</view>  <view class="basis-lg text-xl text-olive">18:Mr.Yao</view>  <view class="basis-lg text-lg text-green">16:Mr.Yao</view>  <viwe class="basis-lg text-df text-cyan">14:Mr.Yao</viwe>  <view class="basis-lg text-sm text-pink">12:Mr.Yao</view>  <view class="basis-lg text-xs text-mauve">10:Mr.Yao</view></view>
```

### 文字阴影

```html
<view class="flex align-center flex-wrap">  <view class="basis-lg text-xsl text-red text-shadow">60:Mr.Yao</view>  <view class="basis-lg text-sl text-orange text-shadow">40:Mr.Yao</view>  <view class="basis-lg text-xxl text-yellow text-shadow">22:Mr.Yao</view>  <view class="basis-lg text-xl text-olive text-shadow">18:Mr.Yao</view>  <view class="basis-lg text-lg text-green text-shadow">16:Mr.Yao</view>  <viwe class="basis-lg text-df text-cyan text-shadow">14:Mr.Yao</viwe>  <view class="basis-lg text-sm text-pink text-shadow">12:Mr.Yao</view>  <view class="basis-lg text-xs text-mauve text-shadow">10:Mr.Yao</view></view>
```

### 文字截断

```html
<view class="flex align-center flex-wrap">  <view class="basis-lg text-xsl text-red text-shadow text-cut">60:Mr.Yao is a Student</view>  <view class="basis-lg text-sl text-orange text-shadow text-cut">40:Mr.Yao</view>  <view class="basis-lg text-xxl text-yellow text-shadow text-cut">22:Mr.Yao</view>  <view class="basis-lg text-xl text-olive text-shadow text-cut">18:Mr.Yao</view>  <view class="basis-lg text-lg text-green text-shadow text-cut">16:Mr.Yao</view>  <viwe class="basis-lg text-df text-cyan text-shadow text-cut">14:Mr.Yao</viwe>  <view class="basis-lg text-sm text-pink text-shadow text-cut">12:Mr.Yao</view>  <view class="basis-lg text-xs text-mauve text-shadow text-cut">10:Mr.Yao</view></view>
```

### 文字对齐

```html
<view class="flex align-center flex-wrap">  <view class="basis-lg text-xl text-red text-shadow text-right">Mr.Yao</view>  <view class="basis-lg text-xl text-orange text-shadow text-center">Mr.Yao</view>  <view class="basis-lg text-xl text-yellow text-shadow text-left">Mr.Yao</view></view>
```

### 特殊文字

```html
<view class="flex align-center flex-wrap">  <view class="basis-lg text-xl text-red text-shadow text-price">80</view>  <view class="basis-lg text-xl text-orange text-shadow text-abc">Mr.Yao</view>  <view class="basis-lg text-xl text-yellow text-shadow text-Abc">Mr.Yao</view>  <view class="basis-lg text-xl text-yellow text-shadow text-ABC">Mr.Yao</view></view>
```

## 图标

```html
<view class="margin padding text-xsl">  <text class="cuIcon-roundcheckfill text-green"></text></view>
```

## 按钮

### 按钮形状

```html
<view class="margin padding bg-white flex flex-wrap justify-between">  <button class="cu-btn">默认</button>  <button class="cu-btn radius">圆角</button>  <button class="cu-btn icon">    <text class="cuIcon-emojifill"></text>  </button></view> 
```

### 按钮尺寸

```html
<view class="margin padding bg-white flex flex-wrap justify-between">  <button class="cu-btn sm">小</button>  <button class="cu-btn radius">中</button>  <button class="cu-btn icon lg">    <text class="cuIcon-emojifill"></text>  </button></view>
```

### 按钮颜色

```html
<view class="margin padding bg-white flex flex-wrap justify-between">  <button class="cu-btn sm bg-red">小</button>  <button class="cu-btn radius bg-olive">中</button>  <button class="cu-btn icon lg">    <text class="cuIcon-emojifill"></text>  </button></view> 
```

### 镂空按钮

```html
<view class="margin padding bg-white flex flex-wrap justify-between">  <button class="cu-btn sm lines-red">小</button>  <button class="cu-btn radius line-olive">中</button>  <button class="cu-btn icon lg">    <text class="cuIcon-emojifill"></text>  </button></view>
```

### 块状按钮

```html
<view class="margin padding bg-white flex flex-direction">  <button class="cu-btn lg">默认</button>  <button class="cu-btn radius lg margin-top-sm">圆角</button></view> <view class="margin padding">  <button class="cu-btn block bg-red">默认</button></view>
```

### 无效状态

```html
<view class="flex flex-wrap margin padding bg-white">  <button class="cu-btn">默认</button>  <button class="cu-btn" disabled>默认</button></view>
```

### 按钮加图标

```html
<view class="flex flex-wrap margin padding bg-white">  <button class="cu-btn"><text class="cuIcon-check"></text>默认</button>  <button class="cu-btn margin-left" disabled>默认</button></view>
```

## 标签

###  标签形状

```html
<view class="flex flex-wrap margin padding bg-white">  <view class="cu-tag">默认</view>  <view class="cu-tag round">圆形</view>  <view class="cu-tag radius">圆角</view></view>
```

### 标签尺寸

```html
<view class="flex flex-wrap margin padding bg-white">  <view class="cu-tag">默认</view>  <view class="cu-tag round sm">圆形</view>  <view class="cu-tag radius sm">圆角</view></view>
```

### 标签颜色

```html
<view class="flex flex-wrap margin padding bg-white">  <view class="cu-tag bg-red">默认</view>  <view class="cu-tag round sm bg-red light">圆形</view>  <view class="cu-tag radius sm">圆角</view></view>
```

### 镂空标签

```html
<view class="flex flex-wrap margin padding bg-white">  <view class="cu-tag line-red">默认</view>  <view class="cu-tag round sm bg-red light">圆形</view>  <view class="cu-tag radius sm">圆角</view></view>
```

### 胶囊样式

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-capsule">    <view class="cu-tag bg-red">      <text class="cuIcon-likefill"></text>    </view>    <view class="cu-tag line-red">12</view>  </view>  <view class="cu-capsule round">    <view class="cu-tag bg-red">      <text class="cuIcon-likefill"></text>    </view>    <view class="cu-tag line-red">12</view>  </view>  <view class="cu-capsule radius">    <view class="cu-tag bg-red sm">      <text class="cuIcon-likefill"></text>    </view>    <view class="cu-tag line-red sm">12</view>  </view>  <view class="cu-capsule round">    <view class="cu-tag bg-red">      <text>说明</text>    </view>    <view class="cu-tag line-red">12</view>  </view></view>
```

### 数字化标签

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-avatar xl radius">    <view class="cu-tag badge">123</view>    <text class="cuIcon-like"></text>  </view>  <view class='cu-avatar xl radius'>    <view class='cu-tag badge'>99</view>    <text class='cuIcon-people'></text>  </view>  <view class='cu-avatar xl radius'>    港    <view class="cu-tag badge">99+</view>  </view>  <view class='cu-avatar xl radius'>    <view class='cu-tag badge'>99+</view>  </view></view>
```

## 头像

### 头像形状

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-avatar xl" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/newsImages/1619078414640.png?sign=d2345c0a70b3879855ec33b5acdcef3c&t=1620905441)">    <view class="cu-tag badge">99+</view>  </view>  <view class="cu-avatar xl round" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/newsImages/1619078414640.png?sign=d2345c0a70b3879855ec33b5acdcef3c&t=1620905441)">    <view class="cu-tag badge">99+</view>  </view>  <view class="cu-avatar xl radius" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/newsImages/1619078414640.png?sign=d2345c0a70b3879855ec33b5acdcef3c&t=1620905441)">    <view class="cu-tag badge">99+</view>  </view></view>
```

### 头像尺寸

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-avatar sm" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/newsImages/1619078414640.png?sign=d2345c0a70b3879855ec33b5acdcef3c&t=1620905441)">    <view class="cu-tag badge">99+</view>  </view>  <view class="cu-avatar" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/newsImages/1619078414640.png?sign=d2345c0a70b3879855ec33b5acdcef3c&t=1620905441)">    <view class="cu-tag badge">99+</view>  </view>  <view class="cu-avatar lg" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/newsImages/1619078414640.png?sign=d2345c0a70b3879855ec33b5acdcef3c&t=1620905441)">    <view class="cu-tag badge">99+</view>  </view>  <view class="cu-avatar xl" style="background-image: url(https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/newsImages/1619078414640.png?sign=d2345c0a70b3879855ec33b5acdcef3c&t=1620905441)">    <view class="cu-tag badge">99+</view>  </view></view>
```

### 内嵌文字

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-avatar sm round">    <text class="avatar-text">Mr.Yao</text>  </view>  <view class="cu-avatar round">    <text class="avatar-text">Mr.Yao</text>  </view>  <view class="cu-avatar lg round">    <text class="avatar-text">Mr.Yao</text>  </view>  <view class="cu-avatar xl round">    <text class="avatar-text">Mr.Yao</text>  </view></view>
```

### 头像颜色

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-avatar sm round bg-red">    <text class="avatar-text">Mr.Yao</text>  </view>  <view class="cu-avatar round bg-olive">    <text class="avatar-text">Mr.Yao</text>  </view>  <view class="cu-avatar lg round bg-mauve">    <text class="avatar-text">Mr.Yao</text>  </view>  <view class="cu-avatar xl round bg-green">    <text class="avatar-text">Mr.Yao</text>  </view></view>
```

### 头像组

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-avatar-group">    <view class="cu-avatar sm round bg-red">      <text class="avatar-text">Mr.Yao</text>    </view>    <view class="cu-avatar round bg-olive">      <text class="avatar-text">Mr.Yao</text>    </view>    <view class="cu-avatar lg round bg-mauve">      <text class="avatar-text">Mr.Yao</text>    </view>    <view class="cu-avatar xl round bg-green">      <text class="avatar-text">Mr.Yao</text>    </view>  </view></view>
```

### 头像标签

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-avatar sm round bg-red">    <text class="avatar-text">Mr.Yao</text>    <view class="cu-tag badge sm">99+</view>  </view>  <view class="cu-avatar round bg-olive">    <text class="avatar-text">Mr.Yao</text>    <view class="cu-tag badge sm">99+</view>  </view>  <view class="cu-avatar lg round bg-mauve">    <text class="avatar-text">Mr.Yao</text>    <view class="cu-tag badge sm">99+</view>  </view>  <view class="cu-avatar xl round bg-green">    <text class="avatar-text">Mr.Yao</text>    <view class="cu-tag badge sm">99+</view>  </view></view>
```

## 进度条

### 进度条形状

```html 
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-progress">    <view class="bg-red" style="width:80%">80%</view>  </view>  <view class="cu-progress round margin-top-xs">    <view class="bg-red" style="width:80%">80%</view>  </view>  <view class="cu-progress radius margin-top-xs">    <view class="bg-red" style="width:80%">80%</view>  </view></view>
```

### 进度条尺寸

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-progress">    <view class="bg-red" style="width:80%">80%</view>  </view>  <view class="cu-progress round margin-top-xs sm">    <view class="bg-red" style="width:80%">80%</view>  </view>  <view class="cu-progress radius margin-top-xs xs">    <view class="bg-red" style="width:80%">80%</view>  </view></view>
```

### 进度条颜色

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-progress">    <view class="bg-red" style="width:80%">80%</view>  </view>  <view class="cu-progress round margin-top-xs">    <view class="bg-olive" style="width:80%">80%</view>  </view>  <view class="cu-progress radius margin-top-xs">    <view class="bg-yellow" style="width:80%">80%</view>  </view></view>
```

### 进度条条纹

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-progress striped">    <view class="bg-red" style="width:80%">80%</view>  </view>  <view class="cu-progress round margin-top-xs striped">    <view class="bg-olive" style="width:80%">80%</view>  </view>  <view class="cu-progress radius margin-top-xs striped">    <view class="bg-yellow" style="width:80%">80%</view>  </view></view>
```

### 进度条比例

```html
<view class="flex flex-wrap margin padding bg-white justify-between">  <view class="cu-progress striped">    <view class="bg-red" style="width:20%">20%</view>    <view class="bg-olive" style="width:30%">30%</view>    <view class="bg-yellow" style="width:50%">50%</view>  </view></view>
```

## 边框阴影

### 边框

```html
<view class="padding text-center bg-white">  <view class="padding solids-top margin-xs">Mr.Yao</view>  <view class="padding solids-right margin-xs">Mr.Yao</view>  <view class="padding solids-bottom margin-xs">Mr.Yao</view>  <view class="padding solids-left margin-xs">Mr.Yao</view></view>
```

### 阴影

```html
<view class="padding text-center">  <view class="padding-xl radius shadow bg-white">默认阴影</view>  <view class="padding-xl radius shadow bg-blue margin-top">根据背景颜色而改变的阴影</view>  <view class="padding-xl radius shadow shadow-lg bg-white margin-top">长阴影</view>  <view class="padding-xl radius shadow shadow-lg bg-blue margin-top">长阴影</view>  <view class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</view>  <view class="padding-xl radius shadow-blur bg-red margin-top bg-img"    style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">    <view>根据背景图而改变的阴影</view>  </view></view>
```

## 加载

```html
<view class="padding text-center">  <view class="cu-load bg-blue loading"></view>  <view class="cu-load bg-red over"></view></view>
```

### 弹框加载

```html
<view class="padding text-center">  <view class="cu-load load-modal">    <text class="cuIcon-time"></text>    <text>加载中...</text>  </view></view>
```

### 进度条加载

```html
<view class='load-progress {{loadProgress!=0?"show":"hide"}}' style="top:{{CustomBar}}px;">  <view class='load-progress-bar bg-green' style="transform: translate3d(-{{100-loadProgress}}%, 0px, 0px);"></view>  <view class='load-progress-spinner text-green'></view></view><button bindtap="click">点我</button>
```

