import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface Props {
  handleSearch: (searchTerm: string) => void;
}

export function SearchInput({ handleSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="wrapper">
      <Paper
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchTerm);
        }}
        sx={{
          p: "3px 4px",
          display: "flex",
          alignItems: "center",
          mt: "30px",
          mb: "30px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
