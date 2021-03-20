
//每一个属性，其实是和数据库表一一对应的
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel()
export class Photo {

  @PrimaryGeneratedColumn()     //自增主键列
  id: number;

  @Column()                     //创建列
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}