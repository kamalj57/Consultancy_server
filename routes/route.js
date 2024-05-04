const express=require('express');
const router= express.Router();

const {addproduct,getproduct,addstaff,getstaff} = require('../controllers/controller');

router.post('/addproduct',addproduct)
router.get('/getproduct',getproduct)
router.post('/addstaff',addstaff)
router.get('/staffdetails',getstaff)



module.exports=router;