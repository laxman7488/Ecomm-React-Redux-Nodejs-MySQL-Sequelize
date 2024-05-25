module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  });
  User.associate = models => {
    User.hasMany(models.Order, {
      sourceKey: 'id',
      foreignKey: 'user_id',
      onDelete: 'cascade'
    });
}
  return { User };
};
