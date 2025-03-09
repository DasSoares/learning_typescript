import { Redis } from "ioredis";
import { exit } from "process";

const redisClient = new Redis({
  host: "localhost",
  port: 6379,
});

redisClient.on("connect", () => {
  console.info("Redis conectado");
});

redisClient.on("error", () => {
  console.warn("Erro ao conectar ao redis");
});

async function main() {
  const key = "carro";
  const carro = {
    nome: "Mazda",
    modelo: "rx-7",
  };
  const getCarroBefore = await redisClient.get(key);
  console.log("Carro antes", getCarroBefore);
  await redisClient.set("carro", JSON.stringify(carro));
  const getCarroAfter = await redisClient.get(key);
  console.log("Carro depois", getCarroAfter);
  redisClient.del(key);
  exit(1);
}

main();
