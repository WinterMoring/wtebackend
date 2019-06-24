const Router = require('koa-router');
//获取“我喜欢的”列表处理
let router = new Router();

router.get('/getfavours', async(ctx, next) => {
    let username = ctx.query.username;
    let data = await ctx.db.query('SELECT food_table.id , foodname FROM food_table LEFT JOIN user_table ON food_table.userid = user_table.id WHERE user_table.USERNAME = ?', [username]);
    ctx.body = data;

    if (data.length == 0) { //用户名不存在
        ctx.body = {
            state: -1,
            msg: '未添加'
        }
    } else {
        ctx.body = {
            state: 0,
            data
        }
    }
})
module.exports = router.routes();