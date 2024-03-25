import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Testimony = sequelize.define('Testimony', {
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
});
// Testimony.sync({force:true})
export default Testimony;
