import { useState } from "react";
import css from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();


        if(value.trim() === ""){
          return  toast.error("Please enter the text", {
           duration: 3000,
           position: "top-right"
            })
        }
        onSubmit(value);
    };
    const handleChange = (e) => {
      setValue(e.target.value);
    }
    return (
        <>
  <header className={css.header}>
  <form className={css.form} onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="gallery"
      className={css.input}
      onChange={handleChange}
      value={value}
    />
    <button type="submit" className={css.btnSearch}>Search</button>
  </form>
</header>
<Toaster />
</>
    )
}