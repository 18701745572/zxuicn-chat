import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MediaObject } from '..';

afterEach(cleanup);

describe('<MediaObject />', () => {
  it('should support picUrl', () => {
    const title = 'Hello zxuicn';
    const picUrl = '//img.alicdn.com/tfs/TB1KwnKPqL7gK0jSZFBXXXZZpXa-221-57.svg';
    const { container } = render(<MediaObject
      title={title}
      picUrl={picUrl} 
    />);
    expect(container.querySelectorAll('img').length).toBe(1);
  });

  it('should support picSize', () => {
    const title = 'Hello zxuicn';
    const picUrl = '//img.alicdn.com/tfs/TB1KwnKPqL7gK0jSZFBXXXZZpXa-221-57.svg';
    const { container } = render(<MediaObject
      title={title}
      picUrl={picUrl} 
      picSize="sm"
    />);
    expect(container.querySelector('.MediaObject-pic')).toHaveClass('MediaObject-pic--sm');
  });

  it('should support meta', () => {
    const title = 'Hello zxuicn';
    const meta = <a href="https://github.com/alibaba/zxuicn">Hello zxuicn</a>;
    const picUrl = '//img.alicdn.com/tfs/TB1KwnKPqL7gK0jSZFBXXXZZpXa-221-57.svg';
    const { container } = render(<MediaObject
      title={title}
      picUrl={picUrl} 
      meta={meta}
    />);
    expect(container.querySelectorAll('a').length).toBe(1);
  });
});
