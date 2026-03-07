const Redis =require("ioredis").default;

const redis  =new Redis({
    host: process.env.RedisHost,
    port: process.env.RedisPort,
    password: process.env.RedisPassword
})
redis.on("connect",()=>{
    console.log("Connected to Redis");
})
redis.on("error",(err)=>{
    console.error("Redis connection error:",err);
})
module.exports = redis;