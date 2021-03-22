import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm';
import { Photo } from '../entity/photo';
import { PhotoMetadata } from '../entity/photoMetadata';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  @InjectEntityModel(PhotoMetadata)
  photoMetadataModel: Repository<PhotoMetadata>;

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  // save
  async savePhoto() {
    // create a entity object
    const photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.views = 1;
    photo.isPublished = true;
    // create a photo metadata
    const metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = 'cybershoot';
    metadata.orientation = 'portrait';
    metadata.photo = photo; // this way we connect them
    // save entity
    const photoResult = await this.photoModel.save(photo);
    const photoMetaResult = await this.photoMetadataModel.save(metadata);
    // save success
    return { photoResult, photoMetaResult };
  }

  async findPhoto() {
    return await this.photoModel.findOne(2);
  }

  async updatePhoto(id: number) {
    const res = await this.photoModel.find({ id });
    res[0].name = 'chenpan';
    return await this.photoModel.save(res);
  }
}

@Provide('hahaha')
export class Index {
  async getu(id: string): Promise<string> {
    return `${id} dedede`;
  }
}
