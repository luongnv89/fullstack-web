import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import LayoutPage from "./LayoutPage";
import { requestAllROMs } from "../actions";

class AllROMsPage extends Component {
  componentDidMount() {
    this.props.fetchAllRoms();
  }

  render() {
    const { roms, deleteROM } = this.props;
    let pageSubTitle = 'All ROMs';
    const dataSource = roms.map((rom, index) => ({ ...rom, key: index }));
    const columns = [
      {
        title: "Last Modified",
        key: "data",
        sorter: (a, b) => a.lastModified - b.lastModified,
        render: (ds) => moment(ds.lastModified).format("MMMM Do YYYY, h:mm:ss a"),
        // width: 270,
      },
      {
        title: "Name",
        key: "data",
        render: (ds) => <a href={`/roms/overview/${ds.name}`}> {ds.name} </a>,
        // width: 200,
      },
      {
        title: "Action",
        key: "data",
        width: 100,
        render: (ds) => (
          <Fragment>
            <Button size="small" danger onClick={() => deleteROM(ds._id)}>
              <DeleteOutlined /> Delete
            </Button>
          </Fragment>
        ),
      },
    ];
    return (
      <LayoutPage pageTitle="ROMs" pageSubTitle={pageSubTitle}>
        <Table columns={columns} dataSource={dataSource} />
      </LayoutPage>
    );
  }
}

const mapPropsToStates = ({ roms }) => ({
  roms,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllRoms: () => dispatch(requestAllROMs()),
  deleteROM: (name) => {
    console.log('request to delete ROM: ', name);
  }
});

export default connect(mapPropsToStates, mapDispatchToProps)(AllROMsPage);
