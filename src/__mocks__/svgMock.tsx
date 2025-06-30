import React from 'react';

const SvgMock = React.forwardRef(
  ({ width, height, ...props }: any, ref: any) => {
    return <svg ref={ref} width={width} height={height} {...props} />;
  }
);

SvgMock.displayName = 'SvgMock';

export default SvgMock;
