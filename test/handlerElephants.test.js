const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se count é = a 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se names é = a Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Para o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Passando por argumento um objeto vazio ({}) deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('xablau')).toBe(null);
  });
});
