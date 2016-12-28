import '../node_modules/gsg-common-style/less/thumbnail/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import objectAssign from 'object-assign';
import classNames from 'classnames';

export default class GSGThumbnail extends React.Component {
  render() {
    let _bClass = {
      'img-responsive': true,
      [`img-${this.props.imgStyle}`]: true
    };

    _bClass = classNames(_bClass);

    return(
      <div className="thumbnail">
        {
          this.props.imgSrc && <img className={_bClass} src={this.props.imgSrc} alt={this.props.imgAlt} />
        }
        <div className="caption">
          {this.props.children}
        </div>
      </div>
    );
  }
};

GSGThumbnail.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgStyle: PropTypes.string
};

GSGThumbnail.defaultProps = {
  imgStyle: 'thumbnail'
}
