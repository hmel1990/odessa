import './Form.css'


import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useState} from "react"; // https://github.com/jquense/yup

// схема валидации с помощью Yup
const validationSchema = Yup.object({
    login: Yup.string()
        .min(3, 'Логин должен содержать минимум 3 символа')
        .required('Логин обязателен'),
    password: Yup.string()
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .required('Пароль обязателен'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Подтверждение пароля обязательно'),
    email: Yup.string()
        .email('Некорректный email')
        .optional(),
    phone: Yup.string()
        .matches(/^\+?\d{10,15}$/, 'Некорректный номер телефона')
        .optional(),
    name: Yup.string()
        .max(50, 'Имя не должно превышать 50 символов')
        .optional(),
});






const MyForm = () => {
    const [message, setMessage] = useState('');

    const formatValues = (values) => {
        return `
Логин: ${values.login}
Пароль: ${values.password}
Подтверждение: ${values.confirmPassword}
Email: ${values.email}
Телефон: ${values.phone}
Имя: ${values.name}
  `;
    };


    const initialValues = {
        login: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        name:'',
    }

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log(values); // ← здесь все значения формы
        setMessage(formatValues (values));
        // setSubmitting(true); // ← кнопка "Отправить" станет disabled
        // await fetch(...);    // ← отправка данных
        resetForm();         // ← сбросить форму
        // setSubmitting(false);
    };
    return (
        <div className="anketa-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, resetForm }) => (
                    <Form>
                <fieldset className="anketa-fieldset">
                    <legend className="anketa-legend">Регистрация пользователя</legend>

                    {/* логин */}
                    <label htmlFor="login" className="anketa-label">Логин (обязательное поле):</label>
                    <Field
                        autoComplete="username"
                        type="text"
                        id="login"
                        name="login"
                        className="anketa-input"
                    />
                    <ErrorMessage name="login" component="div" className="anketa-error" /><br />

                    {/* пароль */}
                    <label htmlFor="password" className="anketa-label">Пароль (обязательное поле):</label>
                    <Field
                        autoComplete="new-password"
                        type="password"
                        id="password"
                        name="password"
                        className="anketa-input"
                    />
                    <ErrorMessage name="password" component="div" className="anketa-error" /><br />

                    {/* подтверждение пароля */}
                    <label htmlFor="confirmPassword" className="anketa-label">Подтверждение пароля:</label>
                    <Field
                        autoComplete="new-password"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="anketa-input"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="anketa-error" /><br />

                    {/* электронная почта */}
                    <label htmlFor="email" className="anketa-label">Электронная почта:</label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        className="anketa-input"
                    />
                    <ErrorMessage name="email" component="div" className="anketa-error" /><br />

                    {/* телефон */}
                    <label htmlFor="phone" className="anketa-label">Телефон:</label>
                    <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className="anketa-input"
                    />
                    <ErrorMessage name="phone" component="div" className="anketa-error" /><br />


                    {/* полное имя */}
                    <label htmlFor="name" className="anketa-label">Полное имя и фамилия:</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        size="50"
                        className="anketa-input"
                    />
                    <ErrorMessage name="fullname" component="div" className="anketa-error" /><br />

                    {/* кнопки */}
                    <input
                        type="submit"
                        value="Отправить"
                        disabled={isSubmitting}
                        className="anketa-button anketa-button-submit"
                    />
                    <input
                        type="reset"
                        value="Сбросить"
                        onClick={() => resetForm({ values: initialValues })}
                        className="anketa-button anketa-button-reset"
                    />
                </fieldset>
                    <div className ="FinalMessage"><pre>{message}</pre></div>
                    </Form>
                )
                }
            </Formik>

        </div>
    )
}
export default MyForm;