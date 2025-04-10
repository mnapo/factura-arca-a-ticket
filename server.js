const path = require("path");
const fastify = require("fastify")({logger: false,});

fastify.register(require("@fastify/static"), {root: path.join(__dirname, "public"), prefix: "/",});

fastify.get("/", function (request, reply) {return reply.view("/src/index.html");});
fastify.get("/ticket", function (request, reply) {return reply.view("src/ticket.html");});

async function parseFile(reply) {}

fastify.post("/fileupload", async function (request, reply) {
  let form = new formidable.IncomingForm();
  let params = {};
  const parts = request.parts();
  try{
    for await (const part of parts) {
      if (part.file){
        newFilename = part.filename;
        await pump(part.file, fs.createWriteStream("public/factura.pdf"))
        params = await parseFile(reply).then(()=>{
        });
      }
    }
  } finally{}
});

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
