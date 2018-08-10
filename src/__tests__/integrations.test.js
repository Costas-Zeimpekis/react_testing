import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import moxios from 'moxios';

import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetch no1' }, { name: 'Fetch no2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
