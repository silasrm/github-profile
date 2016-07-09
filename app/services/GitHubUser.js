var axios = require('axios');

var GitHubUser = {
    getByUsername: function(username) {
        return axios.get('https://api.github.com/users/' + username);
    },
    getReposByUsername: function(username) {
        return axios.get('https://api.github.com/users/' + username + '/repos?per_page=50');
    }
};

module.exports = GitHubUser;