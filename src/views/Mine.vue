<template>
	<div class="mine">
		<div class="top">
			<div class="head">
				<van-icon name="contact" color="#fff" size="0.8rem"/>
			</div>
			<router-link to="/login" v-if="!$jsCookie.get('username')" :style="{color:'#fff'}">登录/注册</router-link>
			<router-link to="/login" v-else :style="{color:'#fff'}">{{$jsCookie.get('username')}}</router-link>
		</div>
		<van-cell title="我的订单" @click="$router.push('/goodform')" is-link value="全部订单"/>
		<div class="flex">
			<div @click="$router.push('/cart')">
				<van-icon name="bill-o" size="0.6rem"/>
				<p>待付款</p>
			</div>
			<div @click="$router.push('/goodform')">
				<van-icon name="logistics" size="0.6rem"/>
				<p>待收货</p>
			</div>
			<div>
				<van-icon name="exchange" size="0.6rem"/>
				<p>退换修</p>
			</div>
		</div>
		<div class="line"></div>
		<van-cell title="商城首页" icon="shop-o" @click="$router.push('/')" is-link/>
		<van-cell title="我的优惠" icon="coupon-o" is-link/>
		<div class="line"></div>
		<van-cell title="服务中心" icon="phone-o" is-link/>
		<van-cell title="vivo之家" icon="shop-o" is-link/>
		<div class="line"></div>
		<van-cell title="我的F码" icon="bill-o" is-link/>
		<van-cell title="礼物码兑换" icon="point-gift-o" is-link/>
		<div class="line"></div>
		<van-cell title="设置" icon="setting-o" is-link/>
		<div class="line"></div>
		<van-cell title="退出" icon="setting-o" @click="out" is-link/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Dialog } from 'vant';
	
	// 全局注册
	Vue.use(Dialog);
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			out(){
				Dialog.confirm({
				  title: '提示',
				  message: '确定要退出该账号？',
				}).then(() => {
				    this.$jsCookie.remove("username");
					this.$router.push('/login')
				}).catch(() => {
				    
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	.mine{
		.top{
			width: 100%;
			height: 2rem;
			display: flex;
			align-items: center;
			background-color: #444;
			background-size: auto 100%;
			.head{
				width: 1.2rem;
				height: 1.2rem;
				margin-left: 0.6rem;
				margin-right: 0.1rem;
				padding-top: 0.2rem;
				border-radius: 50%;
				background-color: #ccc;
			}
		}
		.flex{
			display: flex;
			justify-content: space-between;
			padding: 0.2rem 0.4rem 0.3rem;
			font-size: 0.24rem;
		}
		.line{
			width: 100%;
			height: 0.3rem;
			background-color: #f2f2f2;
		}
	}
</style>

