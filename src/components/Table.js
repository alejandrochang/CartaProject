import React, { Component } from "react";
import ReactTable from "react-table";
import IndividualCompany from "./IndividualCompany";
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

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const data = [ { investment: 'hello' }];
    return (
      <div>
        <h1>Schedule of Investments </h1>
        <ReactTable
          data={data}
          columns={[
            { Header: "Investment", accessor: "investment" },
            { Header: "Asset", accessor: "asset" },
            { Header: "Investment Date", accessor: "investmentDate" },
            { Header: "Shares", accessor: "Shares" },
            { Header: "Cost", accessor: "Cost" },
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
          defaultPageSize={20}
          className="-striped -highlight"
          SubComponent={() => <div style={{ padding: "10px", padddingLeft: "10%" }}>Asset</div>}
        />
        <IndividualCompany companies={this.state.companies} />
        Found {this.state.companies.length} companies
      </div>
    );
  }
}

export default Table;
