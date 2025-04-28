export interface Inventory {
    id:             string;
    productCode:    string;
    productName:    string;
    quantity:       number;
    lastUpdated:    string;
    product:        {
        modelo: string;
    };
}