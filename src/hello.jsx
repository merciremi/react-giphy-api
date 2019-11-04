// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import '../assets/stylesheets/application.scss';

// // Below is a type of component taht only works when you don't need state
// // const Hello = ({ name }) => {
// //   return (
// //     <div>
// //       Hello, {name}
// //     </div>
// //   );
// // };

// // Below is a type of component that works when you need state and props
// class Hello extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       clicked: false,
//       counter: 0
//     }
//   }

//   handleClick = () => {
//     this.setState({
//       clicked: !this.state.clicked,
//       counter: this.state.counter + 1
//     });
//   }

//   render() {
//     return (
//       <div className={this.state.clicked ? 'clicked' : null}
//            onClick={this.handleClick}>
//         Hello {this.props.name} - You clicked {this.state.counter}
//       </div>
//     )
//   }
// }

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="Rémi" />, root)
// }
