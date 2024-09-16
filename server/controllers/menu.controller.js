const e = require("express");
const pool = require("../config/database");

const getAllMenu = (req, res) => {
  const query = `select * from menu`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res
        .status(200)
        .json({ message: "All menu has been fetched!", data: result });
    }
  });
};

const getMenu = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const query = `select * from menu where menuId = ?`;
  pool.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res
        .status(200)
        .json({ message: `menu with Id ${id} has been fetched`, data: result });
    }
  });
};

const getRelatedMenu = (req, res) => {
  console.log("line 32", req.params.category);
  const category = req.params.category;
  try {
    const query = `SELECT * FROM menu WHERE menuCategory = ?`;
    console.log(req.body);
    pool.query(query, [category], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (result) {
        res.status(200).json({ message: "Showing related menu", data: result });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllDeals = (req, res) => {
  const query = `SELECT * FROM menu WHERE menuPrice < 10000;`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res.status(200).json({ message: "Showing all deals", data: result });
    }
  });
};

const getHotDealPizza = (req, res) => {
  const query = `SELECT * FROM menu WHERE menuCategory = 'pizza'`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res.status(200).json({ message: "Showing all Pizza", data: result });
    }
  });
};

const getHotDealSushi = (req, res) => {
  const query = `SELECT * FROM menu WHERE menuCategory = 'sushi'`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res.status(200).json({ message: "Showing all Sushi", data: result });
    }
  });
};

const getHotDealSalads = (req, res) => {
  const query = `SELECT * FROM menu WHERE menuCategory = 'salad'`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res.status(200).json({ message: "Showing all Salads", data: result });
    }
  });
};

const getHotDealBurger = (req, res) => {
  const query = `SELECT * FROM menu WHERE menuCategory = 'burger'`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res.status(200).json({ message: "Showing all Burger", data: result });
    }
  });
};

const getHotDealDesert = (req, res) => {
  const query = `SELECT * FROM menu WHERE menuCategory = 'desert'`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res.status(200).json({ message: "Showing all Desert", data: result });
    }
  });
};

const getAllBlog = (req, res) => {
  const query = `select * from blog`;
  console.log(req.body);
  pool.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res
        .status(200)
        .json({ message: "All blogs has been fetched!", data: result });
    }
  });
};

const sortByAverageRating = (req, res) => {
  try {
    const checkQuary = "select * from menu order by menuRating asc";
    pool.query(checkQuary, async (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Cannot query the databse", err: err.message });
      if (result) {
        console.log(result);
        res
          .status(200)
          .json({ message: "Sorted by average rating", data: result });
      }
    });
  } catch (error) {
    console.log("Error occured during sorting", error);
    return res
      .status(500)
      .json({ message: "An internal error occurred", error: err.message });
  }
};

const sortBylatest = (req, res) => {
  try {
    const checkQuary = "select * from menu order by menuAddedAT asc";
    pool.query(checkQuary, async (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Cannot query the databse", err: err.message });
      if (result) {
        console.log(result);
        res.status(200).json({ message: "Sorted by latest", data: result });
      }
    });
  } catch (error) {
    console.log("Error occured during sorting", error);
    return res
      .status(500)
      .json({ message: "An internal error occurred", error: err.message });
  }
};

const sortByLowToHigh = (req, res) => {
  try {
    const checkQuary = "select * from menu order by menuPrice asc";
    pool.query(checkQuary, async (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Cannot query the databse", err: err.message });
      if (result) {
        console.log(result);
        res
          .status(200)
          .json({ message: "Sorted by low to high", data: result });
      }
    });
  } catch (error) {
    console.log("Error occured during sorting", error);
    return res
      .status(500)
      .json({ message: "An internal error occurred", error: err.message });
  }
};

const sortByHighToLow = (req, res) => {
  try {
    const checkQuary = "select * from menu order by menuPrice DESC";
    pool.query(checkQuary, async (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Cannot query the databse", err: err.message });
      if (result) {
        console.log(result);
        res
          .status(200)
          .json({ message: "Sorted by high to low", data: result });
      }
    });
  } catch (error) {
    console.log("Error occured during sorting", error);
    return res
      .status(500)
      .json({ message: "An internal error occurred", error: err.message });
  }
};

