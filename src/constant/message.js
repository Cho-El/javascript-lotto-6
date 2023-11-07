const MESSAGE = Object.freeze({
    inputMessage: {
        LOTTO_AMOUNT: '구입금액을 입력해 주세요.\n',
        WINNING_LOTTO_NUM: '당첨 번호를 입력해 주세요.\n',
        BONUS_LOTTO_NUM: '보너스 번호를 입력해 주세요.\n'
      },
      outputMessage: {
        LOTTO_AMOUNT: '개를 구매했습니다.',
        WIN_RESULT_TITLE: '당첨 통계\n---\n',
        THREE_MATCHED: '3개 일치 (5,000원)',
        FOUR_MATCHED: '4개 일치 (50,000원)',
        FIVE_MATCHED: '5개 일치 (1,500,000원)',
        FIVE_AND_BONUS_MATCHED: '5개 일치, 보너스 볼 일치 (30,000,000원)',
        SIX_MATCHED: '6개 일치 (2,000,000,000원)',
      },
      error: {
        inputError: {
          ONLY_NUM: '[ERROR] 숫자를 입력해주세요.',
          ONLY_1000_UNIT: '[ERROR] 1000원 단위로 입력해주세요.',
          IN_RANGE: '[ERROR] 1 ~ 45 사이의 숫자만 입력해주세요.',
          NOT_DUPLICATE: '[ERROR] 중복되지 않는 숫자 6개를 입력해주세요.',
          ONLY_LEN_SIX: '[ERROR] 6개의 숫자를 입력해주세요.'
        }
      },
})

export default MESSAGE