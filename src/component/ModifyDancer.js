import  React from "react"
import axios from "axios"
import "../styles/Dancer.css"

class ModifyDancer extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    dancers: []
  };
}
componentDidMount = () => {
  axios.get(`/dancers`).then(res => {
    this.setState({
      dancers: res.data
    });
  });
upDateUser = value => {
  axios.put(`/modify/${this.props.id.match.params.id}`, { ...value });
};

   onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render()
   {  return (
            <div className="dancer-card">
            <Col xs={6} md={4}>
              <Thumbnail src={this.state.dancers.image} alt="242x200">
                <h3>
                  {this.state.dancers.pseudo} {this.state.dancers.age}
                </h3>
                <p>{this.state.dancers.category}</p>
               
              </Thumbnail>
            </Col>
          );
        
      </div>
    );
  };
 
  export default ModifyDancer;
