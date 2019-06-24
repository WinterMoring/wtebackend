const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const koabody = require('koa-body')
const logger = require('koa-logger')

const index = require('./routes/index')

const db = require('./libs/database');
// error handler
onerror(app)

// middlewares
app.use(koabody({
    multipart: true, // 允许上传多个文件
    formidable: {
        uploadDir: 'public/images/', // 上传的文件存储的路径 
        keepExtensions: true //  保存图片的扩展名
    }
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


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