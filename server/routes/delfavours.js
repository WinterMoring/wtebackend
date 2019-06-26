const Router = require('koa-router');
//从我喜欢的列表删除
let router = new Router();

router.get('/delfavours', async(ctx, next) => {
    try {
        let foodid = ctx.query.foodid;
        await ctx.db.query('UPDATE food_table SET delflag = 1 WHERE id = ?', [foodid]);

        ctx.body = {
            state: 0,
            msg: '删除成功',
        }
    } catch (error) {
        ctx.body = {
            state: -1,
            msg: '删除失败' + error
        }
    }
})
module.exports = router.routes();