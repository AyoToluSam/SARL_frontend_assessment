import { SearchIcon, X } from "lucide-react";
import styles from "./_styles.module.scss";

type SearchInputProps = {
  searchText?: string;
  onSearch?: (searchText: string) => void;
  placeholder?: string;
};

const Search = ({
  searchText,
  onSearch,
  placeholder = "Search...",
}: SearchInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSearch?.(value);
  };

  return (
    <div className={styles.search_input}>
      <SearchIcon size={20} className={styles.icon} />
      <input
        className={styles.input}
        value={searchText}
        placeholder={placeholder}
        onChange={handleInputChange}
      />

      {searchText && onSearch && (
        <X size={16} className={styles.close} onClick={() => onSearch("")} />
      )}
    </div>
  );
};

export default Search;
