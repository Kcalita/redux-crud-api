import React, { useEffect, useState } from "react";
import { getUsersFromApiMiddleware, editUsersFromApiMiddleware, deleteUsersFromApiMiddleware} from "../../middlewares/crud-middlewares";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Delete from "./Delete";
import { getUserId } from "../../action/crud-action";


const Listing = () => {
  const [form, setForm] = useState(false);
  const [del, setDel] = useState(false);
  const dispatch = useDispatch();
  const { usersList, usersListLoading, userSaveLoading, userSaveStatus } =
    useSelector((state) => state.crudReducer);
 
  const handleChangeClick = () => {
    setForm(!form);
  };

  const handleGetData = (id) => {
    dispatch(editUsersFromApiMiddleware(id));
    setForm(!form);
  };

  const handleClearData = (id) => {
    dispatch(getUserId(id));
    setDel(!del);
  };

  const handleDelete = (id) => {
    let choice = window.confirm("Are you sure you want to DELETE this User?");
    if (!choice) {
      return;
    }
    dispatch(deleteUsersFromApiMiddleware(id));
  };

  useEffect(() => {
    dispatch(getUsersFromApiMiddleware());
  }, []);

  useEffect(() => {
    if (!userSaveLoading) {
      if (userSaveStatus) {
        dispatch(getUsersFromApiMiddleware());
      }
    }
  }, [userSaveLoading, userSaveStatus]);

  return (
  <>
    <h3><center>Redux Crud</center></h3>
    <div>
      {usersListLoading ? ( <p>Loading......</p> ) : (
        <div>
          <button style={{float:"right"}} onClick={() => setForm(!form)}>ADD USER</button>
          
        <table>
          <tbody>
            {usersList && usersList.map((a) => {
                return (
                  <tr key={a.id}>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.gender}</td>
                    <td>{a.status}</td>
                    <td>
                      <button onClick={() => handleGetData(a.id)}>Edit</button>
                      &nbsp;&nbsp;
                      <button onClick={() => handleDelete(a.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        </div>
      )}
      
      {form ? <Form click={() => handleChangeClick()} /> : ""}
      {del ? <Delete click={() => handleClearData()} /> : ""}
    </div>
  </>
  );
};

export default Listing;










// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsersFromApiMiddleware, deleteusersFromApiMiddleware } from "../../Middleware/Middleware";
// import { deleteId } from "../../Action/Action";

// const Data = () => {
//     // const[tabledata, settabledata] = useState(false);
//     // const dispatch = useDispatch();
//     const { usersList } = useSelector((state)=>state.crudReducer);
//     const dispatch = useDispatch()

// // const Deleteuser = (props) =>{
// //   const dispatch = useDispatch()
// //   const { usersaveloading, id, isvalid } = useSelector((state) => state.crudReducer
// //   )
// // }


// useEffect(() => {
// dispatch(getUsersFromApiMiddleware());
// }, []);

// // useEffect(() => {
// //   if(isvalid === true) {
// //     props.click();
// //     dispatch(deleteId())
// //   }
// // }, [isvalid]);

// const handleDelete = (id) => {
//   let choice = window.confirm("Do you really want to delete");
//   if(!choice){
//     return
//   }
//   else{
//     dispatch(deleteusersFromApiMiddleware(id))
//     dispatch(deleteId())
//   }

// }    


//     return(
//         <div>
//           <div>
//           <button>Add</button>
//           </div>
//             {/* {usersListLoading ? (<h1>loading.....</h1>) : ( */}
//             <tbody>
//             {usersList &&
//               usersList.map((_) => {
//                 return (
//                   <tr>
//                   <td key={_.id}></td>
//                     <td>{_.name}</td>
//                     <td>{_.email}</td>
//                     <td>{_.gender}</td>
//                     <td>{_.status}</td>
//                     <td>
//                       <button>Edit</button>
//                       &nbsp;&nbsp;
//                       <button onClick={() => handleDelete(_.id)}>Delete</button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//             {/* )} */}
//         </div>
//     )
        
// }

// export default Data
