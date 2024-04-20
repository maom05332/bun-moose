export interface IConfig {
  IS_PROD: boolean;
  PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
  JWT_EXPIRATION: string;
  API_KEY: string;
}

export const Config = {
  IS_PROD: Bun.env.NODE_ENV === "production",
  PORT: parseInt(Bun.env.PORT || "5000"),
  MONGO_URI: Bun.env.MONGO_URI || "mongodb://localhost:27017/discit",
  JWT_SECRET: Bun.env.JWT_SECRET || undefined,
  JWT_EXPIRATION: "7d",
  API_KEY: Bun.env.API_KEY || undefined,
} as IConfig;
