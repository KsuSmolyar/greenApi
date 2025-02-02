import { useEffect, useState } from "react";
import styles from "../Chat.module.css";
import { useActiveContactContext } from "../../../shared/contexts/activeContactContext";
import ava from "../../../../public/ava.svg";
import { getUserName } from "../../../shared/utils/getUserName";
import { useAuthorizationContext } from "../../../shared/contexts/authorizationContext";

export const ChatHeader = () => {
    const { activeContact } = useActiveContactContext();
    const [imgSrc, setImgSrc] = useState("");
    const [userName, setUserName] = useState("")
    const {apiService} = useAuthorizationContext()

    useEffect(() => {
        if (!activeContact) return
        const { id } = activeContact;
        apiService?.getContactInfo(id)
            .then(res => {
                setImgSrc(res?.avatar ? res.avatar : ava)
                const currName = getUserName({name: res?.name, contactName: res?.contactName, id})
                setUserName(currName?? "")
            })
     }, [activeContact, apiService])

    return (
        <header className={styles.header}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={imgSrc} alt={"аватарка"} />
            </div>
            <h4 className={styles.title}>{userName}</h4>
        </header>
    )
}
