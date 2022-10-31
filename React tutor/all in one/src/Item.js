
function Item(props) {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.value}
            </td>
        </tr>
    )
}

export default Item