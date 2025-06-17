export interface CartDTO {
    id: string;
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    }
    thumbnail: string;

}