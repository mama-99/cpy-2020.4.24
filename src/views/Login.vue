<template>
	<div class="login">
		<div v-if="type==1">
			<img src="../assets/img/vivologo.png" :style="{width:'40%'}" alt="">
			<p class="title">账号登录</p>
			<p class="change" @click="type = 2">短信验证码登录</p>
			<br>
			<van-cell-group>
			  <van-field v-model="username" placeholder="请输入用户名/邮箱" label="账号"/>
			</van-cell-group>
			<van-cell-group :style="{paddingRight:'0.5rem'}">
			  <van-field v-model="pwd" placeholder="请输入密码" type="password" label="密码" right-icon="eye-o"/>
			</van-cell-group>
			<br>
			<van-button type="info" @click="login(type)" round block>登录</van-button>
			<br>
			<van-button type="info" plain round block @click="$router.push('/register')">注册vivo账号</van-button>
		</div>
		
		<div v-if="type==2">
			<img src="../assets/img/vivologo.png" :style="{width:'40%'}" alt="">
			<p class="title">短信验证码登录</p>
			<p class="change" @click="type = 1">账号登录</p>
			<br>
			<van-cell-group>
			  <van-field v-model="tel" placeholder="请输入手机号" label="+86"/>
			</van-cell-group>
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
			<van-button type="info" @click="login(type)" round block>登录</van-button>
			<br>
			<van-button type="info" plain round block @click="$router.push('/register')">注册vivo账号</van-button>
		</div>
		
		<van-divider>其他方式登录</van-divider>
		<div class="flex">
			<a href="#" @click="" class="thrid"><i class="wb"></i></a>
			<a href="#" @click="" :style="{backgroundColor:'blue'}" class="thrid"><i class="zfb"></i></a>
			<a href="#" @click="" :style="{backgroundColor:'green'}" class="thrid"><i class="wx"></i></a>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	import { Notify } from 'vant';
	
	Vue.use(Notify);
	Vue.use(Toast);
	export default{
		data(){
			return{
				type:1,
				username:"",
				pwd:"",
				tel:'',
				sms:''
			}
		},
		methods:{
			login(type){
				if(type == 1){
					this.$api.loginAPI({
						fmdo:'normal',
						dopost:'login',
						userid:this.username,
						pwd:this.password
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set('username',this.username,{ expires: 7 })
							var next = this.$route.query.next;
							if(next){
								this.$router.push(next)
							}else{
								this.$router.push('/')
							}
						}
					}).catch(err=>{
						console.log("登录失败",err)
					})
				}else if(type == 2){
					this.$api.loginAPI({
						fmdo:"tel",
						dopost:"login",
						telphone:this.tel,
						sms:this.sms
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set('username', '用户'+this.tel, { expires: 7 }) 
							var next = this.$route.query.next;
							if(next){
								this.$router.push(next)
							}else{
								this.$router.push('/')
							}
						}
					}).catch(err=>{
						console.log("登陆失败",err)
					})
				}
			},
			con(){
				if(this.tel.length>0){
					Toast('验证码已发送');
				}else{
					Notify('请输入手机号');
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.login{
		padding: 1.2rem 0.2rem;
		.title{
			font-size: 0.4rem;
			margin-top: 0.2rem;
		}
		.change{
			width: 100%;
			text-align: right;
			font-size: 0.26rem;
			color: dodgerblue;
			padding-right: 0.3rem;
			margin-top: 0.5rem;
		}
		.flex{
			display: flex;
			justify-content: center;
			.thrid{
				display: block;
				width: 0.6rem;
				height: 0.6rem;
				border-radius: 50%;
				background-color: red;
				margin: 0 0.2rem;
				i{
					display: block;
					width: 19px;
					height: 18px;
					margin: 0.1rem auto 0;
					background-image: url(../assets/img/icons_type.png);
					&.wb{
						background-position: -38px 0;
					}
					&.zfb{
						width: 23px;
						background-position: -57px 0;
					}
					&.wx{
						width: 23px;
						background-position: -84px 0;
					}
				}
				
			}
		}
	}
</style>
