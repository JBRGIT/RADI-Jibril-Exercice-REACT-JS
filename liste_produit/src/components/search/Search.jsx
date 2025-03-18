import { useState } from "react";
import styles from "./search.module.css";
function Search({ onChange }) {
  return (
    <div className={`${styles.flexCol} mb-5 p-3`}>
      <input
        type="text"
        placeholder="Search..."
        className={`${styles.input} `}
        onChange={onChange}
      />
      <div className={`${styles.borderB} form-check`}>
        <input
          type="checkbox"
          className={`${styles.btnCheck} form-check-input`}
          id="check"
        />
        <label htmlFor="check" className={"form-check-label"}>
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default Search;
