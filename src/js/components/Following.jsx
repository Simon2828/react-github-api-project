var React = require('react');
var GithubUser = require('./GithubUser');

class Following extends React.Component {
    constructor() {
        super();
        this.state = {
            following: []
        };
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/following?access_token=f752076232301d59861229cf4820c52ad7d9b417`)
            .then(response => {
                console.log('response', response);
                return response.json();
            })
            .then((body) => {
                console.log('body', body);
               this.setState({
                    following: body
                });
            })
            /*.catch(function(err) {
                console.log(err);
            });*/
    }
    
    render() {
        if (!this.state.following) {
            return <div>LOADING FOLLOWING</div>
        }
        console.log('state  :', this.state)
        return (
            <div>
                <h2>Following {this.props.params.username}</h2>
                {this.state.following.map(follow => {
                 return (
                     <div>
                        <GithubUser user={follow}/>;
                     </div>
                     );
                }) 
            }
            </div>
        );
    }
    
}

            


module.exports = Following;