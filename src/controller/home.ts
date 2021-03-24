import {
  Controller,
  Get,
  Provide,
  Query,
  HttpCode,
  Inject,
} from '@midwayjs/decorator';
import { Index } from '../service/user';
import { CreateApiDoc } from '@midwayjs/swagger';
@Provide()
@Controller('/', { middleware: ['reportMiddleware'] })
export class HomeController {
  @Inject()
  indexs: Index;

  @(CreateApiDoc()
    .summary('get user')
    .description('This is a open api for get user')
    .build())
  @Get('/index')
  @HttpCode(201)
  async home(@Query('id') uid = '0') {
    const aa = await this.indexs.getu(uid);
    return `Hello ${aa}`;
  }
}
