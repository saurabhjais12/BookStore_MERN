import mongoose from 'mongoose';

const orderBuySchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    phone: { type: Number, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
export default mongoose.model('OrderBuy', orderBuySchema);