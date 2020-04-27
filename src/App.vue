<template>
  <div id="app">
	<van-sticky>
	   <div id="nav" class="flex nav_flex" v-show="$route.meta.show">
		  <!-- <router-link to="/">Home</router-link> |
		  <router-link to="/about">About</router-link> -->
		  <router-link to="/class">
			  <van-icon name="wap-nav" size="0.4rem" color="#fff"/>
		  </router-link>
		  <router-link to="/">
			  <img src="./assets/img/vivologo.png" :style="{height:'0.5rem',marginLeft:'1rem'}" alt="">
		  </router-link>
		  <router-link to="/search">
			  <van-icon name="search" size="0.4rem" color="#fff"/>
		  </router-link>
		  <router-link to="">
				  <van-icon name="contact" size="0.4rem" color="#fff" @click="show=true"/>
		  </router-link>
		</div>
	</van-sticky>
	
	<van-overlay :show="show" @click="show = false">
	  <div class="wrapper">
	    <router-link to="/cart" :style="{fontSize:'0.24rem'}">
			<van-icon name="cart-o" size="0.34rem"/> 购物车
		</router-link>
		<router-link to="/goodform" :style="{fontSize:'0.24rem'}">
			<van-icon name="label-o" size="0.34rem"/> 我的订单
		</router-link>
		<router-link to="/mine" :style="{fontSize:'0.24rem'}">
			<van-icon name="user-o" size="0.34rem"/> 账号中心
		</router-link>
	  </div>
	</van-overlay>
	
    <router-view/>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				show:false
			}
		}
	}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #000;
  a {
    font-weight: bold;
    color: #2c3e50;

  }
}
.nav_flex{
	justify-content: space-between;
	align-items: center;
}
.wrapper{
	position: absolute;
	top: 70px;
	right: 5px;
	width: 100px;
	height: 120px;
	padding: 0.2rem;
	border-radius: 0.3rem;
	line-height: 0.6rem;
	background-color: #fff;
	text-align: left;
	a{
		color: #999;
	}
}
.wrapper::after{
	position: absolute;
	top: -9px;
	left: 60px;
	content: "";
	border-bottom: 10px solid #fff;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
}
</style>
