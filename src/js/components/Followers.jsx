var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Followers = React.createClass({
    componentDidMount: function() {
        $.getJSON(`https://api.github.com/users/${this.props.params.username}/followers`, (followers) => {
            this.setState({
                followers: followers // not finished...??   
            });            
        });    
    },
    render: function() {
        return (
            <div className="followers-page">
                <h3>Followers of {this.props.params.username}</h3>
            </div>
        );    
    }    
});

module.exports = Followers;