import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js"
class Input {
    async lottoPriceInput() {
            const price = await Console.readLineAsync(MESSAGE.inputMessage.LOTTO_AMOUNT)
            try {
                this.#validateLottoPrice(price)
            } catch(err) {
                Console.print(err.message)
                return this.lottoPriceInput()
            }
            return Number(price)
    }
    #validateLottoPrice(price) {
        if (isNaN(price)) {
            throw new Error(MESSAGE.error.inputError.ONLY_NUM)
        } 
        if (Number(price) % 1000 !== 0) {
            throw new Error(MESSAGE.error.inputError.ONLY_1000_UNIT)
        }
        return

    }

    async winningLottoInput() {
        const winningLottoNums = await Console.readLineAsync(MESSAGE.inputMessage.WINNING_LOTTO_NUM)
    }

    #validateWinningLottoNums(numbers) {
        const nums;
        if (!numbers.include(",")) {
            throw new Error(MESSAGE.error.inputError.INCLUDE_COMMA)
        }
        if (numbers) {
            const nums = 10; 
        }

    #splitByComma(array) {
        return array.split(",")
    }

    
}

export default Input