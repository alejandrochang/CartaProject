import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { companies: {} };
  }

  async fetchData() {
    const baseURL =
      "https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({ companies: data });
  }

  render() {
    const data = [{ id: 1 }];
    this.fetchData();
    return (
      <div>
        <h1>Schedule of Investments </h1>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Investment",
              accessor: "Investment",
              columns: [
                {
                  Header: "Arcanerover",
                  accessor: "title"
                }
              ]
            },
            { Header: "Asset", accessor: "Asset", columns: [{}] },
            { Header: "Investment Date", columns: [{}] },
            {
              Header: "Shares",
              columns: [{ Header: "25,000", accessor: "age" }]
            },
            {
              Header: "Cost",
              columns: [
                {
                  Header: "$700,000",
                  accessor: "age"
                  //   Footer: () => <div style={{ textAlign: "center" }}>Age</div>
                }
              ]
            },
            {
              Header: "Expand",
              columns: [
                {
                  expander: true,
                  Header: () => <strong>More</strong>,
                  width: 65,
                  Expander: ({ isExpanded, ...rest }) => (
                    <div>
                      {isExpanded ? (
                        <span>&#x2299;</span>
                      ) : (
                        <span>&#x2295;</span>
                      )}
                    </div>
                  ),
                  style: {
                    cursor: "pointer",
                    fontSize: 25,
                    padding: "0",
                    textAlign: "center",
                    userSelect: "none"
                  },
                  Footer: () => <span>&hearts;</span>
                }
              ]
            }
          ]}
          defaultPageSize={50}
          className="-striped -highlight"
          SubComponent={() => <div style={{ padding: "10px" }}>Hello</div>}
        />
      </div>
    );
  }
}

export default Table;
