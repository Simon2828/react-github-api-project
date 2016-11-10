var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Followers = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        $.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=f752076232301d59861229cf4820c52ad7d9b417`,
            (followers) => {
                this.setState({
                    followers: followers
                });
            });
    },
    render: function() {
            if (!this.state.followers) {
                return <div>LOADING FOLLOWERS...</div>
            }

        return (
            <div className="followers-page">
                <h2>Followers of {this.props.params.username}</h2>
                <ul>
                    {this.state.followers.map(function(follower){
                        return (
                            <div className="follower-info">
                                <GithubUser user={follower} />
                            </div>
                        );
                    }
                        
                    /* INSERT CODE HERE TO RETURN A NEW <GithubUser/> */)}
                </ul>
            </div>
        );
    }    
});

module.exports = Followers;