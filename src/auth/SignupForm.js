// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Alert from "../common/Alert";

// function SignupForm({ signup }) {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [formErrors, setFormErrors] = useState([]);

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     let result = await signup(formData);
//     if (result.success) {
//       history.push("/companies");
//     } else {
//       setFormErrors(result.errors);
//     }
//   }

//   function handleChange(evt) {
//     const { name, value } = evt.target;
//     setFormData(data => ({ ...data, [name]: value }));
//   }

//   return (
//       <div className="SignupForm">
//         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//           <h2 className="mb-3">Sign Up</h2>
//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Username</label>
//                   <input
//                       name="username"
//                       className="form-control"
//                       value={formData.username}
//                       onChange={handleChange}
//                       autoComplete="username"
//                       required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                       type="password"
//                       name="password"
//                       className="form-control"
//                       value={formData.password}
//                       onChange={handleChange}
//                       autoComplete="new-password"
//                       required
//                   />
//                 </div>

//                 {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}

//                 <button
//                     type="submit"
//                     className="btn btn-primary float-right"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

// export default SignupForm;
