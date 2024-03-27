import Service from "../model/Service.js"; // Assuming Service is now a Sequelize model

export const createService = async (req, res) => {
    const { title, description } = req.body;
    try {
        const updateData = {
            title: title,
            description: description,
        };

        if (req.file) {
            updateData.image = req.file.filename; // Ensure you handle file uploads similarly
        }

        const savedService = await Service.create(updateData);

        return res.status(201).json({ savedService });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred" });
    }
}

export const updateService = async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;

    try {
        const updateData = {
            title: title,
            description: description,
        };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        const [updated] = await Service.update(updateData, {
            where: { id: id }
        });

        if (updated) {
            const updatedService = await Service.findByPk(id);
            return res.status(200).json({ message: 'Service updated successfully', service: updatedService });
        } else {
            return res.status(404).json({ message: 'Service not found' });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const allService = async (req, res) => {
    console.log('here is service')
    try {
        const service = await Service.findAll();
        return res.status(200).json(service);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}

export const deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Service.destroy({
            where: { id: id }
        });

        if (deleted) {
            return res.status(200).json({ message: "Service deleted" });
        } else {
            return res.status(404).json({ message: "Service doesn't exist" });
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}
