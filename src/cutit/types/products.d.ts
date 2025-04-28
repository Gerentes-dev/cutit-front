export interface Product {
    id:              number;
    code:            string;
    description:     string;
    vlrBruto:        number;
    iva:             number;
    vlrVenta:        number;
    color:           string;
    modelo:          string;
    category:        string;
    createdAt:       string;
    imageUrl:        string;
    materials:       string;
    functionalities: string;
    reviews:         any[];
    relatedProducts: any[];
    piva:            number;
}

export interface ProductCategoryRequest {
    category: string;
    minPrice: string;
    maxPrice: string;
    stockAvailable: boolean;
}