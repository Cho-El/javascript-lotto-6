import { Console } from "@woowacourse/mission-utils";
class Output {
    printAmount(amount) {
        Console.print(`${amount}` + "개를 구매했습니다.")
    }
}

export default Output