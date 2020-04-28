<template>
	<div class="r2">
		<van-field
		  v-model="sms"
		  center
		  clearable
		  label="短信验证码"
		  placeholder="请输入短信验证码"
		>
		  <template #button>
		    <van-button size="small" @click="con" type="info">发送验证码</van-button>
		  </template>
		</van-field>
		<br>
		<van-cell-group :style="{paddingRight:'0.5rem'}">
		  <van-field placeholder="请输入密码" type="password" label="密码" right-icon="eye-o"/>
		</van-cell-group>
		<br>
		<van-button type="info" round @click="success" block>完成</van-button>
		<br>
		<van-button type="info" plain round block to="/register/r1">上一步</van-button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	import { Dialog } from 'vant';
	
	// 全局注册
	Vue.use(Dialog);
	Vue.use(Toast);
	export default{
		data(){
			return{
				sms:"",
			}
		},
		methods:{
			con(){
				this.$api.registerAPI({
					
				}).then(res=>{
					if(res.data.code==0){
						Toast('验证码已发送');
					}
					
				}).catch(err=>{
					console.log('登录失败',err)
				})
				
			},
			success(){
				Dialog.confirm({
				  title: '提示',
				  message: '注册成功，是否返回登录页面？',
				}).then(() => {
				    this.$router.push('/login')
				}).catch(() => {
				    
				});
			}
		}
	}
</script>

<style>
</style>
