export declare abstract class BaseEntity {
    id: number;
    createdAt: Date;
    createdBy: number;
    modifiedAt: Date;
    modifiedBy: number;
    deletedAt: Date;
    deletedBy: number;
    active: boolean;
}
