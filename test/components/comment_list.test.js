import {expect, renderComponent} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = {comments: ['asdas', 'new comment', 'dfgfdg dfgdf']};
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment', () => {
    expect(component).to.contain('asdas');
    expect(component).to.contain('new comment');
  });
});
