var React = require('react');
var classNames = require('classnames');
var Busca = require('./Busca');

var GitHub = React.createClass({
    getInitialState: function() {
        return {
            error: '',
            displayErrorClass: true
        };
    },
    updateError: function (error) {
        this.setState({error: error});
        this.setState({displayErrorClass: error === false});
    },
    render: function () {
        var errorClasses = {
            alert: true,
            'alert-danger': true,
            hide: this.state.displayErrorClass
        };

        return (
            <div>
                <Busca updateError={this.updateError} />
                <p className={classNames(errorClasses)}>{this.state.error}</p>
            </div>
        );
    }
});

module.exports = GitHub;