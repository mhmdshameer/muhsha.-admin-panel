import "./widgetLg.css";

const WidgetLg = () => {

    const Button =({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return ( 
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img  src="./img/customer1.avif" alt="customerDp" className="widgetLgImg"/>
            <span className="widgetLgName">Susan Hancock</span>
          </td>
          <td className="widgetLgDate">13 sep 2023</td>
          <td className="widgetLgAmount">$235.45</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img  src="./img/customer2.avif" alt="customerDp" className="widgetLgImg"/>
            <span className="widgetLgName">Violet Melons</span>
          </td>
          <td className="widgetLgDate">13 sep 2023</td>
          <td className="widgetLgAmount">$235.45</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img  src="./img/customer3.avif" alt="customerDp" className="widgetLgImg"/>
            <span className="widgetLgName">Mikasa Ackerman</span>
          </td>
          <td className="widgetLgDate">13 sep 2023</td>
          <td className="widgetLgAmount">$235.45</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img  src="./img/customer4.avif" alt="customerDp" className="widgetLgImg"/>
            <span className="widgetLgName">Rebecca Swords</span>
          </td>
          <td className="widgetLgDate">13 sep 2023</td>
          <td className="widgetLgAmount">$235.45</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
