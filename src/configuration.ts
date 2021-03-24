import { App, Configuration } from '@midwayjs/decorator';
// eslint-disable-next-line node/no-extraneous-import
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as orm from '@midwayjs/orm';
import * as swagger from '@midwayjs/swagger';
import * as grpc from '@midwayjs/grpc';
import { join } from 'path';

@Configuration({
  imports: [
    orm, // 加载 orm 组件
    grpc,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
