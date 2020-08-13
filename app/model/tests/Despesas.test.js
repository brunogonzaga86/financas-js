import { Despesa } from '../Despesa';

test('Adicionando uma despesa no array', () => {
  let despesas = new Despesa();
  despesas.addDespesa('teste', 1);
  console.log(despesas);
  expect(despesas.length).toBe(4);
});