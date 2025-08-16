import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("gravel", "road", "mtb", "hybrid", "gear", "outlet"),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING, // or use DataTypes.DECIMAL(10, 2) if you prefer numeric
      allowNull: false,
    },
  },
  {
    tableName: "products",
  }
);

export default Product;
