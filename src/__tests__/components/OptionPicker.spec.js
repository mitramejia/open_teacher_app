import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OptionPicker from '../../components/OptionPicker';

it('renders a tutor search form', () => {
  const data = ['Física', 'Matemáticas', 'Biologia'];
  const renderer = new ShallowRenderer();
  renderer.render(<OptionPicker data={data} icon="ios-book-outline" name="Test" />);
  const result = renderer.getRenderOutput();
  console.log(result.type);
  console.log(result.props.children);
});
