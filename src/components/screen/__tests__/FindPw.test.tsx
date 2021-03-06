import 'react-native';
import * as React from 'react';
import findPw from '../Screen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';

describe('rendering test', () => {
  const wrapper = shallow(
    <findPw />,
  );

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
