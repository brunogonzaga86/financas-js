export default class Despesa {
  constructor() {
    this.despesas = [
      { id: 1, descricao: 'Financeamento Ecosport', valor: 1500, taPago: false },
      { id: 2, descricao: 'Contas Casa', valor: 2200, taPago: false },
    ]
  }

  addDespesa(descricao, valor) {
    const despesa = {
      id: this.despesas.length > 0 ? this.despesas[this.despesas.length - 1].id + 2 : 1,
      descricao,
      valor,
      taPago: false
    }

    this.despesas.push(despesa);
  }
}