const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const koabody = require('koa-body')
const logger = require('koa-logger')

const index = require('./routes/index')

const db = require('./libs/database');
const cors = require('koa-cors');
// error handler
onerror(app)

// middlewares
app.use(koabody({
    multipart: true, // 允许上传多个文件
    formidable: {
        //uploadDir: 'public/images/', // 上传的文件存储的路径 不能写，写了就直接上传了
        //keepExtensions: true, //  保存图片的扩展名
        maxFileSize: 200 * 1024 * 1024
    }
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(cors({
    origin: "*",
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

//database
app.context.db = db; //在此处将context.db赋值后，所有用到db操作的地方可以直接调用ctx.db进行操作

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});


module.exports = app