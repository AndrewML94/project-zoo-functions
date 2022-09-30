const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica a quantidade de elefantes retornados.', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants()).toEqual(undefined);
    expect(handlerElephants('')).toEqual(null);
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se é retornado um array com o nome de todos os elefantes.', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica a idade média dos elefantes.', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica a localização dos elefantes.', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Verifica a popularidade dos elefantes.', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Verifica os dias que os elefantes estarão disponíveis.', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
