"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
class BaseService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    handleFind(query, condition = { active: true }) {
        query.where(condition);
        return query;
    }
    handleSelect() {
        return this.repository.createQueryBuilder().select(this.columns);
    }
    handleOrder(query) {
        query.orderBy({ 'id': 'asc' });
        return query;
    }
    async getList(condition = { active: true }) {
        let query = this.handleSelect();
        query = this.handleFind(query, condition);
        query = this.handleOrder(query);
        return (await query.getRawMany()).map(obj => obj);
    }
    async create(data) {
        const newData = await this.repository
            .createQueryBuilder()
            .insert()
            .values(data)
            .returning(this.columns.join(', '))
            .execute();
        if (data.length > 1)
            return (0, utils_1.toCamelCase)(newData.raw);
        return (0, utils_1.toCamelCase)(newData.raw[0]);
    }
    async updateOne(id, data) {
        const newData = await this.repository
            .createQueryBuilder()
            .update()
            .set(data)
            .where("id = :id", { id })
            .returning(this.columns.join(', '))
            .execute();
        if (newData.affected === 0) {
            throw new common_1.NotFoundException(`Color with id ${id} not found`);
        }
        return (0, utils_1.toCamelCase)(newData.raw[0]);
    }
    softDelete(id) {
        return this.updateOne(id, { active: false });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=service.js.map