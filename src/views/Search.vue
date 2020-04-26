<template>
	<div class="search">
		<div class="flex">
			<router-link to="/">
				<van-icon name="cross" color="#777" size="0.5rem"/>
			</router-link>
			<van-search v-model="value" placeholder="请输入搜索商品名称" focus/>
			<van-icon name="search" @click="goList" color="#777" size="0.5rem"/>
		</div>
		<p>X30系列</p>
		<p>Z5系列</p>
		<p>IQOO Pro</p>
		<p>手机配件</p>
		<p>服务网点查询</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:"",
			}
		},
		methods:{
			goList(){
				if(this.value.length>0){
					this.$router.push("/searchlist")
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.search{
		.flex{
			justify-content: space-between;
			align-items: center;
			padding: 0.1rem 0.4rem;
			.van-search{
				flex-grow: 1;
			}
		}
		p{
			width: 100%;
			height: 1rem;
			padding-left: 1rem;
			font-size: 0.34rem;
			text-align: left;
			line-height: 1rem;
			color: #777;
		}
	}
</style>
