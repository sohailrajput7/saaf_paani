import React from 'react';
// import MenuItem from './../menu-item/menu-item';
//import './directory.styles.scss';

const Inventory  = ({sections}) => (
            <div className='directory-menu'>
                <h1>Inventory Page</h1>
                {/* {
                    sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                  ))
                } */}
            </div>
        ) 

// const mapStateToProps = state => ({
//   sections: state.Directory.sections
// })

export default Inventory;