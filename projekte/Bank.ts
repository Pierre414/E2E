import { Expression } from "./Money";
import { Money } from "./Money";
import { Sum } from "./Sum";

export class Bank implements Expression {
  reduce(source: Expression, to: String) {
    return source.reduce(this, to);
  }

  // rate(from: String, to: String): number {
  //   const rate = new Map<Pair, number>();
  //   rate.set({ from: "CHF", to: "Euro" }, 3);
  //   rate.set({ from: "CHF", to: "USD" }, 2);
  //   if (rate.has({ from: from, to: to })) {
  //     return rate.get({ from: from, to: to });
  //   } else {
  //     return 1;
  //   }
  // }
  rate(from: String, to: String): number {
    if (from == "CHF" && to == "USD") {
      return 2;
    } else if (from == "CHF" && to == "Euro") {
      return 3;
    } else {
      return 1;
      89;
    }
  }
}
interface Pair {
  readonly from: String;
  readonly to: String;
}
