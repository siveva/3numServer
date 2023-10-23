const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();

   async function createUser() {
    const users = [
        {
         id: 1,
         firstname: "Jane",
         lastname: "Doe",
         type: "agent",
         username: "jane123",
         password: "janesecret",
         coordinator_by_id: 4,
         wallet_balance: 5000,
       },
       {
         id: 2,
         firstname: "Dennis",
         lastname: "Ro",
         type: "agent",
         username: "dennis123",
         password: "dennissecret",
         coordinator_by_id: 4,
         wallet_balance: 6000,
       },
       
       {
         id: 3,
         firstname: "William",
         lastname: "Spear",
         type: "agent",
         username: "william123",
         password: "williamsecret",
         coordinator_by_id: 4,
         wallet_balance: 7000,
       },
        {
         id: 4,
         firstname: "John",
         lastname: "Doe",
         type: "coordinator",
         username: "john143",
         password: "johnsecret",
         coordinator_by_id: 0,
         wallet_balance: 8000,
       },
       {
         id: 5,
         firstname: "Kent",
         lastname: "Telebanco",
         type: "agent",
         username: "kent123",
         password: "kentSecret",
         coordinator_by_id: 14,
         wallet_balance: 568,
       },
        {
         id: 6,
         firstname: "Dyniel",
         lastname: "Cataluna",
         type: "agent",
         username: "dyniel123",
         password: "dynielsecret",
         coordinator_by_id: 14,
         wallet_balance: 231,
       },
        {
         id: 7,
         firstname: "Richard",
         lastname: "Divino",
         type: "agent",
         username: "richard123",
         password: "richardsecret",
         coordinator_by_id: 15,
         wallet_balance: 678,
       },
       {
         id: 8,
         firstname: "Bryan",
         lastname: "Radores",
         type: "agent",
         username: "bryan123",
         password: "bryansecret",
         coordinator_by_id: 15,
         wallet_balance: 23443,
       },
        {
         id: 9,
         firstname: "Wayne",
         lastname: "Rondina",
         type: "agent",
         username: "waynero123",
         password: "waynesecret",
         coordinator_by_id: 15,
         wallet_balance: 345,
       },
        {
         id: 11,
         firstname: "Ryan",
         lastname: "Kim",
         type: "agent",
         username: "ryan123",
         password: "ryansecret",
         coordinator_by_id: 14,
         wallet_balance: 678,
       },
        {
         id: 13,
         firstname: "Jenny",
         lastname: "Gumolon",
         type: "agent",
         username: "jenny123",
         password: "jennysecret",
         coordinator_by_id: 15,
         wallet_balance: 1455,
       },
        {
         id: 14,
         firstname: "Roy",
         lastname: "Evangelista",
         type: "coordinator",
         username: "roycoordinator",
         password: "roycoordinator",
         coordinator_by_id: 7,
         wallet_balance: 10000,
       },
        {
         id: 15,
         firstname: "Alvie",
         lastname: "Balquin",
         type: "coordinator",
         username: "alviecoordinator",
         password: "alviecoordinator",
         coordinator_by_id: 8,
         wallet_balance: 10000,
       }]
     const newUser = await prisma.user.createMany({
       data: users,
     });
     console.log('Created user:', newUser);
   }

   createUser()
     .catch((error) => {
       console.error('Error creating user:', error);
     })
     .finally(async () => {
       await prisma.$disconnect();
     });