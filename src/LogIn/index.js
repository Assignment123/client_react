import React from 'react';
import SigninForm from './signinForm';
import {loginRequest, loginSuccess } from './action';
import  submitLogin  from './apiConnection';
import { connect } from 'react-redux';

class Signin extends React.Component{

  componentWillMount(){
    if (this.props.userInfo !==null){
      console.log(this.props.history)
      // this.props.history.push('/login');
    }
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.userInfo !== null){
  //     nextProps.history.push('/login')
  //   }
  // }
  constructor(props){
    super(props);
    const storedMessage = localStorage.getItem('successmessage');
    let successmessage ='';

    if(storedMessage){
      successmessage = storedMessage;
      localStorage.removeItem('successmessage');
    }

    this.state ={
      errors: {},
      successmessage,
      isLoggedIn: false,
      data: {
        email: '',
        password: ''
      }
    };
  }


  componentDidMount() {
    if( this.props.isLoggedIn){
      window.location.assign("/")
    }
  }

  componentWillReceiveProps(nextProps){

      if(nextProps.userInfo && nextProps.isLoggedIn){ 
          console.log("redirect to dashboard");
         if( nextProps.userInfo.user_role[0]==="superadmin")
            window.location.assign("/admin")
          else if( nextProps.userInfo.user_role[1]==="user")
            window.location.assign("/user")
          else 
                    window.location.assign("/general")  
      }
      this.setState({
        isLoggedIn: true,
      })
  }

    login = (Data)=> { 
      // console.log('.....data is fetching ')
        return submitLogin(Data).then(response => {
            this.props.loginSuccess(response);
        }).catch(error => {
            throw (error);
        });
}

  onSubmit = (event)=> {
    event.preventDefault();
    // const {email, password} = this.state.data;
    const errors = this.validate();
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
     this.login(this.state.data);
    }
  }

  validate = () => {
        const { data } = this.state;
        const errors = {};
        if (!data.email) errors.email = "email can't be empty"  ;
        this.ValidateEmail();
        if (!data.password) errors.password = "Password error";
        console.log('-----------',errors);
        return errors;
      };

   ValidateEmail = () => {
     const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (rgx.test(this.state.data.email))
        {
          return (true)
        }
        alert("You have entered an invalid email address!")
            return (false)
        }

  onChange = (event)=> {
      const field = event.target.name;
      const data = this.state.data;
      data[field] = event.target.value;
      this.setState({
        data
      });
    }

      render() {
        return (
          <SigninForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            data={this.state.data}
          />
        );
        
      }
  }

  const mapStateToProps = (state) => {
    return {
      userInfo : state.userInfo,
      isLoggedIn:state.isLoggedIn
    }
  }
  const mapDispatchToProps = (dispatch) => {

    return {
      loginSuccess: (data) => dispatch(loginSuccess(data)),
      loginRequest: (email,password) => dispatch(loginRequest(email,password)),
      }
    }
    export default connect( mapStateToProps ,mapDispatchToProps)(Signin);



 