import React from "react";
import s from './Login.module.scss';
import { Button } from "../../components/button/Button";

export const Login = () => {
    return (
        <div className={`${s.login} wrap`}>
            <h2 style={{marginBottom: '5%'}}>Sign in</h2>
            <div className={s.wrapper}>
                <h2 className={s.title}>Войти на страницу</h2>
                <form action="#" className={s.form}>
                    <input type="email" name="" placeholder="email" />
                    <input type="password" name="" placeholder="password" />
                    <div className={s.button}>
                        <Button>sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}