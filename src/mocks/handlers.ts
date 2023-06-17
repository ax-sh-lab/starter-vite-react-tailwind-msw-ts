// src/mocks/handlers.ts
import { rest } from "msw";
import { annotateHandler } from "./annotateHandler";

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", null),

  // Handles a GET /user request
  rest.get("/user", null),
  annotateHandler,
];
