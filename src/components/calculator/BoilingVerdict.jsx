
const BoilingVerdict = (props) => {
    let boilTemp = props.scale === 'f'? 212 : 100;
    const boil = props.temperature >= boilTemp? '' : 'not';

    return (
        <p>Water is { boil } boiling</p>
    )
};

export default BoilingVerdict;