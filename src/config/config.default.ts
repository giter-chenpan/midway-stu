import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615947004917_7874';

  // add your config here
  config.middleware = [];
  config.orm = {
    default: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'kh:ql737usnP',
      database: 'test',
      entities: [__dirname + '/entity/*.ts'],
      synchronize: true,
      logging: false,
    },
  };

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  return config;
};
