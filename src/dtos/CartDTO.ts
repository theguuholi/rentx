export interface CartDTO {
    data: {
        brand: string;
        name: string;
        rent: {
            period: string;
            price: number;
        }
        thumbnail: string;
    }
}