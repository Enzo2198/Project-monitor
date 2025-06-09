import { ProductService } from "./service";
import { CreateProductDto, UpdateProductDto } from "./dto";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    get(): Promise<any[]>;
    create(createDto: CreateProductDto): Promise<any>;
    update(id: number, updateDto: UpdateProductDto): Promise<any>;
    delete(id: number): Promise<any>;
}
