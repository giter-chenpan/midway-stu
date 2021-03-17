import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}

@Provide('hahaha')
export class Index {
  async getu(id: string): Promise<string> {
    return `${id} dedede`
  }
}

