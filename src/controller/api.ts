import {
  Inject,
  Controller,
  Post,
  Provide,
  Body,
  Get,
  Put,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide() //暴露服务
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Body() uid: number) {
    const user = await this.userService.getUser({ uid });
    const res = await this.userService.savePhoto();
    return { success: true, message: 'OK', data: { res, user } };
  }

  @Get('/getPhoto')
  async getPhoto() {
    const res = await this.userService.findPhoto();
    return res;
  }

  @Put('/updatePhoto')
  async updatePhoto(@Body() id: number) {
    const res = await this.userService.updatePhoto(id);
    return res;
  }
}
