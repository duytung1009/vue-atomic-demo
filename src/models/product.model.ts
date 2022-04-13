export class ProductModel {
  id!: number;
  name!: string;
  imageUrl!: string;
  price!: number;
  description!: string;

  constructor(init?: Partial<ProductModel>) {
    Object.assign(this, init);
  }
}
