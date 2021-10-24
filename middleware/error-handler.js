const errorHandler = (err,req,res,next)=>{
    return res.json({err})
}
module.exports=errorHandler