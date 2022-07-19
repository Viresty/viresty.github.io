import React, { Component } from 'react';
import './../css/list-card.css';

import Card from './card';

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      const ListItems = this.props.ListItems.map((item, idx) => {
        return <li key={idx}>
                  <Card CardDetail={item} />
                </li>
      });
      return (
        <div className="list-card">
          <h1 className="list-title">{this.props.title}</h1>
          <p className="list-detail">{this.props.detail}</p>
          <ul className={this.props.shortlist?'short-list':''}>
              {ListItems}
          </ul>
        </div>
      );
    }
  }
export default List;