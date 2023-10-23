import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { topUps } from "./methods/topUp";
import { userMethods } from "./methods/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const agentProcedures = {
  agentsListByCoordinator: publicProcedure
    .input(z.number())
    .query(async (opts) => {
      const { input } = opts;
      const agentList = await prisma.user.findMany({
        where: {
          coordinator_by_id: input,
        }
      });
      return agentList;
    }),
  getUserByUserName: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const foundUser = await prisma.user.findUnique({
      where: {
        username: input
      }
    })
    return foundUser;
  }),
  agentUpdateBalance: publicProcedure
    .input(
      z.object({
        agent_id: z.number(),
        amount: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await prisma.user.findUnique({
        where: {
          id: input.agent_id,
        }
      });
      if(user){
        const new_balance = user.wallet_balance + input.amount;
        const update = await prisma.user.update({
          where: {
            id: input.agent_id,
          },
          data: {
            wallet_balance: new_balance
          }
        });
        return update;
      }
    }),
  topUpCreate: publicProcedure
    .input(
      z.object({
        coordinatorId: z.number(),
        agentId: z.number(),
        amount: z.number(),
        createdAt: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const topUp = await prisma.topUp.create({
        data: {
          coordinatorId: input.coordinatorId,
          agentId: input.agentId,
          amount: input.amount,
          createdAt: input.createdAt,
        }
      });
      return topUp;
    }),
  deductAgentBalance: publicProcedure
    .input(
      z.object({
        agentId: z.number(),
        deductAmount: z.number(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;
      const deductedBalance = await topUps.agentTopUp.deductBalance(
        input.agentId,
        input.deductAmount
      );
      return deductedBalance;
    }),
  findAgent: publicProcedure.query(async () => {
    const user = await prisma.user.findMany();
    return user;
  }),
};
