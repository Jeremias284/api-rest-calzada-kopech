const ClientSchema = require('../../models/clients');

const getClients = async (req, res) => {
    try {
        const response = await ClientSchema.find();
        return res.status(200).json({
            data: response,
            error: false
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error
        });
    }
};

module.exports = {
    getClients
}