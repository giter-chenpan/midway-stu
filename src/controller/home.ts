import { Controller, Get, Provide, Query, HttpCode, Inject } from '@midwayjs/decorator';
import { Index } from '../service/user';

@Provide()
@Controller('/', { middleware: [ 'reportMiddleware' ] })
export class HomeController {

  @Inject()
  indexs: Index;

  @Get('/index')
  @HttpCode(201)
  async home(@Query('id') uid: string = '0') {
    let aa = await this.indexs.getu(uid)
    return `Hello ${aa}` ;
  }
}
