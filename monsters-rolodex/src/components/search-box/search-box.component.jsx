import {Component} from 'react';
import './search-box.styles.css';

class SearchBox extends Component{
    render(){
        // const {onSearchChange} = this.props;
        // console.log(onSearchChange);
        return(
            <div>
                <input className="search-box monsters-search-box" type='search' placeholder='Search monsters' 
                onChange={this.props.onSearchChange}/>
            </div>
        )
    }
}

export default SearchBox;