
const WarningBanner = (props) => {

    if(!props.warn) {
        return null;
    }


    return (
        <div style={ {backgroundColor: 'red', margin: 'auto', textAlign: 'center'} } className='warning'>
            Warning!
        </div>
    )
};

export default WarningBanner;