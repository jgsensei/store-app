import { ImageSourcePropType } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


// user information

export interface User {
  id: number;
  name: string;
  last_name: string;
  image?: ImageSourcePropType;
}

export const user: User = {
  id: 1,
  name: 'Jeremia',
  last_name: "Garcia",
  image: require("../assets/user/avatar.png"),
}

// Categories info

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Men's",
  },
  {
    id: 2,
    name: "Women",
  },
  {
    id: 3,
    name: "Sports",
  },
];
// Colors

export interface Color {
  id: number;
  code: string;
}


const colors: Color[] = [
  {
    id: 1,
    code: Colors.primary,
  },
  {
    id: 2,
    code: Colors.secondary,
  },
  {
    id: 3,
    code: Colors.text,
  },
];
// sizes

export interface Size {
  id: number;
  name: string;
}

const sizes: Size[] = [
  { id: 1, name: "S" },
  { id: 2, name: "M" },
  { id: 3, name: "L" },
  { id: 4, name: "XL" },
  { id: 5, name: "XXL" },
];

// Products info

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  image?: ImageSourcePropType;
  reviews: number;
  rating: number;
  brand: string;
  colors: Color[];
  sizes: Size[];
}


export const products: Product[] = [
  {
    id: 1,
    name: "Skinny Fit Blazer",
    price: 18.0,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    // image: require("../assets/products/yellow-ss.jpg"),
    reviews: 80,
    rating: 2.5,
    colors: colors,
    brand: "Zara",
    sizes,
  },
  {
    id: 2,
    name: "Men’s Kinnstor sportswear",
    price: 76.0,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    // image: require("../assets/products/green-j.jpg"),
    reviews: 28,
    rating: 3.7,
    colors: colors,
    brand: "Zara",
    sizes,
  },
  {
    id: 3,
    name: "Violet Hoodie",
    price: 29.99,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    // image: require("../assets/products/hdd.jpg"),
    reviews: 70,
    rating: 5,
    colors: colors,
    brand: "Zara",
    sizes,
  },
  {
    id: 4,
    name: "Fit Blazer",
    price: 49.0,
    category: categories[1],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    // image: require("../assets/products/blue-ish-w.jpg"),
    reviews: 65,
    rating: 4.2,
    colors: colors,
    brand: "Zara",
    sizes,
  },
];