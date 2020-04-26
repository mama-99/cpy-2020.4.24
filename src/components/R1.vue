<template>
	<div class="r1">
		<p class="p1">国家地区</p>
		<van-dropdown-menu>
		  <van-dropdown-item v-model="value1" :options="option1" />
		</van-dropdown-menu>
		<p class="text">账号注册成功后，国家/地区将不能被修改</p>
		<br>
		<van-cell-group>
		  <van-field v-model="tel" placeholder="请输入手机号" label="+86"/>
		</van-cell-group>
		<br>
		<van-button type="info" round block @click="goNext">下一步</van-button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Notify } from 'vant';
	
	Vue.use(Notify);
	export default{
		data(){
			return{
				tel:'',
				value1:0,
				 option1: [
					{ text: '中国', value: 0 },
					{ text: '中国台湾', value: 1 },
					{ text: '中国香港', value: 2 },
				  ],
			}
		},
		methods:{
			goNext(){
				if(this.tel.length>0){
					this.$router.push('/register/r2')
				}else{
					Notify('请输入手机号');
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.r1{
		.p1{
			width: 100%;
			text-align: left;
			font-size: 0.26rem;
		}
		.text{
			width: 100%;
			text-align: left;
			font-size: 0.24rem;
			color: #aaa;
		}
	}
</style>
