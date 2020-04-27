<template>
	<div class="goodform">
		<van-nav-bar title="我的订单">
		  <template #left>
		    <van-icon name="arrow-left" size="18" @click="$router.go(-1)"/>
		  </template>
		  <template #right>
		    <van-icon name="ellipsis" size="18" />
		  </template>
		</van-nav-bar>
		
		<div class="container">
			<div v-if="$store.getters.getForm.length < 1">
				<van-icon name="cart-o" size="2rem" />
				<h2>您还没有订单</h2>
				<br>
				<van-button round type="info" plain to="/">去逛逛</van-button>
			</div>
			
			
			<van-card v-for="(item,index) in $store.getters.getForm"
			  :num="item.num"
			  :price="item.price"
			  desc="描述信息"
			  :title="item.name"
			  :thumb="item.img"
			>
			  <template #tags>
			    <van-tag plain type="danger">标签</van-tag>
			    <van-tag plain type="danger">标签</van-tag>
			  </template>
			  <template #footer>
			    <van-button size="mini" type="warning" >查看物流</van-button>
			    <van-button size="mini" type="danger" >确认收货</van-button>
			  </template>
			</van-card>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Dialog } from 'vant';
	
	// 全局注册
	Vue.use(Dialog);
	export default{
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.goodform{
		.container{
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100%;
			padding: 1.2rem 0.2rem 0.2rem;
			background-color: #ccc;
		}
	}
</style>
