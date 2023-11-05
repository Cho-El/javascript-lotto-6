import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js"
class Input {
    lottoAmountInput() {
        Console.readLineAsync(MESSAGE.inputMessage.lottoAmount)
    }
}

export default Input