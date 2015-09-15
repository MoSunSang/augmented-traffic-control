/** @jsx React.DOM */
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */


var JSONView = React.createClass({
  render: function() {
    return (
      <pre>
        { JSON.stringify(this.props.json, null, 2) }
      </pre>
    );
  }
});

var JSONEdit = React.createClass({
  render: function() {
    var s = JSON.stringify(this.props.json, null, 2);
    return (
      <pre>
        <textarea rows="46" className="form-control" onChange={this.props.onchange}>
          {s}
        </textarea>
      </pre>
    );
  }
});

var CollapsePanel = React.createClass({
  getInitialState: function() {
    return {
      expanded: !this.props.hidden,
    };
  },

  getDefaultProps: function() {
    return {
      hidden: false,
    };
  },

  toggle: function() {
    this.setState({
      expanded: !this.state.expanded,
    });
  },

  render: function() {
    var acc_id = 'accordion'+this.props.title.replace(' ', '');
    var col_id = 'collapse'+this.props.title.replace(' ', '');
    var headingCN = 'panel-heading';
    var panelCN = 'panel-collapse collapse';
    if (this.state.expanded) {
      panelCN += ' in';
    } else {
      headingCN += ' collapsed';
    }
    return (
      <div className="panel-group" id={acc_id} role="tablist" aria-multiselectable="false">
        <div className="panel panel-default">
          <div className={headingCN} onClick={this.toggle} data-toggle="collapse" data-parent={'#' + acc_id} href={'#' + col_id}
              aria-expanded={this.props.expanded} aria-controls={col_id}>
            <h3 className="panel-title">
              {this.props.title}
            </h3>
          </div>
          <div id={col_id} className={panelCN} role="tabpanel">
            <div className="panel-body">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
