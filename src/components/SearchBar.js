import React, { Component } from 'react';

import styles from '../styles/SearchBar.css';

class SearchBar extends Component {

  state = {
    searchTerm: ''
  }

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value })
    this.props.onSearchTerm(event.target.value);
  }

  handleInputChange = searchedTerm => {
    this.onInputChange(searchedTerm)
  }

  render() {
    return (
      <div className={styles.seacrhBarContainer}>
        <header className={styles.header}>
           <div className={styles.headerContent}>
             <input type="text" className={styles.input} onChange={this.handleInputChange}/>
             <button className={styles.button} type="button">Search</button>
           </div>
           <button onClick={this.bookmarkPage} className={styles.bookmarkButton}>Bookmarks</button>
         </header>
      </div>
    )
  }
}

export default SearchBar;


// *** Using refs ***
//
// class SearchBar extends React.Component {
//   render() {
//     return (
//       <div className={styles.seacrhBarContainer}>
//         <input type="text" className="form-control" ref="search"/>
//         <span className="input-group-btn">
//           <button
//              className="btn btn-default"
//              type="button"
//              onClick={(event) => this.props.onSearchTerm(this.refs.search.value)}
//            >
//              Go!
//            </button>
//          </span>
//       </div>
//     )
//   }
// }
//
// export default SearchBar;
