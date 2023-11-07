import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js";
class Output {
    printAmount(amount) {
        Console.print(`${amount}` + MESSAGE.outputMessage.LOTTO_AMOUNT)
    }
    printAllLottos(lottos) {
        lottos.forEach((lotto) => Console.print(lotto.getLottoNums()))
    }
}

export default Output