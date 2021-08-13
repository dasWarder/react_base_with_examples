

const GoodsList = (props) => {

    const goods = props.goods;

    const listItem = goods.map((good) =>
        <li key={ good }>{ good }</li>
    );

    return (
        <ul>{ listItem }</ul>
    )
};

export default GoodsList;