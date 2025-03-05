import { Redis } from "ioredis";
import { promisify } from "util";

const redisClient = new Redis();

/**
 * Obtém dados do Redis
 * @param key Obtém os dados da chave armazenada
 * @returns string | null | undefined
 */
function getRedis(key: string) {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(key);
}

/**
 * Define dados no Redis
 * @param key Chave do registro que salvará no Redis
 * @param value Informação para salvar (enviar em string mesmo que seja um json)
 * @retruns unknown
 */
function setRedis(key: string, value: string) {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient);
  return syncRedisSet(key, value);
}

async function main() {
  await setRedis("mykey", "Olá Redis!");
  const mykey = await getRedis("mykey");
  console.log("minha chave:", mykey);
}
