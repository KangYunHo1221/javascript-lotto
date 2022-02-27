import { LottoGame } from '../model/LottoGame.js';
import { validator } from '../utils.js';

test('로또 구매 금액을 입력할 수 있다.', () => {
  const lottoGame = new LottoGame();
  lottoGame.insertMoney(1000);
  expect(lottoGame.moneyInput).toBe(1000);
});

test('금액은 음수 일 수 없다.', () => {
  expect(() => {
    validator.isInputValid(-10);
  }).toThrow();
});

test('금액은 문자 일 수 없다.', () => {
  expect(() => {
    validator.isInputValid('abc');
  }).toThrow();
});

test('구매를 할 수 있다.', () => {
  const lottoGame = new LottoGame();
  lottoGame.insertMoney(3000);
  lottoGame.buyLotto();
  expect(lottoGame.lottoWallet.length).toBe(3);
});

test('로또 번호를 중복없이 자동으로 생성한다.', () => {
  const lottoGame = new LottoGame();
  lottoGame.insertMoney(1000);
  lottoGame.buyLotto();
  lottoGame.lottoWallet[0].makeLottoNumber();
  expect(Set(lottoGame.lottoWallet[0].numbers).size).toBe(7);
});
