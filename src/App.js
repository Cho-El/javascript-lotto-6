import Input from "./domain/Input.js"
import { Console } from "@woowacourse/mission-utils";
import calculatorUtils from './utils/calculatorUtils.js'

class App {
  #price;
  #amount;
  async play() {
    await this.#executePurchaseLotto();
    // await this.#executePublishLotto();
  }

  async #executePurchaseLotto() {
    const input = new Input();
    // 입력 받기
    await input.lottoPriceInput()
    .then((res) => {
      this.#price = res;
    })
    .catch((err) => {
      Console.print(err.message)
      return this.#executePurchaseLotto()
    })
  }

  #executePublishLotto() {

  }
}

export default App;
