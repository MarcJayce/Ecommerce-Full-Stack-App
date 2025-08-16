import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import User from './User'; 
const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'orders',
    timestamps: true
  });

  export default Order;