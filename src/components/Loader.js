import React from 'react';
import { connect } from 'react-redux'
import img from '../loader.gif'
let Loader = ({ loading }) => (
loading ?
<div style={{ textAlign: 'center' }}>
   <img src={img} alt='loading' />
   <h1>LOADING</h1>
</div> :
null
);
const mapStateToProps = (state) => ({loading: state.loading})
Loader = connect(mapStateToProps,null)(Loader)
export default Loader;