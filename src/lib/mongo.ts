"use server";
import mongoose from "mongoose";

let mongoClient: any = {};

export const client = async () => {
  try {
    if (mongoClient.isConnected) {
      return { mongoClient };
    }

    const {
      NEXT_PUBLIC_MONGO_USER,
      NEXT_PUBLIC_MONGO_PASSWORD,
      NEXT_PUBLIC_MONGO_PATH,
      NEXT_PUBLIC_MONGO_DB,
    } = process.env;
    const db = await mongoose.connect(
      `mongodb+srv://${NEXT_PUBLIC_MONGO_USER}:${NEXT_PUBLIC_MONGO_PASSWORD}@${NEXT_PUBLIC_MONGO_PATH}/${NEXT_PUBLIC_MONGO_DB}`,
      {
        maxPoolSize: 10,
      }
    );

    mongoClient.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw error;
  }
};

export const restClient = (handler: Function) => async (req: Request) => {
  try {
    if (mongoClient.isConnected) {
      return handler(req);
    }

    const {
      NEXT_PUBLIC_MONGO_USER,
      NEXT_PUBLIC_MONGO_PASSWORD,
      NEXT_PUBLIC_MONGO_PATH,
      NEXT_PUBLIC_MONGO_DB,
    } = process.env;
    const db = await mongoose.connect(
      `mongodb+srv://${NEXT_PUBLIC_MONGO_USER}:${NEXT_PUBLIC_MONGO_PASSWORD}@${NEXT_PUBLIC_MONGO_PATH}/${NEXT_PUBLIC_MONGO_DB}`,
      {
        maxPoolSize: 10,
      }
    );

    mongoClient.isConnected = db.connections[0].readyState;

    return handler(req);
  } catch (error) {
    throw error;
  }
};

export const actionClient =
  (handler: Function) =>
  async (...action: Parameters<any>) => {
    try {
      if (mongoClient.isConnected) {
        return handler(...action);
      }

      const {
        NEXT_PUBLIC_MONGO_USER,
        NEXT_PUBLIC_MONGO_PASSWORD,
        NEXT_PUBLIC_MONGO_PATH,
        NEXT_PUBLIC_MONGO_DB,
      } = process.env;
      const db = await mongoose.connect(
        `mongodb+srv://${NEXT_PUBLIC_MONGO_USER}:${NEXT_PUBLIC_MONGO_PASSWORD}@${NEXT_PUBLIC_MONGO_PATH}/${NEXT_PUBLIC_MONGO_DB}`,
        {
          maxPoolSize: 10,
        }
      );

      mongoClient.isConnected = db.connections[0].readyState;

      return handler(...action);
    } catch (error) {
      throw error;
    }
  };

export const pageClient =
  (handler: Function) =>
  async <T>(page: T) => {
    try {
      if (mongoClient.isConnected) {
        return handler(page);
      }

      const {
        NEXT_PUBLIC_MONGO_USER,
        NEXT_PUBLIC_MONGO_PASSWORD,
        NEXT_PUBLIC_MONGO_PATH,
        NEXT_PUBLIC_MONGO_DB,
      } = process.env;
      const db = await mongoose.connect(
        `mongodb+srv://${NEXT_PUBLIC_MONGO_USER}:${NEXT_PUBLIC_MONGO_PASSWORD}@${NEXT_PUBLIC_MONGO_PATH}/${NEXT_PUBLIC_MONGO_DB}`,
        {
          maxPoolSize: 10,
        }
      );

      mongoClient.isConnected = db.connections[0].readyState;

      return handler(page);
    } catch (error) {
      throw error;
    }
  };
