import { ColorService } from "./service";
import { CreateColorDto, UpdateColorDto } from "./dto";
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    getColor(): Promise<any[]>;
    createColor(createColorDto: CreateColorDto): Promise<any>;
    updateColor(id: number, updateColorDto: UpdateColorDto): Promise<any>;
    deleteColor(id: number): Promise<any>;
}
