//import all required packages
const Contact = require("../model/contacts");
module.exports.read = async (req, res) => {
  const data = await Contact.find({});
  return res.render("contact", {
    title: "Contact List | App",
    data: data,
  });
};

//add data to db
module.exports.create = async (req, res) => {
  try {
    const { name, phone } = req.body;
    console.log("Name is : ", name);
    console.log("Phone is : ", phone);
    await Contact.create({ name, phone });
    console.log("record creates successfully");
    return res.redirect("back");
  } catch (err) {
    console.log("Error in create controller ", err);
  }
};

//delete data from db

module.exports.delete = async (req, res) => {
  try {
    let id = req.params.id;
    console.log("Id is : ", id);
    await Contact.findByIdAndDelete(id);
    console.log("record deleted succesfully");
    return res.redirect("back");
  } catch (err) {
    console.log("Error in delete controller", err);
  }
};
//update data to db
module.exports.edit = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  const data = await Contact.find({});
  return res.render("update", {
    title:"Update Contact ",
    data,
    id
  });
};
module.exports.update = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const id = req.params.id;
    console.log("Name", name);
    console.log("Phone", phone);
    console.log("Id", id);
    await Contact.findByIdAndUpdate(id, { name, phone }, { new: true });
    console.log("record updated successfully ");
    return res.redirect("/");
  } catch (err) {
    console.log("error occured in update controller", err);
  }
};
