import { users } from "../../data/userData";

export const userMethods = {
  findMany: async () => users,
  findById: async (id: number) => users.find((user) => user.id === id),
  findByUsername: async (username: string) =>
    users.find((user) => user.username === username),
  findByCoordinatorId: async (id: number) =>
    users.filter((user) => user.coordinator_by_id === id),
};
