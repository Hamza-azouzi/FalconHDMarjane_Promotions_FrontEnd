"Use Strict";

let axios = require("axios");

exports.manageCenterLogin = (req, res) => {
  axios
    .post("http://localhost:3001/admin/login", {
      email: req.body.email,
      password: req.body.password,
    })
    .then((response) => {
      if (response.data.token) {
        let loggedToken = response.data.token,
          loggedCenter = response.data.centerId,
          config = {
            headers: { Authorization: `Bearer ${loggedToken}` },
          };
        // console.log(loggedToken);

        axios
          .get("http://localhost:3001/admin/promotions", config)
          .then((response) => {
            let promotions = response.data.promotions;
            console.log(response.data.promotions);

            axios
              .get("http://localhost:3001/admin/products", config)
              .then((response) => {
                let products = response.data.products;
                console.log(response.data.products);

                res.render("centerDashboard", {
                  loggedToken,
                  loggedCenter,
                  promotions,
                  products,
                });
              });
          });
      } else {
        // console.log(response.data.message);
        res.render("centerManagerLogin");
      }
    })
    .catch((err) => {
      // console.log(err);
    });
};

exports.manageAisleLogin = (req, res) => {
  axios
    .post("http://localhost:3001/manager/login", {
      email: req.body.email,
      password: req.body.password,
    })
    .then((response) => {
      if (response.data.token) {
        let loggedToken = response.data.token;
        console.log(loggedToken);
        res.render("aisleDashboard", {
          loggedToken,
        });
      } else {
        // console.log(response.data.message);
        res.render("aisleManagerLogin");
      }
    })
    .catch((err) => {
      // console.log(err);
    });
};
exports.manageAdminLogin = (req, res) => {
  axios
    .post("http://localhost:3001/super/login", {
      email: req.body.email,
      password: req.body.password,
    })
    .then((response) => {
      if (response.data.token) {
        let loggedToken = response.data.token;
        console.log(loggedToken);
        res.render("adminDashboard", {
          loggedToken,
        });
      } else {
        // console.log(response.data.message);
        res.render("generalAdminLogin");
      }
    })
    .catch((err) => {
      // console.log(err);
    });
};
