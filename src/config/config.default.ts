import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615947004917_7874';

  // add your config here
  config.middleware = [];
  config.orm = {
    type: 'mysql',
    host: '120.79.102.235',
    port: 3306,
    username: 'root',
    password: 'kh:ql737usnP',
    database: 'test',
    synchronize: false,
    logging: false,
 }
  
  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true
  }


  return config;
};
