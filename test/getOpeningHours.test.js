const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours é uma função.', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });
  it('Verifica se ao chamar a função vazia retorna o esperado.', () => {
    const result = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(result);
  });
  it('Verifica se é apresentado uma mensagem de erro ao preencher com uma string diferente do permitido.', () => {
    expect(() => getOpeningHours('day')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Verifica se parametros estão no formato adequado.', () => {
    expect(() => getOpeningHours('monday', '09:00')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Verifica se os parâmetros das horas estão no formato adequado.', () => {
    expect(() => getOpeningHours('monday', 'c9:00')).toThrow(/^The hour should represent a number$/);
  });
  it('Verifica se os parâmetros dos minutos estão no formato adequado.', () => {
    expect(() => getOpeningHours('monday', '09:c0')).toThrow(/^The minutes should represent a number$/);
  });
  it('Verifica se a hora está entre 0 - 12', () => {
    expect(() => getOpeningHours('monday', '13:00-am')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('Verifica se o minuto está entre 0 - 59', () => {
    expect(() => getOpeningHours('monday', '12:63-am')).toThrow(/^The minutes must be between 0 and 59$/);
  });
  it('Verifica se o zoológico está fechado.', () => {
    expect(getOpeningHours('monday', '09:00-am')).toEqual('The zoo is closed');
  });
  it('Verifica se o zoológico está aberto.', () => {
    expect(getOpeningHours('tuesday', '09:00-am')).toEqual('The zoo is open');
  });
});
