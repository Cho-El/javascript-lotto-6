import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js"
class Input {
    async lottoPriceInput() {
            const price = await Console.readLineAsync(MESSAGE.inputMessage.LOTTO_AMOUNT)
            this.#lottoPriceValidate(price)
            return Number(price)
    }
    #lottoPriceValidate(price) {
        if (isNaN(price)) {
            throw new Error("[ERROR] 숫자를 입력해주세요.")
        } else if (Number(price) % 1000 !== 0) {
            throw new Error("[ERROR] 1000원 단위로 입력해주세요.")
        } else {
            return
        }
    }
}

export default Input