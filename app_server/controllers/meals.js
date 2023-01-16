/* GET travel view */
const meals = (req, res) => {
  res.render("meals", { title: "Foods - Travlr Getaways" });
};

module.exports = {
  meals,
};
