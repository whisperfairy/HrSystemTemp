/**
 * Created by hurong on 2017/9/4.
 */

import Router from 'koa-router';
import {ILight}from '../../models/lightControlModel'
import * as serialport from 'serialport'
var port = new serialport('/dev/tty.usbserial-FTGVLWFW', {
    baudRate: 9600
});

let postLightness = async  (ctx:Router.IRouterContext,next)=>{
    ctx.type='application/json'
    ctx.status=200;
    const light:ILight={
        groupID:ctx.request.body.groupID,
        brightness:ctx.request.body.brightness
    }
     const portWriter =  await new Promise((resolve,reject)=>{
        port.write('main screen turn on', function(err) {
            if (err) {
                return reject(`Error on write: ${err.message}`);
            }
            console.log('message written');
        });
        resolve()
    })
    // serialport.list().then(ports=>{
    //     console.log(ports)
    // })
    await next();
    ctx.body=light
};
export const Light=function (router)
{
    router.post('/api/Light',postLightness);
}



