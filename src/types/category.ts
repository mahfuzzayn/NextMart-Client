export interface ICategory {
    _id: string;
    name: string;
    description: string;
    icon: string;
    isActive: boolean;
    createdBy: string;
    parent: string | null;
    slug: string;
    children: ICategory[];
    createdAt: Date;
    updatedAt: Date;
}
