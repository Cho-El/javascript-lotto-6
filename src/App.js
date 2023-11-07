import Input from "./domain/Input.js"
import { Console } from "@woowacourse/mission-utils";
import calculatorUtils from './utils/calculatorUtils.js'
import Output from './domain/Output.js'
import creatorUtils from "./utils/creatorUtils.js";

class App {
  #price;
  #amount;
  #lottos;
  async play() {
    await this.#executePurchaseLotto();
    this.#executePublishLotto();
  }

  async #executePurchaseLotto() {
    const input = new Input()
    // 입력 받기
    this.#price = await input.lottoPriceInput()
  }
  #executePublishLotto() {
    const output = new Output()
    this.#amount = calculatorUtils.getLottoAmountByPrice(this.#price)
    output.printAmount(this.#amount)
    this.#lottos = creatorUtils.makeLottoUpToAmount(this.#amount)
    this.#lottos.forEach(element => {
      Console.print(element.getLottoNums())
    });
  }
}

export default App;
