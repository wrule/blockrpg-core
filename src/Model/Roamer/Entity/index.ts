import { Point } from "../../../Point";
import { Space } from '../../../Space';

// 漫步者
export class Roamer {
  private account: string;
  private x: number = 0;
  private y: number = 0;
  private dir: number = 1;
  private ges: number = 0;

  public get Account(): string {
    return this.account;
  }
  public get X(): number {
    return this.x;
  }
  public get Y(): number {
    return this.y;
  }
  public get Dir(): number {
    return this.dir;
  }
  public get Ges(): number {
    return this.ges;
  }
  // 漫步者当前空间坐标
  public get CurSpacePoint(): Point {
    return new Point(this.x, this.y);
  }
  // 漫步者当前网格坐标
  public get CurGridPoint(): Point {
    return Space.ToGrid(this.CurSpacePoint);
  }
  // 漫步者当前Block坐标
  public get CurBlockPoint(): Point {
    return Space.ToBlock(this.CurSpacePoint);
  }

  // 构造函数
  public constructor(params: {
    account: string,
    x: number,
    y: number,
    dir: number,
    ges: number,
  }) {
    this.account = params.account;
    this.x = params.x;
    this.y = params.y;
    this.dir = params.dir;
    this.ges = params.ges;
  }
}
