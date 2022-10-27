const Driver = require("../models/driver");

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },
  create(req, res) {
    const driverProps = req.body;
    //console.log("test", driverProps);

    Driver.create(driverProps)
      .then((result) => {
        //console.log(result);
        res.send(result)
      })
      .catch((err) => console.log(err));
  },
};
