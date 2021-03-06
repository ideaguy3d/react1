/**
 * Created by Julius Alvarado on 7/4/2017.
 */
import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {frame: 1};
    }

    // lifecycle hook
    componentDidMount() {
        this.interval = setInterval(()=>{
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    // lifecycle hook
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return <strong><span {...this.props}>{text}&nbsp;</span></strong>;
    }
}
LoadingDots.defaultProps = {
    interval: 300, dots: 3
};
LoadingDots.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
};
export default LoadingDots;