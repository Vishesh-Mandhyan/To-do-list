const Task = require("../model/task");
const asyncWrapper=require('../middleware/async')
const getAllTasks = asyncWrapper( async (req, res) => {
  
    const tasks = await Task.find({});
    res.json({ tasks });
  
  
});
const createTasks = asyncWrapper( async (req, res) => {
 
    const task = await Task.create(req.body);
    res.json({ task });
  
});
const getTask = asyncWrapper(async (req, res) => {
 
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return res.json({ err: `id not found` });
    } 
     res.json({ task });
    
  
});
const updateTasks = asyncWrapper(async (req, res) => {
 
    const{id}=req.params
    const task = await Task.findOneAndUpdate({_id:id},req.body,{
      new:true,
      runValidators:true
    })
    if (!task) {
      res.json({err:"id not found"})
    }
    res.json({task})
  
});
const deleteTasks = asyncWrapper(async (req, res) => {
 
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res.json({ err: `id not found` });
    } 
     res.json({ success:"id deleted" });
    
  
});



module.exports = {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTasks,
  getTask,
};
