const app = require("express")();
const port = 3000;
const api = require("./api");
app.use(require("body-parser").json());

app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
