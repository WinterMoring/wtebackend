const Router = require('koa-router');
const fs = require('fs');
const path = require('path');


let router = new Router();

router.post('/addfavours', async(ctx, next) => {
    let data = ctx.request.body;
    let username = data.username;
    let foodname = data.foodname;
    let discription = data.discription;
    try {
        //检索数据库
        let querydata = await ctx.db.query('SELECT foodname FROM food_table LEFT JOIN user_table ON food_table.userid = user_table.id WHERE user_table.USERNAME = ? AND food_table.foodname = ?', [username, foodname]);
        if (querydata.length != 0) { //
            ctx.response.body = {
                state: -1,
                msg: "已存在"
            }
        } else {
            // 上传单个文件
            const file = ctx.request.files.file; // 获取上传文件
            console.log(file.name);
            let filePath = '';
            if (file.name) {
                // 创建可读流
                const reader = fs.createReadStream(file.path);
                filePath = path.join('./public/images/') + `/${username}${file.name}`;
                // 创建可写流
                const upStream = fs.createWriteStream(filePath);
                // 可读流通过管道写入可写流
                reader.pipe(upStream);
            }
            await ctx.db.query('INSERT INTO food_table (foodname,discription,image,userid) VALUES ( ? , ? ,?,( SELECT ID FROM USER_TABLE WHERE USERNAME=?))', [foodname, discription, filePath, username]);
            ctx.response.body = {
                state: 0,
                msg: "添加成功"
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