import React, { Component } from 'react'
import './tour.scss';

class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = ()=> {
        this.setState(prevState => ({
            showInfo: !prevState.showInfo,
        }))
    }
    render () {
        const {city, img, name, info, id} = this.props.tour
        const { removeTour } = this.props;
        const { showInfo } = this.state;
        return (
            <article className="tour">
                <div className="tour__pic">
                    <img src={img} alt=""/>
                    <span
                        className="tour__pic-close"
                        onClick={() => removeTour(id)}
                    >
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour__info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5
                        onClick={this.handleInfo}
                    >
                        Info {" "}
                        <span>
                            <i className="fas fa-caret-square-down">
                            </i>
                        </span>
                    </h5>
                    {showInfo && (
                        <p className="tour__desc">{info}</p>
                    )}
                </div>
            </article>
        )
    }
}

export default Tour