import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShopList from '../ShopList';
import ShopInfo from '../ShopInfo';
import Map from '../Map';

class Layout extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  _isLoaded() {
    return this.props.data.length > 0;
  }

  render() {
    const { isLoading, error } = this.props;
    const styleBoxCenter = {display:'flex', alignItems:'center', justifyContent:'center', position:'absolute', width:'100%',height:'100%'};
    const failedStyleBox = Object.assign({}, styleBoxCenter, {color: 'red'});
    return (
      <div>
        {
          this._isLoaded() &&
          <div>
            <Map />
            <ShopList />
            <ShopInfo />
          </div>
        }
        {
          isLoading &&
          <h1 style={styleBoxCenter}>Data Loading...</h1>
        }
        {
          error && (
            <div style={failedStyleBox}>
              <div>
                <h1>Data Loading Failed!</h1>
                <p>{error.message}</p>
              </div>
            </div>
          )

        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(...state.shopListData);
  return {
    ...state.shopListData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLoad: ()=>  {

    }
  }
}

Layout = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default Layout;
