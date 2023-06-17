import { rest } from "msw";

type AnnotateBody = any;

type AnnotateResponse = any;

export const annotateHandler = rest.get<AnnotateBody, AnnotateResponse>(
  "/annotate",
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ foo: 8 }));
  }
);
