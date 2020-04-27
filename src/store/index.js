import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goods:[],
	  form:[],
  },
  getters:{
	  getGoods(state){
		  return state.goods
	  },
	  getForm(state){
		  return state.form
	  }
  },
  mutations: {
	  addForm(state,form){
		  state.form.push(form)
	  },
	  addGoods(state,good){
	  		  let a = true;
	  		  state.goods.forEach(item=>{
	  			  if(good.id == item.id){
	  				  a = false;
	  				  item.num += good.num;
	  			  }
	  		  });
	  		  if(a){
	  			  state.goods.push(good)
	  		  }
	  	  },
	  removeGoods(state,goodid){
		  let index = -1;
		  state.goods.forEach((item,index)=>{
			  if(item.id == goodid){
				  index = index;
			  }
		  })
		  state.goods.splice(index,1)
	  },
	  addGoodsNum(state,goodid){
		  state.goods.forEach((item,index)=>{
			  if(item.id == goodid){
				  item.num = item.num*1 + 1
			  }
		  })
	  },
	  removeGoodsNum(state,goodid){
		  state.goods.forEach((item,index)=>{
			  if(item.id == goodid){
				  item.num = item.num*1 - 1
			  }
		  })
	  }
  },
  actions: {
  },
  modules: {
  }
})
