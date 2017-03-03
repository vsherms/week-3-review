import React from 'react';

class ShowFoundGiphys extends React.Component {

	constructor() {
    super();
    this.state={
      items:[],
      name: ""
    };
    this.fetchTheGiphys = this.fetchTheGiphys.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
  }

  fetchTheGiphys(e) {
    e.preventDefault();
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.name}&limit=3&api_key=dc6zaTOxFJmzC`)
      .then(result=>result.json())
      .then(data=>this.setState({items: data.data}));
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return(
      <div>
        <form method="" role="form">
          <legend>Search Giphy</legend>

          <div className="form-group">
            <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="keyword" placeholder="keyword"/>
          </div>

          <button onClick={this.fetchTheGiphys} type="submit" className="btn btn-primary">Submit</button>
        </form>
        <ul>
          {this.state.items.length ?
            this.state.items.map(item => (
              <li key={item.id}>
                <img src={item.images.original.url}/>
              </li>
            ))
              : <li>Nothing found ... do a search!</li>
          }
        </ul>
      </div>
   );
  }
}

export default ShowFoundGiphys;
