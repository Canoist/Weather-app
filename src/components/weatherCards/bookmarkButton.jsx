import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import StarBorderPurple500TwoToneIcon from "@mui/icons-material/StarBorderPurple500TwoTone";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

const BookmarkButton = ({ onClick, bookmark }) => {
    return (
        <IconButton
            sx={{
                color: yellow.A400,
                position: "absolute",
                right: "16px",
                top: 0
            }}
            onClick={onClick}
        >
            {!bookmark ? (
                <StarBorderPurple500TwoToneIcon
                    titleAccess="Избранное"
                    fontSize="large"
                />
            ) : (
                <StarIcon titleAccess="Избранное" fontSize="large" />
            )}
        </IconButton>
    );
};

BookmarkButton.propTypes = {
    onClick: PropTypes.func,
    bookmark: PropTypes.bool
};

export default BookmarkButton;
