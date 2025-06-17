const Receipt = require('../models/receiptSchema');

const getMyReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.find({ userId: req.user.id })
            .populate('paymentId', 'paymentMethod amount');

        res.status(200).json({
            success: true,
            count: receipts.length,
            data: receipts
        });
    } catch (error) {
        console.error('Server Error fetching user receipts:', error);
        res.status(500).json({ success: false, error: 'An unexpected server error occurred.' });
    }
};

const getReceiptById = async (req, res) => {
    try {
        const receipt = await Receipt.findById(req.params.id).populate('paymentId');

        if (!receipt) {
            return res.status(404).json({ success: false, error: 'No receipt found with that ID' });
        }

        if (receipt.userId.toString() !== req.user.id) {
            return res.status(401).json({ success: false, error: 'Not authorized to view this receipt' });
        }

        res.status(200).json({
            success: true,
            data: receipt
        });
    } catch (error) {
        console.error(`Error fetching receipt with ID ${req.params.id}:`, error);
        
        if (error.name === 'CastError') {
             return res.status(400).json({ success: false, error: 'The provided ID is invalid' });
        }
        
        res.status(500).json({ success: false, error: 'An unexpected server error occurred.' });
    }
};

const getAllReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.find({})
            .populate('userId', 'name email')
            .populate('paymentId', 'paymentMethod amount');

        res.status(200).json({
            success: true,
            count: receipts.length,
            data: receipts
        });
    } catch (error) {
        console.error('Server Error fetching all receipts:', error);
        res.status(500).json({ success: false, error: 'An unexpected server error occurred.' });
    }
};

module.exports = {
    getAllReceipts,
    getReceiptById,
    getMyReceipts
};
