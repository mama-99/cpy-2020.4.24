<template>
	<div class="good">
		<img :src="good.picSrc" alt="">
		<h4 class="van-ellipsis">{{good.name}}</h4>
		<p class="van-ellipsis">{{good.spec}}</p>
		<p class="price">￥{{good.salePrice}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:["good"]
	}
</script>

<style lang="less" scoped>
	.good{
		padding: 0.3rem;
		img{
			width: 60%;
		}
		h4{
			font-size: 0.3rem;
		}
		p{
			font-size: 0.2rem;
			margin-top: 0.2rem;
			&.price{
				font-size: 0.3rem;
				color: #f81200;
				margin-top: 0.6rem;
			}
		}
	}
</style>
