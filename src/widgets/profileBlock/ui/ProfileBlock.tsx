import { useAuthorizationContext } from "../../../shared/contexts/authorizationContext";
import styles from "../ProfileBlock.module.css";
import { ProfileBlockIntelligence } from "./ProfileBlockIntelligence";
import { ProfileBlockUserName } from "./ProfileBlockUserName";

export const ProfileBlock = () => {
    const { accountData } = useAuthorizationContext()
    return (
        <div className={styles.profileBlock}>
            <h1 className={styles.profileBlockTitle}>Профиль</h1>
            <div className={styles.profileBlockImgContainer}>
                <img src={accountData.avatar} alt={"фото профиля"} />
            </div>
            <div className={styles.profileBlockContent}>
                <ProfileBlockUserName />
                <ProfileBlockIntelligence />
            </div>
        </div>
    )
}
