import mock from 'mockjs'

mock.mock("http://vivo.com/class",function(){
		let data = [];
		for(let i = 0;i < (parseInt(Math.random()*10)+3);i++){
			let obj = {
						id:mock.Random.float(100,120).toFixed(0),
						picSrc:mock.Random.image('250x250'),
						name:mock.Random.ctitle(4,6),
						spec:mock.Random.ctitle(20),
						salePrice:mock.Random.float(60,120).toFixed(2)
					}
					data.push(obj)
		}
	return data
})

mock.mock("http://vivo.com/detail",function(){
	let a = 100
	let data = [{
		id:a,
		name: mock.Random.ctitle(6,12),
		spec:mock.Random.ctitle(40,60),
		salePrice:mock.Random.float(60,120).toFixed(2),
		img_url:mock.Random.image('250x250'),
		imgs:[],
	}]
	for(let i = 0;i < 5;i++){
		let obj = {
			id:a++,
			type:mock.Random.ctitle(5,10),
			picSrc:mock.Random.image('250x280'),
			price:mock.Random.float(60,120).toFixed(2)
		}
		data[0].imgs.push(obj)
	}
	return data
})

mock.mock("http://vivo.com/login",function(){
	let result ={
		"code":0,
		"result":"ok"
	}
	return result
})

export {mock}