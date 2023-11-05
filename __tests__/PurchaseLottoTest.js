import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Input from "../src/domain/Input.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
  
      return Promise.resolve(input);
    });
  };
  
  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };
  
  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  const runException = async (input) => {
    // given
    const logSpy = getLogSpy();
    
    const RANDOM_NUMBERS_TO_END = [1,2,3,4,5,6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];
  
    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([input, ...INPUT_NUMBERS_TO_END]);
  
    // when
    const app = new App();
    await app.play();
  
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  }
  
  describe("로또 구입 테스트", () => {
    test("로또 구입 금액 요구 문구 출력", async () => {
      // given

      const RANDOM_NUMBERS_TO_END = [1,2,3,4,5,6];
      const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];
    
      mockRandoms([RANDOM_NUMBERS_TO_END]);
      mockQuestions([...INPUT_NUMBERS_TO_END]);

      // when
      const app = new App()
      await app.play()

      // then
      expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(expect.stringContaining("구입금액을 입력해 주세요."))
    })
  })