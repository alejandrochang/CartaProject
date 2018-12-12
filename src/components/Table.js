import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const data = [{ id: 1 }];
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Investment",
              accessor: "Investment",
              columns: [
                {
                  Header: "Arcanerover",
                  accessor: "title",
                  Footer: () => (
                    <div style={{ textAlign: "center" }}>First Name</div>
                  )
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
                  accessor: "age",
                  Footer: () => <div style={{ textAlign: "center" }}>Age</div>
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
          defaultPageSize={500}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default Table;
