import { createClient } from "redis";
import { dotenv } from "dotenv";

export const publisher: ReturnType<typeof createClient> = createClient({
    url: process.env.REDIS_URL
}).on("Redis error", (error) => {
    logger.error("Redis Error", error)
})