export interface CartDTO {
    id: string;
    brand: string;
    name: string;
    about: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string;
    accessories: {
        type: string;
        name: string;
    }[];
    photos: string[];
    fuel_type: string;
}