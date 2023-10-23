import { z } from "zod";
import { BetType, DrawType } from "../shared/interfaces";
import { publicProcedure, router } from "../trpc";
import { filterInRecentBet } from "../utils/utils";
import { betMethods } from "./methods/bets";

const drawType: z.ZodType<DrawType> = z.enum(["FIRST", "SECOND", "THIRD"]);
const betType: z.ZodType<BetType> = z.enum(["RUMBLE", "STRAIGHT"]);

export const betProcedures = {
  betCreate: publicProcedure
    .input(
      z.object({
        agentId: z.number(),
        betType: betType,
        combination: z.number(),
        amount: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await betMethods.create(input);
      return user;
    }),
  getRecentBetsByAgentId: publicProcedure
    .input(z.number())
    .query(async (opts) => {
      const { input } = opts;
      const bets = await betMethods.findByAgentId(input);
      const recentBets = filterInRecentBet(bets);
      return recentBets;
    }),
  getAllBetsByAgentId: publicProcedure.input(z.number()).query(async (opts) => {
    const { input } = opts;
    const bets = await betMethods.findByAgentId(input);
    return bets;
  }),
};
