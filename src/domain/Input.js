import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js"
class Input {
    async lottoPriceInput() {
            const price = await Console.readLineAsync(MESSAGE.inputMessage.LOTTO_AMOUNT)
            this.#lottoPriceValidate(price)
            .catch((err) => {
                Console.print(err.message)
                return this.lottoPriceInput()
            })
            return Number(price)
    }
    #lottoPriceValidate(price) {
        return new Promise((resolve, reject) => {
            if (isNaN(price)) {
                reject(new Error("[ERROR] 숫자를 입력해주세요."))
            } else if (Number(price) % 1000 !== 0) {
                reject(new Error("[ERROR] 1000원 단위로 입력해주세요."))
            } else {
                resolve()
            }
        })
        
    }
}

export default Input