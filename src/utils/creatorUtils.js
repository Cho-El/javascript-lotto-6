import { Random } from "@woowacourse/mission-utils"
import Lotto from './../domain/Lotto.js';
const creatorUtils = {
    makeLottoUpToAmount(amount) {
        const result = [];
        for (let i = 0; i < amount; i++) {
            result.push(this.makeNumToLotto())
        }
        return result
    },
    makeNumToLotto() {
        const numbers = this.makeRandomNum()
        this.sortArray(numbers)
        return new Lotto(numbers)
    },
    sortArray(numbers) {
        numbers.sort((a,b) => a - b)
    },
    makeRandomNum() {
        return Random.pickUniqueNumbersInRange(1, 45, 6)
    }
}

export default creatorUtils