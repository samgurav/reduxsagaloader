import React from 'react';
import { connect } from 'react-redux'

let Posts = ({article})=>( 
  article ? article.map((data) => 
  <h5 key={data.id} style={{color:'darkblue' }}>{data.title}</h5>
 

  ): null
)
const mapStateToProps = (state) => ({
article: state.news,
})
Posts = connect(mapStateToProps,null)(Posts)
export default Posts;