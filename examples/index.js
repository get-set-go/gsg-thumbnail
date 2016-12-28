import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Thumbnail from '../dist/index.min';

class Page extends React.Component {
  render() {

    const content = (
      <div>
        <h3>JavaScript</h3>
        <p>A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.</p>
      </div>
    );

    return (
      <div className="thumbnail-eg-container">
        <h1>Get-Set-Go Thumbnail Component</h1>

        <p className="thumbnail-eg-group">
          <h4>Thumbnail Styles</h4>

          <Thumbnail>{content}</Thumbnail>
          <Thumbnail imgSrc="https://placehold.it/350x150">{content}</Thumbnail>
          <Thumbnail imgSrc="https://placehold.it/350x150" imgAlt="placeholder" imgStyle="rounded">{content}</Thumbnail>
          <Thumbnail imgSrc="https://placehold.it/350x150" imgAlt="placeholder" imgStyle="circle">{content}</Thumbnail>
        </p>
      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
