import React from 'react'
import Helmet from 'react-helmet'

Mura.init({
	siteid:'headless-demo',
	rootpath:'http://it-demo.muraxp.com'
});


export default class Resource extends React.Component {
	
render() {
    const page = this.props.data.muraNode;
    
    Mura.loader()
		.loadcss(Mura.rootpath + '/core/modules/v1/core_assets/css/mura.7.1.min.css')
		.loadcss(Mura.rootpath + '/core/modules/v1/core_assets/css/mura.7.1.skin.css');
			
    Mura.renderFilename(
		page.filename,
		Mura.getQueryStringParams()
	).then(content=>{
		Mura('h1.contentTitle').html(content.get('title'));
		// Add the Body
		Mura('#mura-content').html(content.get('body'));
		// html head and foot queues to enable admin toolbar and layout manager
		Mura('#mura-html-queues').html(content.get('htmlheadqueue') + content.get('htmlfootqueue'));

		Mura.extend(Mura,content.get('config'));
		Mura.context=Mura.rootpath;
		// Process the markup
		Mura(document).processMarkup();
	});
	
    return (
      <div>
        <h1 id='contentTitle'>{page.title}</h1>
        <img src={page.images.source} width='200' />
        <div
		  key={`mura-content`}
		  id="mura-content"
		  dangerouslySetInnerHTML={{ __html: page.body }}
		/>
		<div id='mura-html-queues'></div> 
      </div>
      
    );
  }
}

export const query = graphql`
  query allMuraNode($contentid: String!) {
    muraNode(contentid: { eq: $contentid }) {
      title
      contentid
      urltitle
      filename
      body
      images{
      	source
      	medium
      	small
      	large
      }
    }
  }
`