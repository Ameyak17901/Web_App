exports.get = (req, res) => {
  res.send(path.join(__dirname + "index.html"));
};
