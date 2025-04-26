export interface Product {
    id:          string;
    name:        string;
    description: string;
    quantity:    number;
    type:        string;
}

export interface ProductCategoryRequest {
    category: string;
    minPrice: string;
    maxPrice: string;
    stockAvailable: boolean;
}