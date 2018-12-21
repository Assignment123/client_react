// function submitLogin(login) {
//     console.log('working');
 
//     return fetch("https://www.autoncell.com/api/login",
//     // "https://stage-app1.xceltrip.com/api/login" 
//     {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//               "X-Requested-With": "XMLHttpRequest",
//               "Access-Control-Allow-Origin": "*",
//               Authorization: token //? `${usertoken}` : undefined
//               },
//               body: JSON.stringify({ username:login.email,
//                 password:login.password})
//         }).then(res=>res.json())
        
//         .then(res => {
//             console.log('data is set in localstorage',res);
//             localStorage.setItem('token',res.data.token);
//             return res.data;
//         }
 
//         );
 
//     }
 
//  export default submitLogin;
 