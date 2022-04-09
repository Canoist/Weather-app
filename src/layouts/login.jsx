import { Box } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SignInForm from "../components/ui/signInForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = () => {
        setFormType((prev) => (prev === "register" ? "login" : "register"));
    };

    return (
        <Box
            sx={{
                width: "100vw",
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {formType === "register" ? (
                <>
                    <Box sx={{ pb: "70px" }}>
                        <RegisterForm toggleForm={toggleFormType} />
                    </Box>
                </>
            ) : (
                <>
                    <SignInForm toggleForm={toggleFormType} />
                </>
            )}
        </Box>
    );
};
export default Login;
