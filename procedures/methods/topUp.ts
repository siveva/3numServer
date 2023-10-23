import { users } from "../../data/userData";

interface TopUp {
  id: number;
  agent_id: number;
  amount: number;
  date: string;
  time: string;
}

const topUpData: TopUp[] = [];
export const topUps = {
  agentTopUp: {
    create: async (data: {
      agent_id: number;
      amount: number;
      date: string;
      time: string;
    }) => {
      const dataToPush: TopUp = { id: Number(topUpData.length + 1), ...data };
      topUpData.push(dataToPush);
      return dataToPush;
    },
    updateBalance: async (id: number, current_balance: number) => {
      let new_balance;
      const agent = users.find((user) => user.id === id);
      if (agent) {
        new_balance = agent.wallet_balance + current_balance;
        agent.wallet_balance = new_balance;
      }
      return agent?.wallet_balance;
    },
    deductBalance: async (agentId: number, deductAmount: number) => {
      const agent = users.find((user) => user.id === agentId);
      const userIndex = users.findIndex((user) => user.id === agentId);
      if (agent) {
        const newBalance = agent.wallet_balance - deductAmount;
        users[userIndex].wallet_balance = newBalance;
        console.log("User Data", users[userIndex]);
        return agent?.wallet_balance;
      }
    },
  },
};
