import React, { Fragment } from 'react'

const Avatar = ({UrlImagen}) => {

    return (
        <Fragment>
            <img src={UrlImagen} alt="" className='mr-3' />
        </Fragment>
      );
}
 
export default Avatar;
