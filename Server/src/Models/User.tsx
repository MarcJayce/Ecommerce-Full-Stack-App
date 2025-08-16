import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../sequelize";

const User = sequelize.define(
  "User",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);
User.addHook("beforeCreate", async (user: any) => {
  user.password = await bcrypt.hash(user.password, 10);
});
export default User;
