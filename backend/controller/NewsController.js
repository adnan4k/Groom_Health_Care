import News from "../model/News.js"; // Assuming News is now a Sequelize model

export const createNews = async (req, res) => {
    const { title, content } = req.body;
    try {
        const news = await News.create({
            title: title,
            image: req.file.filename, // Ensure you handle file upload similarly
            content: content,
        });

        return res.status(201).json(news);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred" });
    }
}

export const updateNews = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;

    try {
        const updateData = {
            title: title,
            content: content,
        };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        const news = await News.update(updateData, {
            where: { id: id },
            returning: true, // Note: Only supported by PostgreSQL
        });

        if (news) {
            // Sequelize's `update` returns an array [affectedCount, affectedRows]
            return res.status(200).json(news[1][0]); // For PostgreSQL
        } else {
            return res.status(404).json({ message: "News not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const allNews = async (req, res) => {
    try {
        const news = await News.findAll();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}

export const deleteNews = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await News.destroy({
            where: { id: id },
        });

        if (deleted) {
            return res.status(200).json({ message: "News deleted" });
        } else {
            return res.status(404).json({ message: "News not found" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
