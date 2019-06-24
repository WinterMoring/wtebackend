const Router = require('koa-router');
//获取美食详情处理
let router = new Router();

router.get('/getfoodinfo', async(ctx, next) => {
    let foodid = ctx.query.foodid;
    let data = await ctx.db.query('SELECT foodname, discription , image FROM food_table WHERE ID = ?', [foodid]);
    ctx.body = data[0];
})
module.exports = router.routes();