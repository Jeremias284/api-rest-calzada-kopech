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

const getClientById = async (req, res) => {
    try {
        const response = await ClientSchema.findOne({ _id: req.params.clientId})

        if(!response || response.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'client no found'
            })
        }

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

        return res.status(201).json({
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

const deleteClientById = async (req, res) => {
    try {
        const response = await ClientSchema.findOneAndRemove({_id: req.params.clientId});
        if(!response || response.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'client no found'
            })
        }

        return res.status(202).json({
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
    getClients,
    getClientById,
    addClient,
    deleteClientById
}