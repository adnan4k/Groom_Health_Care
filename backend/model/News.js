import { DataTypes } from 'sequelize';
import sequelize from '../db';

const News = sequelize.define('News', {
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
});

export default News;
