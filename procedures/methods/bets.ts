import { bets } from "../../data/betData";
import { evaluateDrawType } from "../../utils/utils";
import { Bet } from "../../shared/interfaces";

export const betMethods = {
  findMany: async () => bets,
  findByAgentId: async (agentId: number) =>
    bets.filter((bet) => bet.agentId === agentId),
  create: async (newBet: Bet) => {
    const currentDate = new Date();
    const draw = evaluateDrawType(currentDate);

    const createdBet = {
      id: bets.length + 1,
      drawType: draw,
      createdAt: currentDate,
      ...newBet,
    };

    bets.push(createdBet);
    return createdBet;
  },
};
