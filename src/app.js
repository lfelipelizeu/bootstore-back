import express from 'express';
import cors from 'cors';
import {
  getProducts,
  getProductDetails,
  getProductsForVisitorCart,
} from './controllers/products.js';
import { getProductsRatings } from './controllers/ratings.js';
import { getCartQuantity } from './controllers/cart.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/products', getProducts);

app.get('/cart/quantity', getCartQuantity);

app.get('/ratings', getProductsRatings);

app.get('/product/:code', getProductDetails);

app.get('/products/cart', getProductsForVisitorCart);
export default app;
