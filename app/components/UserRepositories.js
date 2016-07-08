var React = require('react');
var classNames = require('classnames');

var UserRepositories = React.createClass({
    getInitialState : function() {
        return {
            count: 0,
            repositories: []
        }
    },
    componentWillReceiveProps: function(props) {
        this.setState({
            count: props.repositories.length,
            repositories: props.repositories
        });
    },
    render: function () {
        var repos = this.state.repositories.map(function(item, k) {
            return (
                <li className="list-group-item" key={k}>
                    <h4>
                        <a href={item.html_url}>
                            {item.name}
                             &nbsp;
                            <small className="label label-default">{item.full_name}</small>
                        </a>
                    </h4>
                    <small>
                        <a href={item.stargazers_url}>
                            {item.stargazers_count} estrelas
                        </a>
                         / <a href={item.forks_url}>
                            {item.forks_count} forks
                        </a>
                         / <a href={item.watchers_url}>
                            {item.watchers_count} watchers
                        </a>
                         / {item.language}
                    </small>
                    <p>{item.description}</p>
                </li>
            );
        });

        return (
            <div className="row">
                <div className="col-xs-12">
                    {this.state.count} repositórios
                    <hr/>
                    <div className="list-group">
                        {repos}
                    </div>
                </div>
            </div>
        );
    }
});

UserRepositories.propTypes = {
    repositories: React.PropTypes.array
};

module.exports = UserRepositories;