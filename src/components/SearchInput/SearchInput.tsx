import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useSearchStore } from "../../stores/searchStore";

interface Props {
  onOpenFilter: () => void;
  onSearch?: () => void;
}

export function SearchInput({ onOpenFilter, onSearch }: Props) {
  const { searchTerm, setSearchTerm } = useSearchStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="wrapper">
      <Paper
        component="form"
        onSubmit={handleSubmit}
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
          <IconButton
            onClick={handleClear}
            sx={{ p: "10px" }}
            aria-label="clear"
          >
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
