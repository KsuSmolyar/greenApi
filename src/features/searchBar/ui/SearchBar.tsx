
import { Input } from "../../../shared/ui/Input";
import styles from "../SearchBar.module.css";
import searchIcon from "../../../../public/search.svg";
import arrowLeft from "../../../../public/arrowLeft.svg";
import { Btn } from "../../../shared/ui/Btn";
import { useRef, useState } from "react";
import { InputRef } from "../../../shared/ui/Input/config/types";

export const SearchBar = () => {
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const ref = useRef<InputRef>(null);

    const handleBtnClick = () => {
        setIsSearch((prev) => {
            if (prev === true) {
                ref.current?.focus()
            } else {
                ref.current?.blur()
            }
            return !prev
        });
    }

    const handleFocus = () => {
        setIsSearch(true);
    }

    const handleBlur = () => {
        setIsSearch(false);
    }

    return (
        <div className={styles.searchBar}>
            <Btn iconSrc={isSearch ? arrowLeft : searchIcon} iconAlt={"лупа"} onClick={handleBtnClick} />
            <Input ref={ref} placeholder={"Поиск"} onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    )
}
