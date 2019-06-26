const router = require('koa-router')()
    //此文件将不同的路由处理导向不同的文件
router.get('/login', require('./login')); //登录处理
router.post('/regist', require('./regist')); //注册处理
router.get('/getfavours', require('./getfavours')); //获取我喜欢的列表
router.get('/getfoodinfo', require('./getfoodinfo')); //获取美食具体信息
router.post('/addfavours', require('./addfavours')); //添加到我喜欢的
router.get('/delfavours', require('./delfavours')); //从我喜欢的列表删除

module.exports = router