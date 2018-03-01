const React = require('react');
const subject = require('./subject');
const expect = require('chai').expect;
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

function renderComponent() {
  class MyComponent extends React.Component {
    render() {
      throw new Error();
    }
  }

  Enzyme.mount(<MyComponent />);
}

describe('async test', () => {
  it('works', () => {
    renderComponent();
  });

  it('makes it break', () => {
    expect(1 + 1).to.eq(2);
  });
});
