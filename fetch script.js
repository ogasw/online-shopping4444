const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/checkout', (req, res) => {
    const cart = req.body;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    res.json({ success: true, total });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
                       
