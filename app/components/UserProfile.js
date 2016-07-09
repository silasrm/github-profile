var React = require('react');
var classNames = require('classnames');
var UserInfo = require('./UserInfo');
var UserRepositories = require('./UserRepositories');

var UserProfile = React.createClass({
    getInitialState : function() {
        return {
            user: null,
            repositories: []
        }
    },
    componentWillReceiveProps: function(props) {
        this.setState({
            user: props.user,
            repositories: props.repositories
        });
    },
    render: function () {
        var okClasses = {
            row: true,
            hide: this.state.user === null
        };

        return (
            <div className={classNames(okClasses)}>
                <div className="col-xs-12">
                    <hr/>
                </div>
                <div className="col-xs-12">
                    <UserInfo user={this.state.user} />
                </div>
                <div className="col-xs-12">
                    <UserRepositories repositories={this.state.repositories} />
                </div>
            </div>
        );
    }
});

UserProfile.propTypes = {
    user: React.PropTypes.object,
    repositories: React.PropTypes.array
};

module.exports = UserProfile;