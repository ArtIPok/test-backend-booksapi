const expect = require('chai').expect;
const formatFullname = require('../formatFullname');

describe('FormatFullname', () => {
  it('should return en error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
  });

  it('should return en error if "fullName" arg is a string consists of one word or more then two words', () => {
    expect(formatFullname('Tomy John Doe')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });

  it('should return correctly format string arg "fullName" as "Firstname Lastname"', () => {
    expect(formatFullname('JoHn doe')).to.equal('John Doe');
    expect(formatFullname('JOHn dOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
});
