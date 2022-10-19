import './Category.css'

function Category(props) {
    return (
        <tr>
            <td colSpan='2' className='category'>
                {props.name}
            </td>
        </tr>
    )
}

export default Category