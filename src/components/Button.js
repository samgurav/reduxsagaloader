import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions/index';
let Button=({getNews})=>(
   <button onClick={getNews} className="btn btn-danger" style={{margin:'50px'}}>Press to see news</button>
)
const mapDispatchToProps = {
     getNews: getNews,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;