const calculator =  require('../../src/calculator');
const expect = require('chai').expect;

describe('Probando la calculator', () =>{
  it('Debe devolver 6', () => {
    const resultado = calculator.add(2, 4);

    expect(resultado).to.equal(6);
  });
  it('Debe devolver 8', () => {
    const resultado = calculator.add(2, 6);

    expect(resultado).to.equal(8);
  });
});
