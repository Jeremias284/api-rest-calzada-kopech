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

const addClient = async (req, res) => {
    try {
        const client = new ClientSchema(req.body);  
        const newClient = await client.save();

        return res.status(200).json({
            data: newClient,
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
    getClients,
    addClient
}