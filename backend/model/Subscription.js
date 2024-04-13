import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Subscription = sequelize.define('Subscription', {
    email: {
        type: DataTypes.STRING,
    }
});
 Subscription.sync({force:false})
export default Subscription;
