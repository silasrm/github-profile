var React = require('react');

function UserInfo(props) {
    return props.user ?
        (
            <div>
                <img src={props.user.avatar_url} alt="avatar of user" className="img-circle" width="150"/>
                <h3>{props.user.login}</h3>
                <p>{props.user.name}</p>
                <p>
                    Seguidores: {props.user.followers}
                     / Seguindo: {props.user.following}
                </p>
                <p><a href={props.user.html_url} className="btn btn-info">Ir para o Github</a></p>
            </div>
        ) : null;
}

UserInfo.propTypes = {
    user: React.PropTypes.object
};

module.exports = UserInfo;