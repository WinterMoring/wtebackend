const jwt = require('jsonwebtoken');
const serect = 'token'; //密钥，不能丢
module.exports = (username) => { //创建token并导出
    //let date = new Date().toDateString;
    const token = jwt.sign({
        username,
        //date,
    }, serect, { expiresIn: '1h' });
    return token;
};