import Input from "./domain/Input.js"
import { Console } from "@woowacourse/mission-utils";
import Print from './domain/Output';
class App {
  #price;
  async play() {
    await this.#executePurchaseLotto();
  }

  async #executePurchaseLotto() {
    const input = new Input();
    // 입력 받기
    await input.lottoPriceInput()
    .then((res) => {
      this.#price = res;
    })
    .catch((err) => {
      Console.print(err)
      input.lottoPriceInput()
    })
  }
}

export default App;
