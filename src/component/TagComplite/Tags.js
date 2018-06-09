import React, { Component } from 'react';
import _ from 'lodash';
import Autocomplete from '@celebryts/react-autocomplete-tags';
import PropTypes from 'prop-types';

import './style.css';

export default class Tags extends Component {
  static propTypes = {
    addTags: PropTypes.func,
    OnDeleteTags: PropTypes.func,
    suggestions: PropTypes.array,
    tags: PropTypes.array,
  };
  static defaultProps = {
    addTags: () => {},
    OnDeleteTags: () => {},
    suggestions: [],
    tags: [],
  };
  constructor(props) {
    super(props);
    this.value = [];
    if (props.suggestions) {
      this.value = props.suggestions.map((suggestion) => ({
        label: suggestion.code,
        value: suggestion.code,
      }));
    }

    this.value = [...this.value];

    this.state = {
      suggestions: [],
    };
  }

  componentWillReceiveProps({ suggestions }) {
    if (suggestions !== this.props.suggestions && suggestions) {
      this.value = suggestions.map((suggestion) => ({
        label: suggestion.code,
        value: suggestion.code,
      }));
    }
  }

  onDelete = (value) => {
    this.value.push({
      label: value[0],
      value: value[0],
    });
    this.props.OnDeleteTags(value[0]);
  };

  onFocus = () => {
    this.setState({ suggestions: this.value });
  };
  onChange = (input) => {
    if (typeof input === 'string' && input.trim() !== '') {
      this.searchValue = this.value
        .filter(({ value }) => value.toLowerCase().indexOf(input.trim().toLowerCase()) > -1)
        .map((suggestion) => ({
          label: suggestion.value,
          value: suggestion.value,
        }));

      this.setState({ suggestions: this.searchValue });
    } else if (typeof input === 'object') {
      this.props.addTags(input.value);
      this.value = this.value.filter(({ value }) => input.value !== value);
    }
  };

  render() {
    return (
      <div className="tags-container">
        <Autocomplete
          className="my-css-class"
          suggestions={this.state.suggestions}
          allowCreateTag
          onFocus={this.onFocus}
          onAdd={this.onChange}
          onDelete={this.onDelete}
          tags={this.props.tags}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
