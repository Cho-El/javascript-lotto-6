class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNums() {
    return this.#numbers
  }

  setLottoNums(numbers) {
    this.numbers = numbers
  }

  compareLotto(lotto){
    // 개수를 리턴해주는 로직
    // 계산해주는 로직
    // return으로는 몇개맞았는지하고 얼마 이득을 봤는지?
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
