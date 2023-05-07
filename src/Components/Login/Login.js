import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

export const Login = () => {
  const { signinUsingGoogle } = useAuth();
  const img = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="submit" valu="Submit" />
          <p className="massage">
            New to Emajon <Link to="/register">Create Account</Link>
          </p>
        </form>
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img className="google-icon" src={img} alt="" />
          </div>
          <button onClick={signinUsingGoogle} className="google-btn ">
            {" "}
            <p>Google SIgn in</p>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";
// import useAuth from "../../hooks/useAuth";

// export const Login = () => {
//   const { signinUsingGoogle } = useAuth();

//   return (
//     <div className="login-form  mt-5 ">
//       <div className="login">
//         <h2>Login</h2>
//         <form onSubmit="">
//           <input name="" id="" type="emal" placeholder="Your Email" />
//           <br />

//           <input type="password" placeholder="Enter Password" />
//           <br />
//           <br />
//           <input type="submit" valu="Submit" />
//         </form>
//         <br />
//         <br />
//         <br />
//         <p>
//           New to Emajon <Link to="/register">Create Account</Link>
//         </p>
//         <div>------or------</div>
//         <div className="google-btn">
//           <div className="google-icon-wrapper">
//             <img
//               className="google-icon"
//               src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//             />
//           </div>
//           <button onClick={signinUsingGoogle} className="google-btn ">
//             {" "}
//             Google SIgn in{" "}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
