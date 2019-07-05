const Router = require('koa-router');
const proving = require('../libs/decodetoken.js')
    //获取“我喜欢的”列表处理
let router = new Router();

router.get('/getfavours', async(ctx, next) => {
    let token = ctx.request.header.authorization;
    if (token) {
        //  获取到token
        let res = proving(token);
        if (res && res.exp <= new Date() / 1000) {
            ctx.body = {
                message: 'token过期',
                code: 2
            };
        } else {
            let username = ctx.query.username;
            let data = await ctx.db.query('SELECT food_table.id , foodname , discription FROM food_table LEFT JOIN user_table ON food_table.userid = user_table.id WHERE user_table.USERNAME = ? AND DELFLAG=0', [username]);
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
        }
    } else { // 没有取到token
        ctx.body = {
            msg: '没有token',
            code: 3
        }
    }
});


module.exports = router.routes();