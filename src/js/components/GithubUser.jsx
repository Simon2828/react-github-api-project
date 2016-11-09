var React = require('react');

var GithubUser = React.createClass({
    propTypes: {
    user: React.PropTypes.string.isRequired
    },
    render: function(){
        return (
            <Link to={`https://api.github.com/users/${this.props.username}`}>
                <img src={this.props.avatar_url} />
                {this.props.login}
            </Link>
        );
    }    
});

module.exports = GithubUser;