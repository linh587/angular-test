import { Product } from "../models/product.model";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Áo thun cotton nam",
        image: "https://via.placeholder.com/150",
        price: 199000,
        description: "Chất liệu cotton mềm mịn, thoáng khí.",
        inStock: true,
    },
    {
        id: 2,
        name: "Quần jeans nữ",
        image: "https://via.placeholder.com/150",
        price: 399000,
        description: "Form dáng ôm nhẹ, hợp thời trang.",
        inStock: false,
    },
];
