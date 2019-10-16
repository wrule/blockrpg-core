import { Point } from "./Point";
import { Space } from "./Space";
import { Rect } from "./Rect";
import { Session } from "./Session";
import { Config } from "./Config";
import * as SocketIO from "./SocketIO";
import * as Koa from "./Koa";
import { Rtv } from './Rtv';
import { Player } from './Model/Player/Entity';
import { PlayerDAL } from './Model/Player/DAL';
import { playerRegisterBLL } from './Model/Player/BLL';

async function test() {
  const rtv = await playerRegisterBLL('鸡毛巾3', 'gushihao');
  console.log(rtv);
}

test();

export {
  Point,
  Space,
  Rect,
  Session,
  Config,
  SocketIO,
  Koa,
  Rtv,
}
