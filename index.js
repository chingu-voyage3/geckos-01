const express = require("express");
require("./services/passport");
const app = express();
require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send("This is a test");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("p1xt-guide server started...");
});
