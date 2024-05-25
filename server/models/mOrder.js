module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define("Orders", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
      allowNull: false,
    },
  },{
    timestamps: false
  });


  const OrderChairs = sequelize.define("Order_Chairs", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    chair_id: {
      type: DataTypes.INTEGER,
    },
    qty: {
      type: DataTypes.INTEGER,
    },
  },{
    timestamps: false
  });

  const OrderTables = sequelize.define("Order_Tables", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    table_id: {
      type: DataTypes.INTEGER,
    },
    qty: {
      type: DataTypes.INTEGER,
    },
  },{
    timestamps: false
  });


  const OrderTops = sequelize.define("Order_Tops", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    top_id: {
      type: DataTypes.INTEGER,
    },
    qty: {
      type: DataTypes.INTEGER,
    },
  },{
    timestamps: false
  });


  Order.associate = (models) => {
    OrderChairs.belongsTo(models.Order, { onDelete: "CASCADE" });
    OrderTables.belongsTo(models.Order, { onDelete: "CASCADE" });
    OrderTops.belongsTo(models.Order, { onDelete: "CASCADE" });
  },{
    timestamps: false
  };

  return { Order, OrderChairs, OrderTables, OrderTops };
};
