<template>
	<div class="good">
		<router-link :to="'/detail/'+(good.index || good.id)">
			<img :src="good.picSrc" alt="">
			<h4 class="van-ellipsis">{{good.name}}</h4>
			<p class="van-ellipsis">{{good.spec}}</p>
			<p class="price">￥{{good.salePrice}}</p>
		</router-link>
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
			color: #444;
		}
		p{
			font-size: 0.2rem;
			margin-top: 0.2rem;
			color: #555;
			&.price{
				font-size: 0.3rem;
				color: #f81200;
				margin-top: 0.6rem;
			}
		}
	}
</style>
