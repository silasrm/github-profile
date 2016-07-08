var React = require('react');
var classNames = require('classnames');
var Busca = require('./Busca');
var UserProfile = require('./UserProfile');

var GitHub = React.createClass({
    getInitialState: function() {
        return {
            error: '',
            displayErrorClass: true,
            user: null,
            repositories: []
        };
    },
    updateError: function (error) {
        this.setState({
            error: error,
            displayErrorClass: error === false
        });
    },
    updateUser: function (user) {
        this.setState({user: user});
    },
    updateRepositories: function (repositories) {
        this.setState({repositories: repositories});
    },
    render: function () {
        var errorClasses = {
            alert: true,
            'alert-danger': true,
            hide: this.state.displayErrorClass
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                        <h1>GitHub Profile</h1>
                    </div>
                    <div className="col-xs-9">
                        <Busca
                            updateError={this.updateError}
                            updateUser={this.updateUser}
                            updateRepositories={this.updateRepositories} />
                    </div>
                    <div className="col-xs-12">
                        <p className={classNames(errorClasses)}>{this.state.error}</p>
                        <UserProfile
                            user={this.state.user}
                            repositories={this.state.repositories} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = GitHub;