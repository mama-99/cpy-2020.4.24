<template>
  <div class="home" v-if="data">
	  <!-- 轮播 -->
	<van-swipe :autoplay="3000">
	  <van-swipe-item v-for="(image, index) in data.homeBannerVOS" :key="index">
	    <div class="banner" v-html="image.bannerDetail"></div>
	  </van-swipe-item>
	</van-swipe>
	<!-- 小图标 -->
	<div class="flex">
		<div class="home_nav" v-for="(item,index) in data.homeFloorVOS[0].homeFloorPosElementVOS" :key="index">
			<img :src="item.picSrc" alt="">
		</div>
	</div>
	
	<div v-for="(item,index) in data.homeFloorVOS" v-if="item.name != null" :key="index">
		<!-- 分割线 -->
		<div class="line">
			<van-divider
			  :style="{ color: '#303030', borderColor: '#fff', padding: '0 16px' }"
			>
			  {{item.name}}
			</van-divider>
		</div>
		<!-- banner图 -->
		<div v-for="(img,index1) in item.homeFloorPosElementVOS" :key="index" v-if="index1 == 0&&img.stock == null">
			<img :src="img.picSrc" :style="{width:'100%'}" alt="">
		</div>
		<!-- 商品列表 -->
		<div class="flex">
			<div v-for="(img,index2) in item.homeFloorPosElementVOS" v-if="index2!=0&&index!=3" :style="{width:'50%',border:'1px solid #e9e9e9'}">
				<img :src="img.picSrc" alt="" :style="{width:'98%'}" v-if="index == 1">
				<Good v-else :good="img"></Good>
			</div>
			<div v-for="(img,index2) in item.homeFloorPosElementVOS" v-if="index == 3" :style="{width:'50%',border:'1px solid #e9e9e9'}">
				<img :src="img.picSrc" alt="" :style="{width:'98%'}" v-if="index == 1">
				<Good v-else :good="img"></Good>
			</div>
			<div v-if="item.homeFloorLinkMetaVOS.length>0" :style="{width:'100%',height:'40px',lineHeight:'40px',fontSize:'0.24rem',textAlign:'center',borderBottom:'1px solid #eee'}">
				{{item.homeFloorLinkMetaVOS[0].name}} >
			</div>
		</div>
	</div>
	
	<div class="flex">
		<div class="round" v-for="(item,index) in data.homeFloorVOS[4].homeFloorPosElementVOS">
			{{item.name}}
		</div>
	</div>
	
	<van-collapse v-model="activeName" accordion>
	  <van-collapse-item title="热门链接" name="1">
		  热门链接
	  </van-collapse-item>
	  <van-collapse-item title="在线购买" name="2">在线购买</van-collapse-item>
	  <van-collapse-item title="服务支持" name="3">服务支持</van-collapse-item>
	  <van-collapse-item title="vivo社区" name="4">服务支持</van-collapse-item>
	  <van-collapse-item title="关于vivo" name="5">服务支持</van-collapse-item>
	</van-collapse>
	
	<p class="foot p1"> 
		<a href="#">
			<van-icon name="chat-o" size="0.4rem"/>  在线客服
		</a>
	</p>
	<p class="foot">
		<a href="#">
			400-678-9688
		</a><br>
		<span>全国客户服务热线7*24小时</span>
	</p>
	<p class="foot">
		<a href="#">
			400-679-9688
		</a><br>
		<span>NEX 专属服务热线7*24小时</span>
	</p>
	
	
	
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Good from '@/components/Good.vue'
import homeData from '../data'

export default {
  name: 'Home',
  components: {
    // HelloWorld
	Good
  },
  data(){
	  return{
		  data:null,
		  activeName: '1'
	  }
  },
  created(){
	  //console.log(homeData)
	  this.data = homeData.data.homeMetaVO;
	  console.log(this.data)
  }
}
</script>


<style lang="less" scoped>
	.home{
		.flex{
			flex-wrap: wrap;
			.home_nav{
				width: 25%;
				img{
					width: 60%;
					margin: 0.1rem;
				}
			}
			.round{
				width: 1.7rem;
				height: 0.5rem;
				padding: 0 0.05rem;
				line-height: 0.5rem;
				margin: 0.2rem 0.05rem;
				font-size: 0.26rem;
				border-radius: 0.25rem;
				border: 1px solid #ccc;
			}
		}
		.line{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 50px;
			background-color: #eee;
		}
		.foot{
			height: 50px;
			padding-left: 0.5rem;
			text-align: left;
			font-size: 0.38rem;
			background-color: #eee;
			&.p1{
				line-height: 50px;
			}
			a{
				font-size: 0.3rem;
				line-height: 20px;
			}
			span{
				font-size: 0.2rem;
			}
		}
	}
</style>