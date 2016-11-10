var React = require('react');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
    propTypes: {
    user: React.PropTypes.string.isRequired
    },
    render: function(){
        return (
            <Link className="followers-link" to={`/user/${this.props.user.login}`}> {/* it works ok but is this right?*/}
                <img className="followers-info__avatar" src={this.props.user.avatar_url} />
                <div className="followers-info__login">
                {this.props.user.login}
                </div>
            </Link>
        );
    }    
});

module.exports = GithubUser;