var React = require('react');
var classNames = require('classnames');
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
                this.props.updateUser(response.data);

                GitHubUser.getReposByUsername(this.refs.nome.value)
                    .then(function(response2) {
                        console.debug(response2.data);
                        this.props.updateRepositories(response2.data);
                    }.bind(this))
                    .catch(function (err) {
                        if (err) {
                            this.props.updateError(err.status === 404 ? 'Repositórios não encontrados.' : err.data.message);
                            this.props.updateRepositories([]);
                        }
                    }.bind(this));
            }.bind(this))
            .catch(function (err) {
                if (err) {
                    this.props.updateError(err.status === 404 ? 'Usuário não encontrado.' : err.data.message);
                    this.props.updateUser(null);
                    this.props.updateRepositories([]);
                }
            }.bind(this));
    },
    render: function () {
        var buscandoClasses = {
            'pull-left': true,
            hide: this.state.nome.length == 0
        };
        return (
            <div className="row">
                <div className="col-xs-12"><br/></div>
                <div className="col-xs-12">
                    <form onSubmit={this.handleSubmit} className="form-inline pull-left">
                        <div className="input-group">
                            <span className="input-group-addon">github.com/</span>
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
                            <button type="submit" className="btn btn-primary">
                                Buscar
                            </button>
                        </span>
                        </div>
                    </form>
                    <p className={classNames(buscandoClasses)}>
                        &nbsp;Buscando por: "{this.state.nome}"
                    </p>
                </div>
            </div>
        );
    }
});

Busca.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepositories: React.PropTypes.func.isRequired
};

module.exports = Busca;