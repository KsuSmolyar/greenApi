
import { Input } from "../../../shared/ui/Input";
import styles from "../SearchBar.module.css";
import searchIcon from "../../../../public/search.svg";
import arrowLeft from "../../../../public/arrowLeft.svg";
import { Btn } from "../../../shared/ui/Btn";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { InputRef } from "../../../shared/ui/Input/config/types";
import { SearchBarProps } from "../config/types";
import { debounce } from "../../../shared/utils/debounce";

export const SearchBar = ({onSearch}: SearchBarProps) => {
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState("")
    const ref = useRef<InputRef>(null);

    const handleBtnClick = useCallback(() => {
        setIsSearch((prev) => {
            if (prev === true) {
                ref.current?.focus()
            } else {
                ref.current?.blur()
            }
            return !prev
        });
    },[])

    const handleFocus = useCallback(() => {
        setIsSearch(true);
    },[])

    const handleBlur = useCallback(() => {
        setIsSearch(false);
    }, [])
    

    const handleSearch = useCallback( debounce((value: string) => {
        onSearch(value)
    }, 150),[onSearch])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value.replace(/[^\d]/g, '');
        setInputValue(currentValue)
        handleSearch(currentValue)
    }, [handleSearch])

    return (
        <div className={styles.searchBar}>
            <Btn
                variant={"transparent"}
                iconSrc={isSearch ? arrowLeft : searchIcon}
                iconAlt={"лупа"} onClick={handleBtnClick}
            />
            <Input
                ref={ref}
                placeholder={"Поиск"}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={inputValue}
            />
        </div>
    )
}
