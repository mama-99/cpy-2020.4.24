<template>
	<div class="searchlist">
		<van-sticky>
			<van-nav-bar left-arrow  @click-left="onClickLeft" @click-right="onClickRight">
				<input class="searchinput" v-model="value" placeholder="搜索商品名称" type="text" slot="title">
			  <template #right>
				<van-icon name="search" size="18" />
			  </template>
			</van-nav-bar>
			
			<van-dropdown-menu>
			  <van-dropdown-item v-model="value1" :options="option1" />
			  <van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
		</van-sticky>
		<br>
		<div v-for="item in datas" :style="{display:'flex',padding:'0 0.2rem'}" @click="$router.push('/detail/'+item.id)">
			<div :style="{width:'50%'}">
				<img :src="item.picSrc" alt="" :style="{width:'94%'}">
			</div>
			
			<div :style="{width:'50%',paddingTop:'0.6rem',paddingLeft:'0.2rem',textAlign:'left'}">
				<h1 :style="{fontSize:'0.32rem'}">{{item.name}}</h1>
				<p :style="{fontSize:'0.24rem'}">{{item.spec}}</p>
				<p :style="{color:'#f81200',marginTop:'0.3rem'}">￥{{item.salePrice}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				  value:"",
				  datas:[],
				  value1: 0,
				  value2: 'a',
				  option1: [
					{ text: '全部商品', value: 0 },
					{ text: '新款商品', value: 1 },
					{ text: '活动商品', value: 2 },
				  ],
				  option2: [
					{ text: '默认排序', value: 'a' },
					{ text: '好评排序', value: 'b' },
					{ text: '销量排序', value: 'c' },
				  ]
				 
			}
		},
		created(){
			this.$api.getClassAPI({
				
			}).then(res=>{
				this.datas = res.data
			}).catch(err=>{
				console.log("出错",err)
			})
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1);
			},
			onClickRight(){
				if(this.value.length>0){
					this.datas = null;
					this.$api.getClassAPI({
						
					}).then(res=>{
						this.datas = res.data
					}).catch(err=>{
						console.log("出错",err)
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.searchlist{
		.van-nav-bar{
			background-color: #f2f2f2;
		}
		.searchinput{
			width: 100%;
			height: 0.5rem;
			padding: 0 0.2rem;
			font-size: 0.3rem;
			border:none;
			outline: none;
		}
	}
</style>

