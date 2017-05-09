import React, {Component} from 'react/dist/react.min.js';
import remarkable from 'remarkable/dist/remarkable.min.js';

class MarkdownPreviewer extends Component{
    constructor(props){
        super(props);

        this.markdownParser = new remarkable();
        this.state = {
            markdownContent : '',
            htmlMarkup : {
                __html : ''
            } 
        }
    }
    onMarkdownContentChanged(changedContent){
        this.setState({
            htmlMarkup: {
                __html : this.markdownParser.render(changedContent)
            }
        });
    }
    render(){
        return (
            <div>
                <div className='row'>
                    <div className='col text-center'>
                        <h1>FreeCodeCamp - Markdown Previewer</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <textarea className='inpt' onChange={e => this.onMarkdownContentChanged(e.target.value)}></textarea>
                    </div>
                    <div className='col'>
                        <div className='outpt' dangerouslySetInnerHTML={this.state.htmlMarkup}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer;