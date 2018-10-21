const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

describe('#add', () => {
  it('should add two numbers', () => {
    var res = utils.add(33,66);

    expect(res).toBe(99).toBeA('number');

  });


    it('should async add two numbers', (done) => {
      utils.asyncAdd(4,3,(sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
})


  it("Should get the square of the number", () => {
    var res = utils.square(9.5);

    expect(res).toBe(90.25).toBeA('number');

  })


  it('should verify first and last names are set', () => {
    var userObj = {age: 20, location: 'kobani'};
    var res = utils.setName(userObj,'John Vattic');
    // expect(res.firstName).toBe("John");
    // expect(res.lastName).toBe("Vattic");
    expect(res).toInclude({
      firstName: 'John',
      lastName: 'Vattic'
    })
    expect(res).toBeA("object");
  });


  it('should async square the given number', (done) => {
    utils.asyncSquare(6,(square) => {
      expect(square).toBe(36).toBeA('number');
      done();
    });
  });

});
