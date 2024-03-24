import { DataTypes } from 'sequelize';
import sequelize from '../db';

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

export default Testimony;
