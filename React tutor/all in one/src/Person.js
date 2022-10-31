import PropTypes from 'prop-types';

function Person(prop){
return(
    <div>
        <h3>Your Age is : {prop.age}</h3>
    </div>
)
}

export default Person

// Person.defaultProps ={
//     age:100
// }

Person.propTypes = {
    age:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired
}
