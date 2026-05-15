import express, { Express } from "express";
import cors from "cors";
import { DemoResponse, PingResponse } from "@shared/api";

export function createServer(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/ping", (req, res) => {
    const response: PingResponse = {
      message: "pong",
      timestamp: Date.now(),
    };
    res.json(response);
  });

  app.get("/api/demo", (req, res) => {
    const response: DemoResponse = {
      message: "Hello from the Express server!",
    };
    res.json(response);
  });

  // Health check
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return app;
}
