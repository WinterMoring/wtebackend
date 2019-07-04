const Router = require('koa-router');
const proving = require('../libs/decodetoken.js')
    //从我喜欢的列表删除
let router = new Router();

router.get('/delfavours', async(ctx, next) => {
    let token = ctx.request.header.authorization;
    console.log(token);
    if (token) {
        //  获取到token
        let res = proving(token);
        if (res && res.exp <= new Date() / 1000) {
            ctx.body = {
                message: 'token过期',
                code: 3
            };
        } else {
            try {
                let foodid = ctx.query.foodid;
                await ctx.db.query('UPDATE food_table SET delflag = 1 WHERE id = ?', [foodid]).then(res => {
                    ctx.body = {
                        state: 0,
                        msg: '删除成功',
                        res: res
                    }
                })

            } catch (error) {
                ctx.body = {
                    state: -1,
                    msg: '删除失败' + error
                }
            }

        }
    } else { // 没有取到token
        ctx.body = {
            msg: '没有token',
            code: 0
        }
    }
});

module.exports = router.routes();