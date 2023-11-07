class WinningLotto {
    #numbers;
    #bonus;

    getLottoNums() {
        return this.#numbers
    }

    getLottoBonus() {
        return this.#bonus
    }

    setLottoNums(numbers) {
        this.#numbers = numbers;
    }

    setLottoBonus(bonus) {
        this.#bonus = bonus
    }
}