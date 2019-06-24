const Router = require('koa-router');

let router = new Router();

router.post('/regist', async(ctx, next) => {
    let data = ctx.request.body;
    let username = data.username;
    let password = data.password;

    try {
        //检索数据库
        let querydata = await ctx.db.query('SELECT username , password FROM user_table WHERE USERNAME = ?', [username]);
        //console.log(querydata);
        if (querydata.lenth == 0) { //
            ctx.response.body = {
                state: -1,
                msg: "用户已存在"
            }
        } else {
            await ctx.db.query('INSERT INTO user_table (username,PASSWORD) VALUES ( ? , ? )', [username, password]);
            ctx.response.body = {
                state: 0,
                msg: "已注册"
            }

        }
    } catch (error) {
        ctx.response.body = {
            state: -2,
            msg: error
        }
    }
})
module.exports = router.routes();