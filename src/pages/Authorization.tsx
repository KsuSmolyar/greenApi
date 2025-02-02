import { Input } from "../shared/ui/Input"
import styles from "../../styles/Authorization.module.css";
import { Btn } from "../shared/ui/Btn";
import { FormEvent } from "react";
import { useAuthorizationContext } from "../shared/contexts/authorizationContext";

const ID_INSTANCE = "idInstance"
const API_TOKEN_INSTANCE = "apiTokenInstance"

export const Authorization = () => {
    const {setCredentials} = useAuthorizationContext()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const idInstanceInput = form.elements.namedItem(ID_INSTANCE);
        const apiTokenInstanceInput = form.elements.namedItem(API_TOKEN_INSTANCE);

        if (idInstanceInput && idInstanceInput instanceof HTMLInputElement && apiTokenInstanceInput && apiTokenInstanceInput instanceof HTMLInputElement) {
            setCredentials({
                idInstance: idInstanceInput.value,
                apiTokenInstance: apiTokenInstanceInput.value
            })
        }
    }
    return (
        <div className={styles.authorization}>
            <form className={styles.authorizationForm} onSubmit={handleSubmit}>
                <h2 className={styles.formTitle}>Вход в WhatsApp Web</h2>
                <p>Конфиденциально обменивайтесь сообщениями с друзьями и близкими в версии WhatsApp для браузера.</p>
                <Input placeholder={"Ввведите IdInstance"} name={ID_INSTANCE} required type={"password"} />
                <Input placeholder={"Ввведите apiTokenInstance"} name={API_TOKEN_INSTANCE} type={"password"} required />
                <Btn variant={"primary"} type={"submit"}>Войти</Btn>
            </form>
        </div>
    )
}
