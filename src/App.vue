<template>
  <div id="app">
	<van-sticky>
	   <div id="nav" class="flex nav_flex">
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
				  <van-icon name="contact" size="0.4rem" color="#fff"/>
		  </router-link>
		</div>
	</van-sticky>
    <router-view/>
  </div>
</template>

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
</style>
