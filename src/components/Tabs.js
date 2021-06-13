import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ValidationForm from "./ValidationForm";
import GetData from "./GetData";


class TabNav extends React.Component {
  render() {
    return (
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="add" title="AddData">
    <ValidationForm />
  </Tab>
  <Tab eventKey="show" title="ShowData">
    <GetData />
  </Tab>

</Tabs>      
    );
  }
}
export default TabNav;