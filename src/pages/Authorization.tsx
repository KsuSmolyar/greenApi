import { Input } from "../shared/ui/Input"
import styles from "../../styles/Authorization.module.css";
import { Btn } from "../shared/ui/Btn";
import { FormEvent } from "react";
import { useAuthorizationContext } from "../shared/contexts/authorizationContext";
import imgTechnology from "../../public/technology-http-api.png";
import classNames from "classnames";

const ID_INSTANCE = "idInstance"
const API_TOKEN_INSTANCE = "apiTokenInstance"

export const Authorization = () => {
	const { setCredentials } = useAuthorizationContext()

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
			<form className={classNames(styles.authorizationForm, "container")} onSubmit={handleSubmit}>
				<h2 className={styles.formTitle}>Вход в WhatsApp Web</h2>

				<p>Конфиденциально обменивайтесь сообщениями с друзьями и близкими в версии WhatsApp для браузера.</p>
				<Input placeholder={"Ввведите IdInstance"} name={ID_INSTANCE} required type={"password"} />
				<Input placeholder={"Ввведите apiTokenInstance"} name={API_TOKEN_INSTANCE} type={"password"} required />
				<Btn variant={"primary"} type={"submit"}>Войти</Btn>
			</form>
			<div className={"container"}>
				<h2 className={styles.title}>Для использования приложения необходимо осуществить следующие шаги:</h2>
				<p>С более детальной инструкцией можно ознакомиться на сайте <a href={"https://green-api.com/docs/before-start/#cabinet"} rel={"noreferrer"}>Green-api</a></p>
				<ol className={styles.authorizationOl}>
					<li><b>Установить мобильное приложение WhatsApp</b></li>
					<li><b>Регистрация в<a href={"https://console.green-api.com/registration"} rel={"noreferrer"}> Личном кабинете </a>Green-api</b>
						<p className={classNames(styles.authorizationParagraph, "bold", "underline")}>Инструкция:</p>
						<ol>
							<li>Введите электронную почту.</li>
							<li>Введите пароль и подтвердите его. Длина пароля должна быть не менее 6 символов.</li>
							<li>Выберите страну.</li>
							<li>Приняв пользовательское соглашение, нажмите на кнопку Зарегистрироваться.</li>
							<li>На Ваш адрес электронной почты будет направлено письмо. Введите код, указанный в письме, для подтверждения вашей учетной записи.</li>
						</ol>
					</li>

					<li><b>Создание и авторизация инстанса.</b><br /> Инстанс - это уникальный номер шлюза для отправки и получения сообщении через WhatsApp.Инстанс создается в личном кабинете и используется для организации HTTP API WhatsApp.
						<p className={classNames(styles.authorizationParagraph, "bold", "underline")}>Порядок создания инстанса:</p>
						<ol>
							<li>В <a href={"https://console.green-api.com/registration"} rel={"noreferrer"}> личном кабинете </a> нажмите на кнопку Создать инстанс.</li>
							<li>Выберите тарифный план(developer)</li>
							<li>Перейдите в список инстансев, нажав на кнопку Инстансы в боковом меню. В списке можете увидеть созданный вами инстанс.<br />
								<span className={styles.authorizationSpan}>Переход инстанса в рабочее состояние после создания может занимать до 2-х минут.</span>
							</li>
						</ol>
						<p className={classNames(styles.authorizationParagraph, "bold", "underline")}>Авторизация инстанса</p>
						<p className={styles.authorizationParagraph}>Для работы с GREEN-API требуется авторизовать инстанс. Авторизация инстанса выполняется в <a href={"https://console.green-api.com/registration"} rel={"noreferrer"}> Личном кабинете </a> путем считывания QR-кода из мобильного приложения WhatsApp Business или WhatsApp.</p>
						<p className={classNames(styles.authorizationParagraph, "bold", "underline")}>Порядок авторизации инстанса:</p>
						<ol>
							<li>Откройте на своем мобильном телефоне приложение WhatsApp Business или WhatsApp. На устройстве перейдите в раздел Привязка устройства, для этого:
								<ul>
									<li>На Android нажмите на 3 точки - Связанные устройства - Привязка устройства</li>
									<li>На iPhone перейдите в Настройки - Связанные устройства - Привязка устройства</li>
								</ul>
							</li>
							<li>Перейдите в <a href={"https://console.green-api.com/registration"} rel={"noreferrer"}> личный кабинет </a>. Выберите нужный вам инстанс.</li>
							<li>Нажмите на кнопку Получить QR. Отсканируйте QR код.</li>
						</ol>
					</li>
					<li><b>Получить параметры доступа к инстансу</b>
						<p className={styles.authorizationParagraph}>Для выполнения запросов HTTP API WhatsApp требуется использовать параметры доступа к инстансу. Параметры доступа публикуются в личном кабинете:</p>
						<ul>
							<li><b>apiUrl</b> - ссылка на хост API</li>
							<li><b>mediaUrl</b> - ссылка на хост API для отправки файлов</li>
							<li><b>idInstance</b> - уникальный номер инстанса</li>
							<li><b>apiTokenInstance</b> - ключ доступа инстанса</li>
						</ul>
					</li>
					<li><b>Настроить получение входящих данных</b>
						<p className={styles.authorizationParagraph}>Настройку получения входящих уведомлений можно также выполнить интерактивно. Для этого перейдите в <a href={"https://console.green-api.com/registration"} rel={"noreferrer"}> Личный кабинет </a> и выберите требуемый инстанс. Будут отображены текущее состояние инстанса и настройки для получения входящих уведомлений. Что бы поменять настройки необходимо нажать кнопку изменить на панели инстанса. Текущие настройки можно будет поменять на панели уведомлений см. рис. Укажите значение параметра webhookUrl, а также переключатели по видам уведомлений. Нажмите на кнопку "Сохранить изменения" для применения настроек.</p>
						<img src={imgTechnology} alt={"настройка параметров доступа к инстансу"} />
					</li>
				</ol>
			</div>
		</div>
	)
}
