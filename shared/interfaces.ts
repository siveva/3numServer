export type DrawType = "FIRST" | "SECOND" | "THIRD";
export type BetType = "RUMBLE" | "STRAIGHT";
export type Bet = {
    id?: number;
    agentId: number;    
    drawType?: DrawType;
    betType: BetType;
    combination: number;
    amount: number;
    createdAt?: Date;
};