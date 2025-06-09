import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ColorEntity } from './entity';
import {BaseService} from "../base/service";

@Injectable()
export class ColorService extends BaseService {

  columns: string[] = ['id', 'name']

  constructor(
    @Inject('COLOR_REPOSITORY')
    private colorRepository: Repository<ColorEntity>,
  ) {
    super(colorRepository)
  }

}