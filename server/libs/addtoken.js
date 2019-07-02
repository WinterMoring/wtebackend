const jwt = require('jsonwebtoken');
const serect = 'token'; //密钥，不能丢
module.exports = (username) => { //创建token并导出
    const token = jwt.sign({
        username
    }, serect, { expiresIn: '1h' });
    return token;
};