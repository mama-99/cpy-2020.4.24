import axios from 'axios'

import './mockdata.js'

let getClassAPI = (data)=>{
	return axios.post("http://vivo.com/class",data)
}

let getDetailAPI = (data)=>{
	return axios.post("http://vivo.com/detail",{
		params:{
			id:data.id
		}
	})
}

let loginAPI = (data)=>{
	return axios.post("http://vivo.com/login",data)
}

let registerAPI = (data)=>{
	return axios.post("http://vivo.com/register",data)
}

export{
	getClassAPI,
	getDetailAPI,
	loginAPI,
	registerAPI
}