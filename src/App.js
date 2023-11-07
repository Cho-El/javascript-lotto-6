import Input from "./views/Input.js"
import calculatorUtils from './utils/calculatorUtils.js'
import Output from './views/Output.js'
import creatorUtils from "./utils/creatorUtils.js";

class App {
  #price;
  #amount;
  #lottos;
  async play() {
    await this.#executePurchaseLotto()
    this.#executePublishLotto()
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
    output.printAllLottos(this.#lottos)
  }

  #executeWinning() {
    
  }
}

export default App;
