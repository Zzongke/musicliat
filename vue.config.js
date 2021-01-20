module.exports = {
	devServer:{
		host:"localhost",
		port:8080,
		https:false,
		open:true,
		proxy:{
			"/api":{
				target:"http://tingapi.ting.baidu.com",
				changeOrigin:true,
				pathRewrite:{
					"^/api":''
				}
			}
		}
	}
}