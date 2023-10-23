import { Bet, DrawType } from "../shared/interfaces";

export function evaluateDrawType(date: Date): DrawType {
  const time = date.getHours();
  const minute = date.getMinutes();
  const firstDrawTime = 8;
  const secondDrawTime = 14;
  const thirdDrawTime = 21;

  let drawType: DrawType = "FIRST";

  if (time <= firstDrawTime && minute === 0) {
    drawType = "FIRST";
  } else if (time <= secondDrawTime && minute === 0) {
    drawType = "SECOND";
  } else if (time <= thirdDrawTime && minute === 0) {
    drawType = "THIRD";
  }

  return drawType;
}

export const filterInRecentBet = (bets: Bet[]) => {
  const recentBet: Bet[] = [];
  const currentTimestamp = new Date().getTime();
  const millisecondsInDay = 24 * 60 * 60 * 1000; // 24 hours

  bets.forEach((bet) => {
    const betTimestamp = bet.createdAt ? new Date(bet.createdAt).getTime() : 0;
    const timestampSinceCreated = currentTimestamp - betTimestamp;
    if (timestampSinceCreated < millisecondsInDay) {
      recentBet.push(bet);
    }
  });

  return recentBet;
};
