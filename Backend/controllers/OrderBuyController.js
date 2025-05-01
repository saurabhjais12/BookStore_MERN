import OrderBuy from "../models/OrderBuy.js";

// Controller for placing an order
const OrderBuyController = async (req, res) => {
    try {
        const { name, state, city, address, pincode, productName, price, quantity, phone } = req.body;

        const newOrder = new OrderBuy({
            name,
            state,
            city,
            address,
            pincode,
            phone,
            productName,
            price,
            quantity,
        });

        await newOrder.save();

        res.status(201).json({
            message: "Order saved successfully",
            order: newOrder,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error saving order",
        });
    }
};

// Controller to get all orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderBuy.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error fetching orders.' });
    }
};


export default OrderBuyController;
