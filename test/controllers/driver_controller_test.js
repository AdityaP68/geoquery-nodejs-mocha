const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
//because moca, node and mongoose dont work well with each other
const Driver = mongoose.model("driver");

describe("Drivers controller", () => {
  it("Post to /api/drivers creates a new driver", (done) => {
    //Driver.collection.drop()
    //console.log(Driver.collection.collectionName)
    Driver.count().then((count) => {
      //console.log(count+1)
      request(app)
        .post("/api/drivers")
        .send({ email: "test@test.com", driving: true })
        .end((err, res) => {
          //console.log('less see',err, res.body)
          Driver.count().then(newCount=>{
            assert(count +1 === newCount)
            //console.log(count +1 === newCount)
            done();
          })
        });
    });
  });
});
