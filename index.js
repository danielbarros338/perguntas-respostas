const app = require("./src/config/express");

app.listen(process.env.PORT || 3030, () => console.log(`Server online on port: ${process.env.PORT}`));
