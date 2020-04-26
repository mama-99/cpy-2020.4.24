import axios from 'axios'

import './mockdata.js'

let getClassAPI = (data)=>{
	return axios.post("http://vivo.com/class",data)
}

let getDetailAPI = (data)=>{
	return axios.post("http://vivo.com/detail",data)
}

let loginAPI = (data)=>{
	return axios.post("http://vivo.com/login",data)
}

export{
	getClassAPI,
	getDetailAPI,
	loginAPI
}