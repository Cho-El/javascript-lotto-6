import Input from "./domain/Input.js"

class App {
  constructor() {
    this.Input = new Input()
  }
  async play() {
    this.Input.lottoAmountInput()
  }
}

export default App;
