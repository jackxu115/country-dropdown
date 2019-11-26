import React, { Component } from 'react';
import axios from 'axios';

class CountryDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      loaded: false
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v1/all').then(response => {
      const data = response.data;
      this.setState({ data: data, loaded: true, loading: false });
    });
  }

  render() {
    return (
      <div className="data-component">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <CountryNames {...this.state} {...this.props} />
        )}
      </div>
    );
  }
}

const CountryNames = ({ data, selected }) => {
  return (
    <select className="people-list" defaultValue="China">
      {data.map(({ name }, i) => (
        <option key={i} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
const App = () => <CountryDropDown selected="China" />;

export default App;
