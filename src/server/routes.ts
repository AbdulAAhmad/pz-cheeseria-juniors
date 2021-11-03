import * as express from 'express';
import type { CheeseType } from './data/cheeses';
const { randomBytes } = require("crypto");
const cheeses : CheeseType = require('./data/cheeses.json');
const orders = require('./orders');
const {addItemToRecentItems, getRecentItems} = require('./recentItems');

const router = express.Router();


router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

router.get('/api/orders/recent', (req, res, next) => {

    res.send(getRecentItems(cheeses));
});

router.post('/api/orders', (req, res, next)=> {
    const id : string = randomBytes(4).toString("hex");
    const orderItems : OrderItemsType[] = req.body;

    orderItems.forEach((orderItem)=> {
        addItemToRecentItems(orderItem.id)
    })

    orders[id] = {id, items: orderItems}
  
    res.send(orders[id]);
});

export default router;