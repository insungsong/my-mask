import React from "react";
import axios from "axios";
import Mask from "../Mask";

class Home extends React.Component {
  state = {
    isLoading: true,
    maskInfos: [],
  };

  async getMaskInfo() {
    const {
      data: { storeInfos },
    } = await axios.get(
      "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1"
    );
    this.setState({ maskInfos: storeInfos, isLoading: false });
  }

  componentDidMount() {
    this.getMaskInfo();
  }
  render() {
    const { isLoading, maskInfos } = this.state;
    console.log(maskInfos);
    return (
      <div>
        {isLoading
          ? "Loading..."
          : maskInfos.map((mask) => (
              <Mask
                key={mask.addr}
                addr={mask.addr}
                lat={mask.lat}
                lng={mask.lng}
                name={mask.name}
              />
            ))}
      </div>
    );
  }
}

export default Home;
