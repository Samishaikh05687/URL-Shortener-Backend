const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const urlRoute = require("./route/url");
const staticRoute = require("./route/staticRouter");
const URL = require("./models/url");

const app = express();
const PORT = 9000;

mongoose
  .connect("mongodb://localhost:27017/urlShortner")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use("/url", urlRoute);
app.use("/",staticRoute);


app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
