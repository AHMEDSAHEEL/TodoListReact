import React from 'react'


const Footer = ({ length }) => {
    return (
        <div className='footer'>
            {length == 0 ? (<p>No pending List</p>) : (`${length} pending`)}
        </div>
    );
}
export default Footer