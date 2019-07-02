const Router = require('koa-router');
const addtoken = require('../libs/addtoken.js');
//登录处理
let router = new Router();

router.get('/login', async(ctx, next) => {
    let username = ctx.query.username;

    let password = ctx.query.password;
    //数据库检索
    let data = await ctx.db.query('SELECT username , password FROM user_table WHERE USERNAME = ?', [username]);

    if (data.length == 0) { //用户名不存在
        ctx.body = {
            state: -1,
            msg: '用户不存在'
        }
    } else if (data[0].password != password) { //密码不匹配
        ctx.body = {
            state: -2,
            msg: '密码错误'
        }
    } else {
        let tk = addtoken({ username }) //token中要携带的信息，自己定义
        ctx.body = {
            token: tk,
            state: 0,
            msg: '登录成功'
        }
    }
})
module.exports = router.routes();