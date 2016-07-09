var React = require('react');

function UserInfo(props) {
    var results = null;
    if (props.user) {
        var bio = props.user.bio ? (<span>{props.user.bio}.</span>) : null;
        var blog = props.user.blog ? (<a href={props.user.blog}>{props.user.blog}</a>) : null;

        results = (
            <div className="row">
                <div className="col-xs-2 text-center">
                    <img src={props.user.avatar_url} alt="avatar of user" className="img-circle" width="100"/>
                    <br/>
                    <p><strong>{props.user.login}</strong></p>
                </div>
                <div className="col-xs-8">
                    <h2>{props.user.name}</h2>
                    <p>
                        {props.user.location}.
                        {bio}
                        {blog}
                    </p>
                    <p>
                        {props.user.followers} seguidores / {props.user.following} seguidos /
                        &nbsp;{props.user.public_repos} repositórios / {props.user.public_gists} gists
                    </p>
                </div>
                <div className="col-xs-2">
                    <br/><br/><br/>
                    <a href={props.user.html_url} className="btn btn-info">Ir para o Github</a>
                </div>
            </div>
        )
    }

    return results;
}

UserInfo.propTypes = {
    user: React.PropTypes.object
};

module.exports = UserInfo;