// import React from "react";
// import SigninForm from "./signinForm";
// import { loginRequest, loginSuccess } from "./action";
// import submitLogin from "./apiConnection";
// import { connect } from "react-redux";

// class Signin extends React.Component {
//   componentWillMount() {
//     if (this.props.userInfo !== null) {
//       console.log(this.props.history);
//       // this.props.history.push('/login');
//     }
//   }
//   // componentWillReceiveProps(nextProps){
//   //   if(nextProps.userInfo !== null){
//   //     nextProps.history.push('/login')
//   //   }
//   // }
//   constructor(props) {
//     super(props);
//     const storedMessage = localStorage.getItem("successmessage");
//     let successmessage = "";

//     if (storedMessage) {
//       successmessage = storedMessage;
//       localStorage.removeItem("successmessage");
//     }

//     this.state = {
//       errors: {},
//       successmessage,
//       isLoggedIn: false,
//       data: [
//         {
//           email: "autoncell@gmail.com",
//           password: "Test@1234",
//           user_role: "superadmin"
//         },
//         {
//           email: "admin@gmail.com",
//           password: "adminadmin",
//           user_role: "admin"
//         },
//         {
//           email: "user@gmail.com",
//           password: "useruser",
//           user_role: "user"
//         }
//       ]
//     };
//   }
//   componentDidMount() {
//     if (this.props.isLoggedIn) {
//       window.location.assign("/");
//     }
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.userInfo && nextProps.isLoggedIn) {
//       console.log("redirect to dashboard----------");

//       if (nextProps.userInfo.user_role === "superadmin") {
//         this.props.history.push("/admin");
//       } else if (nextProps.userInfo.user_role === "admin") {
//         this.props.history.push("/user");
//       } else {
//         window.location.assign("/general");
//       }
//     }
//     this.setState({
//       isLoggedIn: true
//     });
//   }

//   // login = Data => {
//   //   // this.props.loginSuccess(Data);
//   //   if(Data.email === "autoncell@gmail.com" && Data.password === "Test@1234"){
//   //     return this.props.history.push("/admin");
//   //   }
//   //   else if(Data.email === "sudrishya@gmail.com" && Data.password === "Test@1234"){
//   //     return this.props.history.push("/user");
//   //   }
//   //   else if(Data.email === "general@gmail.com" && Data.password === "Test@1234"){
//   //     return this.props.history.push("/general");
//   //   }
//   // };
    
//       // if (Data[index].user_role[0] === "superadmin") {  
//       //   return this.props.history.push("/admin");
//       // } }else if (Data[index].user_role === "admin") {    
//       //   return this.props.history.push("/user");
//       // } else {
//       //   return this.props.history.push("/general");
//       // }
//       // }
    
//     //after calling the api
//     login = Data => {
//     return submitLogin(Data)
//       .then(response => {
//         this.props.loginSuccess(response);
//       })
//       .catch(error => {
//         throw error;
//       });
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     const errors = this.validate();
//     this.setState({ errors });
//     if (Object.keys(errors).length === 0) {
//       this.login(this.state.data);
//     }
//   };

//   validate = () => {
//     const { data } = this.state;
//     const errors = {};
//     if (!data.email) errors.email = "email can't be empty";
//     this.ValidateEmail();
//     if (!data.password) errors.password = "Password error";
//     console.log("-----------", errors);
//     return errors;
//   };

//   ValidateEmail = () => {
//     const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (rgx.test(this.state.data.email)) {
//       return true;
//     }
//     alert("You have entered an invalid email address!");
//     return false;
//   };

//   onChange = event => {
//     const field = event.target.name;
//     const data = this.state.data;
//     data[field] = event.target.value;
//     this.setState({
//       data
//     });
//   };

//   render() {
//     return (
//       <SigninForm
//         onSubmit={this.onSubmit}
//         onChange={this.onChange}
//         errors={this.state.errors}
//         successMessage={this.state.successMessage}
//         data={this.state.data}
//       />
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     userInfo: state.userInfo,
//     isLoggedIn: state.isLoggedIn
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     loginSuccess: data => dispatch(loginSuccess(data)),
//     loginRequest: (email, password) => dispatch(loginRequest(email, password))
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Signin);
