import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Feed,Icon, Divider } from 'semantic-ui-react'


class Messages extends React.Component {
    render () {
        // Need to find away to reduce this
        const messagesToMap = this.props.messages.messageReducer.messages.messages;
        return (
            <div>
                <ul>
                {
                messagesToMap.map((item, i) => {
                    console.log(item)
                    return (
                        <Feed>
                
                        <Feed.Event>
                            <Feed.Label>
                                <img src="data:image/jpeg;base64,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"/>
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                <Feed.User>{item.userId}</Feed.User>
                                <Feed.Date>{item.createdAt}</Feed.Date>
                                <Feed.Extra text>
                                    {item.text}
                                </Feed.Extra>     
                                </Feed.Summary>
                                <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
                                    {item.likes.length} likes
                                </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                            </Feed.Event>
                    </Feed>
                    )
                })}
                </ul>
            </div>        
      )
    }
}

const mapStateToProps = (state) => {
    return {
      messages: state
    }
  }
  
export default connect (mapStateToProps)(Messages);