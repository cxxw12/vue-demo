import http from "../util/http"

let resquest = "/api"

// get请求
export default{
 	hello(params){
    	return http.get('/api/api/hello',params)
	},
}