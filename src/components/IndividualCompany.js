import React from 'react';

class IndividualCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
    // this.eachCompany.bind(this);
  }

  componentDidUpdate() {
    // this.eachCompany();
  }

  // eachCompany() {
  //   this.props.companies.map((company) => {
  //     // console.log(company);
  //     return {
  //       investment: company.name,
  //       // asset: company.asset,
  //       // investmentDate: company.investmentDate,
  //       // cost: company.cost.$,
  //       // shares: company.quantity
  //     }
  //   });
  // }
  render( ) {
    // console.log(this.eachCompany())
    return (
      <div>Individual Company</div>
    );
  }
}

export default IndividualCompany;