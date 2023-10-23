import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { router } from "./trpc";
import { betProcedures } from "./procedures/bet";
import { agentProcedures } from "./procedures/agent";

const appRouter = router({
  ...betProcedures,
  ...agentProcedures,
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3001);
console.log("Running on 3001");
