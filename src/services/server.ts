import { Elysia } from "elysia";

// import { initMiddleware } from "@middleware";

export const startServer = async () => {
  const app = new Elysia();
  // initMiddleware(app);

  app.listen(Bun.env.PORT, () =>
    console.log(app.server?.hostname, app.server?.port)
  );
};
