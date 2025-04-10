const path = require("path");
const fastify = require("fastify")({logger: false,});

fastify.register(require("@fastify/static"), {root: path.join(__dirname, "public"), prefix: "/",});

fastify.listen(
  {port: process.env.PORT, host: "0.0.0.0"},
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("App funcionando ("+address+")");
  }
);
