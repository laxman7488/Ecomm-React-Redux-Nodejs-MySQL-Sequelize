const {
  Order,
  OrderChairs,
  OrderTables,
  OrderTops,
  sequelize,
} = require("../../models");
const User = require("../user/sUser");

class OrderService {
  async createCategoryOrder({ category, order, id, qty, transaction }) {
    const categoriesMap = {
      Chairs: { key: "chair_id", fn: OrderChairs },
      Table: { key: "table_id", fn: OrderTables },
      Top: { key: "top_id", fn: OrderTops },
    };
    const { key, fn } = categoriesMap[category];

    return await fn.create(
      {
        OrderId: order.id,
        [key]: id,
        qty: qty,
      },
      { transaction }
    );
  }
  async addOrder(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const transaction = await sequelize.transaction();

        try {
          const addUser = await User.addUser(data, { transaction });
          const user = addUser.data;

          const order = await Order.create(
            {
              amount: data.cart.reduce(
                (total, item) => total + item.price * item.qty,
                0
              ),
              created_at: new Date(),
              user_id: user.id,
            },
            { transaction }
          );

          for (const item of data.cart) {
            await this.createCategoryOrder({ ...item, order, transaction });
          }

          await transaction.commit();
          const orders = order.toJSON();
          resolve({
            status: true,
            data: { ...orders, ...user.toJSON(), orderId: orders.id },
            message: "Order placed successfully.",
          });
        } catch (error) {
          await transaction.rollback();
          throw error;
        }
      } catch (error) {
        console.log(error);
        reject({ status: false, message: "Error placing order." });
      } finally {
        await sequelize.close();
      }
    });
  }
}

module.exports = new OrderService();
