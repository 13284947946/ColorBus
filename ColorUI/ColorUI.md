# ColorUI文档

## 布局

### Flex布局

```html
<view class="padding bg-white">
	<view class="flex flex-wrap">
		<view class="basis-xs bg-grey margin-xs padding-sm radius">xs(20%)</view>
		<view class="basis-df"></view>
		<view class="basis-sm bg-grey margin-xs padding-sm radius">sm(40%)</view>
		<view class="basis-df"></view>
		<view class="basis-df bg-grey margin-xs padding-sm radius">sub(50%)</view>
		<view class="basis-lg bg-grey margin-xs padding-sm radius">lg(60%)</view>
		<view class="basis-xl bg-grey margin-xs padding-sm radius">xl(80%)</view>
	</view>
</view>

<view class="padding bg-white">
	<view class="flex">
		<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
		<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
	</view>
	<view class="flex  p-xs margin-bottom-sm mb-sm">
		<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
		<view class="flex-twice bg-grey padding-sm margin-xs radius">2</view>
	</view>
	<view class="flex  p-xs margin-bottom-sm mb-sm">
		<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
		<view class="flex-twice bg-grey padding-sm margin-xs radius">2</view>
		<view class="flex-treble bg-grey padding-sm margin-xs radius">3</view>
	</view>
</view>

<view class="bg-white">
	<view class="flex solid-bottom padding justify-start">
		<view class="bg-grey padding-sm margin-xs radius">start</view>
		<view class="bg-grey padding-sm margin-xs radius">start</view>
	</view>
	<view class="flex solid-bottom padding justify-end">
		<view class="bg-grey padding-sm margin-xs radius">end</view>
		<view class="bg-grey padding-sm margin-xs radius">end</view>
	</view>
	<view class="flex solid-bottom padding justify-center">
		<view class="bg-grey padding-sm margin-xs radius">center</view>
		<view class="bg-grey padding-sm margin-xs radius">center</view>
	</view>
	<view class="flex solid-bottom padding justify-between">
		<view class="bg-grey padding-sm margin-xs radius">between</view>
		<view class="bg-grey padding-sm margin-xs radius">between</view>
	</view>
	<view class="flex solid-bottom padding justify-around">
		<view class="bg-grey padding-sm margin-xs radius">around</view>
		<view class="bg-grey padding-sm margin-xs radius">around</view>
	</view>
</view>

<view class="bg-white">
	<view class="flex solid-bottom padding align-start">
		<view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
		<view class="bg-grey padding-sm margin-xs radius">start</view>
	</view>
	<view class="flex solid-bottom padding align-end">
		<view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
		<view class="bg-grey padding-sm margin-xs radius">end</view>
	</view>
	<view class="flex solid-bottom padding align-center">
		<view class="bg-grey padding-lg margin-xs radius">ColorUi</view>
		<view class="bg-grey padding-sm margin-xs radius">center</view>
	</view>
</view>
```

## 文字

```html

<view class="bg-white padding-lr">
  <view class="solids-bottom padding-xs flex align-center">
    <view class="padding">60</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-xsl padding">
        <text class=" cuIcon-roundcheckfill text-green"></text>
      </view>
      <view class="padding">用于图标、数字等特大显示</view>
    </view>
  </view>
  <view class="solids-bottom padding-xs flex align-center">
    <view class="padding">40</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-sl padding">
        <text class=" cuIcon-roundcheckfill text-green"></text>
      </view>
      <view class="padding">用于图标、数字等较大显示</view>
    </view>
  </view>
  <view class="solids-bottom padding-xs flex align-center">
    <view class="padding">22</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-xxl padding">
        <text class="text-price text-red">80.00</text>
      </view>
      <view class="padding">用于金额数字等信息</view>
    </view>
  </view>
  <view class="solids-bottom padding-xs flex align-center">
    <view class="padding">18</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-xl padding">
        <text class="text-black text-bold">您的订单已提交成功！</text>
      </view>
      <view class="padding">页面大标题，用于结果页等单一信息页</view>
    </view>
  </view>
  <view class="solids-bottom padding-xs flex align-center">
    <view class="padding">16</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-lg padding">
        <text class="text-black">ColorUI组件库</text>
      </view>
      <view class="padding">页面小标题，首要层级显示内容</view>
    </view>
  </view>
  <view class="solids-bottom padding-xs flex align-center">
    <view class="padding">14</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-df padding">专注视觉的小程序组件库</view>
      <view class="padding">页面默认字号，用于摘要或阅读文本</view>
    </view>
  </view>
  <view class="solids-bottom padding-xs flex align-center">
    <view class="padding">12</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-sm padding">
        <text class="text-grey">衬衫的价格是9磅15便士</text>
      </view>
      <view class="padding">页面辅助信息，次级内容等</view>
    </view>
  </view>
  <view class="padding-xs flex align-center">
    <view class="padding">10</view>
    <view class="flex-sub text-center">
      <view class="solid-bottom text-xs padding">
        <text class="text-gray">我于杀戮之中绽放 亦如黎明中的花朵</text>
      </view>
      <view class="padding">说明文本，标签文字等关注度低的文字</view>
    </view>
  </view>
</view>
```

## 