import Item from "./Item"
import Category from "./Category"

function Display(){
    return (
        <table>
            <tr>
                <th>Name</th><th>Price</th>
            </tr>
            <Category name='Sporting Goods'/>
            <Item name='Football' value='$49.99'/>
            <Item name='Baseball' value='$9.99'/>
            <Item name='BasketBall' value='$29.99'/>
            <Category name='Electronics'/>
            <Item name='iPad touch' value='$129.99'/>
            <Item name='iPhone 7' value='$439.99'/>
            <Item name='Pixel 7' value='$529.99'/>
        </table>
      )
}



export default Display