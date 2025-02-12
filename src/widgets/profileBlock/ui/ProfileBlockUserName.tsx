import { useCallback } from "react";
import { InlineInput } from "../../../entities/InlineInput";
import { useAuthorizationContext } from "../../../shared/contexts/authorizationContext";
import styles from "../ProfileBlock.module.css";
import { debounce } from "../../../shared/utils/debounce";
import { LOCAL_STORAGE_USER_NAME } from "../../../shared/constants";

export const ProfileBlockUserName = () => {
    const { setUserName, accountData } = useAuthorizationContext()

    const handleChangeName = (value: string) => {
        debouncedChangeName(value)
    }

    const debouncedChangeName = useCallback(debounce((value: string) => {
        setUserName(value)
    }, 500), [])

    const handleEditedName = () => {
        localStorage.setItem(LOCAL_STORAGE_USER_NAME, accountData.name);
    }

    return (
        <div className={styles.profileBlockContentTop}>
            <InlineInput
                value={accountData.name}
                handleInputChange={handleChangeName}
                label={"Ваше имя"}
                handleEditedClick={handleEditedName}
            />
            <p className={styles.profileBlockText}>Это не ваше имя пользователя или PIN-код. Данное имя будут видеть ваши контакты в WhatsApp.</p>
        </div>
    )
}
