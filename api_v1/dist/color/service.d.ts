import { Repository } from 'typeorm';
import { ColorEntity } from './entity';
import { BaseService } from "../base/service";
export declare class ColorService extends BaseService {
    private colorRepository;
    columns: string[];
    constructor(colorRepository: Repository<ColorEntity>);
}
