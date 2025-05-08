import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onOpenFilter?: () => void;
}

export function SearchInput({
  searchTerm,
  setSearchTerm,
  onOpenFilter,
}: Props) {
  return (
    <div className="wrapper">
      <Paper
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        sx={{
          p: "3px 4px",
          display: "flex",
          alignItems: "center",
          mt: "30px",
          mb: "30px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu" onClick={onOpenFilter}>
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{ "aria-label": "search" }}
        />
        {searchTerm ? (
          <IconButton type="button" sx={{ p: "10px" }} aria-label="clear">
            <CloseIcon />
          </IconButton>
        ) : (
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        )}
      </Paper>
    </div>
  );
}
