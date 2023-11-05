describe("#reset mocks with spyOn", () => {
    const mockDate = new Date("2019-01-01");
    const originalDate = new Date("2020-12-25");
    let spy = null;
  
    beforeEach(() => {
      //  고정값이 반환되도록 한다.
      spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    });
  
    afterEach(() => {
      spy.mockRestore();
    });
  
    it("jest.clearAllMocks", () => {
      // Date에 인수로 다른 일자를 대입해도, mockDate가 반환된다.
      expect(new Date("2020-02-14")).toEqual(mockDate);
  
      // 인수의 확인
      expect(spy.mock.calls).toEqual([["2020-02-14"]]);
  
      // mock함수의 반환값이 오브젝트인 경우, mockInstance는 작성되지 않는다. 
      // Jest의 issue와 관련되어 있으므로 URL을 참고→https://github.com/facebook/jest/issues/10965
      expect(spy.mock.instances).toEqual([{}]);
  
      // 결과의 확인
      expect(spy.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      // 모든 mock 속성을 리셋한다.
      jest.clearAllMocks();
  
      // mock의 속성이 모두 리셋되어 있는가를 확인한다.
      expect(spy.mock.calls).toEqual([]);
      expect(spy.mock.instances).toEqual([]);
      expect(spy.mock.results).toEqual([]);
  
      // mock함수는 계속해서 이용할 수 있다.
      expect(new Date("2020-12-25")).toEqual(mockDate);
    });
  
    it("jest.resetAllMocks", () => {
      expect(new Date("2020-12-25")).toEqual(mockDate);
      expect(spy.mock.calls).toEqual([["2020-12-25"]]);
      expect(spy.mock.instances).toEqual([{}]);
      expect(spy.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      //모든 mock 속성을 리셋한다. 설정한 mock함수를 클리어한다.
      jest.resetAllMocks();
  
      // mock의 속성이 모두 리셋된다.
      expect(spy.mock.calls).toEqual([]);
      expect(spy.mock.instances).toEqual([]);
      expect(spy.mock.results).toEqual([]);
  
      // mock 함수는 리셋되어, 기본값으로 `{}`가 반환된다.
      expect(new Date("2020-12-25")).toEqual({});
    });
  
    it("jest.restoreAllMocks", () => {
      expect(new Date("2020-12-25")).toEqual(mockDate);
      expect(spy.mock.calls).toEqual([["2020-12-25"]]);
      expect(spy.mock.instances).toEqual([{}]);
      expect(spy.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      //모든 mock함수를 오리지널 함수로 되돌린다.
      jest.restoreAllMocks();
  
      // mock의 속성은 리셋되지 않는다.
      expect(spy.mock.calls).toEqual([["2020-12-25"]]);
      expect(spy.mock.instances).toEqual([{}]);
      expect(spy.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      // mock함수가 리셋되어, 오리지널의 Date함수가 실행된다.
      expect(new Date("2020-12-25")).toEqual(originalDate);
    });
  });
  
  describe("#reset mocks with jest.fn", () => {
    const mockDate = new Date("2019-12-21"); 
    const originalDate = new Date("2020-12-25");
  
    beforeEach(() => {
      Date = jest.fn(() => mockDate);
    });
  
    it("jest.clearAllMocks", () => {
      expect(new Date("2020-12-25")).toEqual(mockDate);
      expect(Date.mock.calls).toEqual([["2020-12-25"]]);
      expect(Date.mock.instances).toEqual([{}]);
      expect(Date.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      // 리셋
      jest.clearAllMocks();
  
      // mock의 속성이 모두 리셋된다.
      expect(Date.mock.calls).toEqual([]);
      expect(Date.mock.instances).toEqual([]);
      expect(Date.mock.results).toEqual([]);
  
      // mock함수는 계속해서 사용할 수 있다.
      expect(new Date("2020-12-25")).toEqual(mockDate);
    });
  
    it("jest.resetAllMocks", () => {
      expect(new Date("2020-12-25")).toEqual(mockDate);
      expect(Date.mock.calls).toEqual([["2020-12-25"]]);
      expect(Date.mock.instances).toEqual([{}]);
      expect(Date.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      jest.resetAllMocks();
  
      // mock의 속성이 모두 리셋된다.
      expect(Date.mock.calls).toEqual([]);
      expect(Date.mock.instances).toEqual([]);
      expect(Date.mock.results).toEqual([]);
  
      // mock함수는 리셋되어 기본값으로는 `{}`가 반환된다.
      expect(new Date("2020-12-25")).toEqual({});
    });
  
    it("jest.restoreAllMocks", () => {
      expect(new Date("2020-12-25")).toEqual(mockDate);
      expect(Date.mock.calls).toEqual([["2020-12-25"]]);
      expect(Date.mock.instances).toEqual([{}]);
      expect(Date.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      jest.restoreAllMocks();
  
      // mock의 속성은 리셋되지 않는다.
      expect(Date.mock.calls).toEqual([["2020-12-25"]]);
      expect(Date.mock.instances).toEqual([{}]);
      expect(Date.mock.results).toEqual([{ type: "return", value: mockDate }]);
  
      // spyOn의 경우와 달리, jest.fn으로 함수를 mock함수로 덮어쓴 경우는 restoreAllMocks를 이용해도 오리지널 함수로 돌아가지 않는다.
      expect(new Date("2020-12-25")).not.toEqual(originalDate);
      expect(new Date("2020-12-25")).toEqual(mockDate);
    });
  });