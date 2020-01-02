const data=require("./src/mock/data.json");
module.exports={
	lintOnSave:false,
	devServer:{
		open:true,
		before(app){
			app.get("/getlist",(req,res)=>{
				res.send({
					data:data
				})
			})
		}
	}
}