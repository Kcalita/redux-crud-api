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

