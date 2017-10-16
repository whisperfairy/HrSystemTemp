/**
 * Created by hurong on 2017/9/4.
 */
import * as koa from 'koa'
import * as koaBody from 'koa-bodyparser';
import * as koaRouter from 'koa-router';
import * as serialport from 'serialport'
import {initController} from "./Controller/index";
import * as db from './db/db'
const app = new koa();
db.connecting();
const router = new koaRouter();
const cors = require('kcors');
app.use(cors());
app.use(koaBody())

app.use(async function (ctx, next) {
    const start :any = new Date();
    await next();
    const end :any=new Date();
    const ms :any = end - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
    const start :any= new Date();
    await next();

    const ms :any = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
// response
initController(app)



app.listen(3000);