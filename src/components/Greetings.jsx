import PropTypes from 'prop-types';
const Greeting = ({greeting}) =>{
    return (
        <div>
            <p> {greeting} </p>
        </div>
    )
}

Greeting.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default Greeting