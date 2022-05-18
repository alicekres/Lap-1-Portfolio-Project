const generalData = require("../data/generalData.json");
const placesData = require("../data/placesData.json");
const attractionsData = require("../data/attractionsData.json");

//Universal Class for creating any kind of post

class DataModel {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.type = data.type;
    this.reactions = data.reactions;
    this.replies = data.replies;
  }

  /* static findById(id) {
    try {
      const ?Data = ?sData.filter((?) => ?.id === id)[0];
      const ? = new ?(?Data);
      return ?;
    } ?ch (err) {
      throw new Error("That ? does not exist!");
    }
  } */

  static create(data) {
    const newId = eval(data.type).length + 1;
    const newData = new DataModel({ id: newId, ...data });
    eval(data.type).push(newData);
    return newData;
  }

  /*  destroy() {
    const data = eval(data.type).filter((data) => data.id === this.id)[0];
    eval(data.type).splice(eval(data.type).indexOf(data), 1);
  } */
}

module.exports = DataModel;