const addMenuToCart = (req, res) => {
  const menu = req.body.menu;
  const userId = req.body.Id;
  console.log(menu);
  console.log(userId);

  //check if order already exists
  const checkquery = "SELECT * FROM cart WHERE menuId = ? AND customerId = ?";
  try {
    pool.query(checkquery, [menu.menuId, userId], (error, results) => {
      if (error) return res.status(500).json(error.message);
      //Order already exist...increment
      if (results && results.length > 0) {
        console.log(results);
        const order = results[0];
        console.log(order);
        const updateQuery =
          "UPDATE cart SET menuQuantity = ? WHERE menuId = ? AND customerId = ?";
        pool.query(
          updateQuery,
          [order.menuQuantity + 1, menu.menuId, userId],
          (error, result) => {
            if (error) return res.status(500).json(error.message);
            if (result) {
              const query = `SELECT * FROM cart`;
              console.log(req.body);
              pool.query(query, (err, data) => {
                if (err) return res.status(500).json({ message: err.message });
                if (data) {
                  res
                    .status(200)
                    .json({ message: "Cart Updated successfully", data: data });
                }
              });
            }
          }
        );
      }
      //order is new, insert
      else {
        console.log("orders is new, insert");
        //Insert new order
        try {
          const checkQuary =
            "insert into cart (menuId, menuItem, menuPrice, menuImage, customerId) VALUES(?, ?, ?, ?, ?)";
          pool.query(
            checkQuary,
            [
              menu.menuId,
              menu.menuItem,
              menu.menuPrice,
              menu.menuImage,
              userId,
            ],
            (err, result) => {
              if (err)
                return res.status(500).json({
                  message: "Cannot query the databse",
                  err: err.message,
                });
              if (result) {
                console.log(result);

                const query = `SELECT * FROM cart`;
                console.log(req.body);
                pool.query(query, (err, data) => {
                  if (err)
                    return res.status(500).json({ message: err.message });
                  if (data) {
                    res
                      .status(201)
                      .json({ message: "Menu added to cart", data: data });
                  }
                });
              }
            }
          );
        } catch (error) {
          console.log("Error occured during sorting", error);
          return res.status(500).json({
            message: "An internal error occurred",
            error: err.message,
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

const getCartMenu = (req, res) => {
  // console.log(`Line 307`, req.body);
  const userId = req.body.userId;
  console.log(userId);
  const query = `SELECT * FROM cart WHERE customerId = ? `;
  pool.query(query, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result) {
      res.status(200).json({ message: "Showing all cart", data: result });
    }
  });
};

const deleteCart = (req, res) => {
  const menuId = req.body.menu.menuId;
  const userId = req.body.Id;
  console.log(menuId);
  console.log(userId);
  const query = "SELECT * FROM cart WHERE menuId = ? AND customerId = ?";
  try {
    pool.query(query, [menuId, userId], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (result) {
        const cartItem = result[0];
        console.log("line 331", cartItem);
        if (cartItem.menuQuantity > 1) {
          const updateQuery =
            "UPDATE cart SET menuQuantity = ? WHERE menuId = ? AND customerId = ?";
          pool.query(
            updateQuery,
            [cartItem.menuQuantity - 1, menuId, userId],
            (err, result) => {
              if (err) {
                console.log(err);
              }
              if (result) {
                console.log(result);
                const query = `SELECT * FROM cart WHERE menuId = ? AND customerId = ?`;
                console.log(req.body);
                pool.query(query, [menuId, userId], (err, data) => {
                  if (err)
                    return res.status(500).json({ message: err.message });
                  if (data) {
                    res
                      .status(201)
                      .json({ message: "Menu has been removed", data: data });
                  }
                });
              }
            }
          );
        }

        if (cartItem.menuQuantity == 1) {
          const updateQuery =
            "DELETE FROM cart WHERE menuId = ? AND customerId = ?";
          pool.query(updateQuery, [menuId, userId], (err, result) => {
            if (err) {
              console.log(err);
            }
            if (result) {
              console.log(result);
              const query = `SELECT * FROM cart`;
              console.log(req.body);
              pool.query(query, [menuId], (err, data) => {
                if (err) return res.status(500).json({ message: err.message });
                if (data) {
                  res
                    .status(201)
                    .json({ message: "Menu has been removed", data: data });
                }
              });
            }
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserQuary = (req, res) => {
  const query = req.params.query;
  console.log(`Line 369 ${query}`);
  const searchTerm = `%${query}%`;
  const dBquery = `SELECT * FROM menu WHERE menuItem LIKE ?`;
  try {
    pool.query(dBquery, [searchTerm], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (result.length > 0) {
        console.log(result);
        res.status(200).json({
          message: `Showing result for ${query} `,
          data: result,
        });
      }
      if (result.length == 0) {
        console.log(result);
        res.status(400).json({
          message: `${query} is not available `,
          data: result,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const PrevUpdateCart = (req, res) => {
  const menu = req.body.menu;
  const quantity = req.body.quantity;
  const userId = req.body.Id;
  console.log(menu);
  console.log(quantity);
  console.log(userId);

  //check if order already exists
  const checkquery = "SELECT * FROM cart WHERE menuId = ?";
  try {
    pool.query(checkquery, [menu.menuId], (error, results) => {
      if (error) return res.status(500).json(error.message);
      //Order already exist...increment
      if (results && results.length > 0) {
        console.log(results);
        const order = results[0];
        const updateQuery = "UPDATE cart SET menuQuantity = ? WHERE menuId =?";
        pool.query(
          updateQuery,
          [order.menuQuantity + quantity, menu.menuId],
          (error, result) => {
            if (error) return res.status(500).json(error.message);
            if (result) {
              const query = `SELECT * FROM cart`;
              console.log(req.body);
              pool.query(query, (err, data) => {
                if (err) return res.status(500).json({ message: err.message });
                if (data) {
                  res
                    .status(200)
                    .json({ message: "Cart Updated successfully", data: data });
                }
              });
            }
          }
        );
      }
      //order is new, insert
      else {
        console.log("orders is new, insert");
        //Insert new order
        try {
          const checkQuary =
            "insert into cart (menuId, menuItem, menuPrice, menuQuantity, menuImage, customerId) VALUES(?, ?, ?, ?, ?, ?)";
          pool.query(
            checkQuary,
            [
              menu.menuId,
              menu.menuItem,
              menu.menuPrice,
              quantity,
              menu.menuImage,
              userId,
            ],
            (err, result) => {
              if (err)
                return res.status(500).json({
                  message: "Cannot query the databse",
                  err: err.message,
                });
              if (result) {
                console.log(result);

                const query = `SELECT * FROM cart`;
                console.log(req.body);
                pool.query(query, (err, data) => {
                  if (err)
                    return res.status(500).json({ message: err.message });
                  if (data) {
                    res
                      .status(201)
                      .json({ message: "Menu added to cart", data: data });
                  }
                });
              }
            }
          );
        } catch (error) {
          console.log("Error occured during sorting", error);
          return res.status(500).json({
            message: "An internal error occurred",
            error: err.message,
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

const checkOutCartQuary = (req, res) => {
  console.log(req.body.headers);
  return;
  res.status(200).json({
    message: `Good to checkout`,
    data: result,
  });
};

const checkOutCart = (req, res) => {
  const orders = req.body.orders;
  const Id = req.body.Id;
  console.log(orders);
  console.log(Id);

  const query = `INSERT INTO orders ( menuItem, menuId, menuPrice, orderDate, menuCategory, menuQuantity, customerId ) VALUES ?`;
  const values = orders.map((order) => [
    order.menuItem,
    order.menuId,
    order.menuPrice,
    order.orderDate,
    order.menuCategory,
    order.menuQuantity,
    Id,
  ]);

  pool.query(query, [values], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (result) {
      res.status(200).json({ message: "Your order is on the way", data: data });
    }
  });

  return;
  res.status(200).json({
    message: `Good to checkout`,
    data: result,
  });
};

module.exports = {
  getAllMenu,
  sortByHighToLow,
  sortByLowToHigh,
  sortByAverageRating,
  sortBylatest,
  getAllBlog,
  getHotDealPizza,
  getAllDeals,
  getHotDealSushi,
  getHotDealSalads,
  getHotDealBurger,
  getHotDealDesert,
  getMenu,
  addMenuToCart,
  getCartMenu,
  getUserQuary,
  deleteCart,
  PrevUpdateCart,
  checkOutCartQuary,
  getRelatedMenu,
  checkOutCart,
};
