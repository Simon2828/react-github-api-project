var React = require('react');

const GithubRepo = ({user}) => (
    <a href={user.html_url}>{user.full_name}  {user.stargazers_count}</a>
);


module.exports = GithubRepo;