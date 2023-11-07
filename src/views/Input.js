import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js"
class Input {
    async lottoPriceInput() {
            const price = await Console.readLineAsync(MESSAGE.inputMessage.LOTTO_AMOUNT)
            try {
                this.#lottoPriceValidate(price)
            } catch(err) {
                Console.print(err.message)
                return this.lottoPriceInput()
            }
            return Number(price)
    }
    #lottoPriceValidate(price) {
        if (isNaN(price)) {
            throw new Error(MESSAGE.error.inputError.ONLY_NUM)
        } else if (Number(price) % 1000 !== 0) {
            throw new Error(MESSAGE.error.inputError.ONLY_1000_UNIT)
        } else {
            return
        }

    }

    async winningLottoInput() {
        
    }
}

export default Input