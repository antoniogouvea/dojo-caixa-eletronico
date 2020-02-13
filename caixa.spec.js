var expect = require('expect');
var caixa = require('./caixa.js');

describe('testes caixa.js', function(){
    it('deve converter 180', function(done) {
        var result = caixa.getNotas(180);
        expect(JSON.stringify(result)).toBe("[100,50,20,10]");
        done();
    });
    it('deve converter 330', function(done) {
        var result = caixa.getNotas(330);
        expect(JSON.stringify(result)).toBe("[100,100,20,10]");
        done();
    });
    it('deve converter 90', function(done) {
        var result = caixa.getNotas(90);
        expect(JSON.stringify(result)).toBe("[50,20,20]");
        done();
    });
    it('deve converter 340', function(done) {
        var result = caixa.getNotas(340);
        expect(JSON.stringify(result)).toBe("[100,100,100,20,20]");
        done();
    });
    it('deve converter 40', function(done) {
        var result = caixa.getNotas(40);
        expect(JSON.stringify(result)).toBe("[20,20]");
        done();
    });
    it('deve converter 100', function(done) {
        var result = caixa.getNotas(100);
        expect(JSON.stringify(result)).toBe("[100]");
        done();
    });
    it('deve converter 0', function(done) {
        var result = caixa.getNotas(0);
        expect(JSON.stringify(result)).toBe("[]");
        done();
    });
    it('deve tentar converter 15 gerando falso', function(done) {
        var result = caixa.getNotas(15);
        expect(JSON.stringify(result)).toBeFalsy();
        done();
    });
    it('deve tentar converter 1 gerando falso', function(done) {
        var result = caixa.getNotas(1);
        expect(JSON.stringify(result)).toBeFalsy();
        done();
    });
    it('deve tentar converter -1 gerando falso', function(done) {
        var result = caixa.getNotas(-1);
        expect(JSON.stringify(result)).toBeFalsy();
        done();
    });
    it('deve tentar converter 101 gerando falso', function(done) {
        var result = caixa.getNotas(101);
        expect(JSON.stringify(result)).toBeFalsy();
        done();
    });
});
