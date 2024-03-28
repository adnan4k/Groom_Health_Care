import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

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
 News.sync({force:false})
export default News;
