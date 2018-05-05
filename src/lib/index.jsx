import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CountdownTimer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            endDate : new Date(),
            days: "",
            hours: "",
            minutes: "",
            seconds: "",
            expired: false
        };
    }

    startTimer() {
        let self = this;

        let x = setInterval(() => {

            let now = new Date().getTime();
            let distance = self.state.endDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            self.setState({
                days,
                hours,
                minutes,
                seconds
            });

            if (distance < 0) {
                clearInterval(x);
                self.setState({
                    expired: true
                });
            }
        }, 1000);
    }

    componentDidMount() {
        const { endDate } = this.props;

        this.setState({
            endDate : endDate
        });

        this.startTimer();

    }

    formatTime(type) {
        let timeStr = "";

        switch (type) {
            case 1:
                timeStr += this.state.days ? (this.state.days > 9 ? this.state.days : "0" + this.state.days) + ":" : "";
                timeStr += this.state.hours ? (this.state.hours > 9 ? this.state.hours : "0" + this.state.hours) + ":" : "";
                timeStr += this.state.minutes ? (this.state.minutes > 9 ? this.state.minutes : "0" + this.state.minutes)  + ":" : "00:";
                timeStr += this.state.seconds ? (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds) : "00";
                break;
            case 2:
                timeStr += this.state.days ? (this.state.days > 9 ? this.state.days : "0" + this.state.days) + " days " : "";
                timeStr += this.state.hours ? (this.state.hours > 9 ? this.state.hours : "0" + this.state.hours) + " hours " : "";
                timeStr += this.state.minutes ? (this.state.minutes > 9 ? this.state.minutes : "0" + this.state.minutes)  + " minutes " : "";
                timeStr += this.state.seconds ? (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds) + " seconds " : "00";
                break;
        }


        return timeStr;
    }

    render() {

        if(this.state.expired) {
            this.props.onTimerExpire();

            return <div>Expired</div>;
        }

        return (
            <div>
                {this.formatTime(2)}
            </div>
        );

    }

}

CountdownTimer.propTypes = {
    onTimerExpire: PropTypes.func.isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired
};

export default CountdownTimer;
