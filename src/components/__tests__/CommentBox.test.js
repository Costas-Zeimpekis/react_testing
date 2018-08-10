import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the test area', () => {
  beforeEach(() => {
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    wrapped.update();
  });

  it('has a text area that users can type in it', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has a texterea that after submit the value is eqaul to empty string', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
