import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../store/users";

const UserEditPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getUser());

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser());
    };
    return (
        <div>
            {currentUser}
            <button onClick={handleSubmit} disabled={true}></button>
        </div>
    );
};
export default UserEditPage;
