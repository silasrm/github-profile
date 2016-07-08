var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var Busca = React.createClass({
    getInitialState: function () {
        return {nome: ''};
    },
    handleChange: function (e) {
        this.setState({nome: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        GitHubUser.getByUsername(this.refs.nome.value)
            .then(function (response) {
                this.props.updateError(false);
                console.debug(response);
            }.bind(this))
            .catch(function (err) {
                if (err) {
                    console.debug(err);
                    this.props.updateError(err.data.message);
                }
            }.bind(this));
    },
    render: function () {
        return (
            <div>
                <p>Buscando por: "{this.state.nome}"</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <span className="input-group-addon">@</span>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            ref="nome"
                            value={this.state.nome}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Busca;