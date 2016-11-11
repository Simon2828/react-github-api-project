var React = require('react');
var GithubRepo = require('./GithubRepo');

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {
            repos: []
        };
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos?access_token=f752076232301d59861229cf4820c52ad7d9b417`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then((body) => { 
                console.log('body', body);
                this.setState({
                    repos: body
                })
                console.log('state: ',this.state);
            })
    }
    render() {
    if (!this.state.repos) {
        return <div>LOADING FOLLOWING</div>;
    }
    return (
        <div>
            <h2>Repos of {this.props.params.username}</h2>
            {this.state.repos.map(repo => {
             return (
                <div key={repo.id}>
                    <GithubRepo user={repo}/>;
                </div>
             );    
            }) 
        }
        </div>
    );
}
}

module.exports = Repos;