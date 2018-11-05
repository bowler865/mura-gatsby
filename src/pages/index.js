import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

Mura.init({
	siteid:'headless-demo',
	rootpath:'http://it-demo.muraxp.com'
});
  
export default class Index extends React.Component {
	state = {
    	items: []
  	};
  
    componentDidMount() {
	    Mura.getFeed('content')
	      .where()
	      .prop('filename')
	      .beginsWith('resources/')
	      .getQuery()
	      .then(collection => {
	        const items = collection.getAll().items;
	        this.setState({ items });
	      });
    }
    
render() {
    return (
      <div>
        <h1>Resources</h1>
        {this.state.items.map(item =>
          <Link key={item.contentid} to={`${item.filename}`}>
            <div>
            	<img src={item.images.medium} />
				{item.title}
            </div>
          </Link>
        )}
      </div>
    );
  }
}

/*
export const query = graphql`
  query AllMuraNode {
  allMuraNode{
    edges {
      node{
        title
        urltitle
        subtype
        filename
        contentid
      }
    }
  }
}`
*/