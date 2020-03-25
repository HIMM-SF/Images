import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {
        _id: 'number',
        images: [1, 2, 3, 4, 5].map((i) => {
          return {
            _id: i,
            url: 'loadingIMG.gif',
            description: 'description'
          };
        })
      },
    };
    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    this.getListing(30);
  }

  getListing(id) {
    axios.get('/images/listing', {
        _id: id
    })
      .then((result) => {
        this.setState({ listing: result.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Listings listing={this.state.listing} />
      </div>
    );
  }
}

export default App;
