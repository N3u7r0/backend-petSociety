import "dotenv/config";
import express from "express";
import {mascotasRoute} from "./mascotas-service/routes/mascotasRoute.js";
import {usuariosRoute} from "./usuarios-service/routes/usuariosRoute.js";
import {refugioRoute} from "./refugio-service/routes/refugioRoute.js";

const app = express();

// middleware para parsear JSON
app.use(express.json());

app.get("/", (req, res) => {
  return res.end("API petSociety. Brian Fabian Sabatini");
  
});

//rutas
app.use("/api/mascotas/gatos", mascotasRoute);
app.use("/api/mascotas/perros", mascotasRoute);
app.use("/api/mascotas", mascotasRoute);
app.use("/api/usuarios", usuariosRoute);
app.use("/api/refugio", refugioRoute);

//serv
try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(
      `El servidor esta escuchando en el puerto http://localHost:${PORT}`
    )
  );
} catch (err) {
  console.log(err);
}
