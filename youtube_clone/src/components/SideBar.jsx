import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({selected, setSelected}) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn"
                onClick = {() => {setSelected(category.name)}}
                style={{
                    background: category.name === selected && "#FC1503",
                    color: "#eee",
                }}
                key={category.name}
            >
                <span
                    style={{
                        color: category.name === selected ? "#eee" : "red",
                        marginRight: "15px",
                    }}
                >
                    {category.icon}
                </span>
                <span
                    style={{
                        opacity: category.name === selected ? "1" : "0.8",
                    }}
                >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
);
export default SideBar;
