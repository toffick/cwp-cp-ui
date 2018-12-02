import React from 'react';

export default class ActorItem extends React.PureComponent {

    render() {
        const {name, photoUrl, bday} = this.props.actor;

        return (
            <React.Fragment>
                <div className="img-wrap">
                    <img alt="" src={photoUrl}/>
                </div>
                <div className="actor_name">
                    <span>{name.replace(/\((.+)\)/, '').trim()}</span>
                    <span className="year"><span style={{fontWeight : 'normal'}}>Born: </span>{bday}</span>
                </div>
            </React.Fragment>
        );
    }
}
