import { setLoading } from '@/store/slices/loadingSlice';
import { setPopup } from '@/store/slices/popupSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cleave from "cleave.js/react";

const Callback = () => {
    const dispatch = useDispatch();
    const popup = useSelector(state => state.popup);
    const loading = useSelector(state => state.loading);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [comment, setComment] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { value } = e.target;
        setPhoneNumber(value);

        if (value.length !== 12) {
            setError("Заполните все данные")
        } else {
            setError("")
        }
    };

    useEffect(() => {
        dispatch(setLoading(false))
        setName("")
        setType("")
        setComment("")
        setPhoneNumber("")
        setError("")
    }, [popup.value])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(error !== "") {
            return
        } else if(phoneNumber.length === 0) {
            setError("Заполните все данные")
            return
        }

        dispatch(setLoading(true))

        const cleanedPhone = "+998" + phoneNumber.replace(/[^\d]/g, "");
        const message = `💬 Новая заявка:

Данные клиента:
Имя: ${name}
Телефон: ${cleanedPhone}
Тип бизнеса: ${type}
Комментарии: ${comment}`

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`,
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: process.env.NEXT_PUBLIC_BOT_CHAT_ID,
                    text: message,
                }),
                }
            );

            if (response.ok) {
                dispatch(setPopup("thanks"));
            } else {
                console.error("Ошибка при отправке сообщения.");
            }
        } catch (error) {
            console.error("Произошла ошибка:", error);
        }
    }

    return (
        <div className={`popup ${popup.value === "callback" ? "active" : ""}`} id="callback">
            <div className="popup-overlay popup-close" onClick={() => dispatch(setPopup(""))}></div>
            <form className="popup-inner order" onSubmit={handleSubmit}>
                <button className="popup-back popup-close" type="button" onClick={() => dispatch(setPopup(""))}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.19191 7.19191C7.63823 6.7456 8.36184 6.7456 8.80816 7.19191L16 14.3829L23.1919 7.19191C23.6039 6.77993 24.2522 6.74824 24.7005 7.09684L24.8082 7.19191C25.2545 7.63823 25.2545 8.36184 24.8082 8.80816L17.6172 16L24.8082 23.1919C25.2201 23.6039 25.2518 24.2522 24.9032 24.7005L24.8082 24.8082C24.3618 25.2545 23.6382 25.2545 23.1919 24.8082L16 17.6172L8.80816 24.8082C8.39617 25.2201 7.74791 25.2518 7.29958 24.9032L7.19191 24.8082C6.7456 24.3618 6.7456 23.6382 7.19191 23.1919L14.3829 16L7.19191 8.80816C6.77993 8.39617 6.74824 7.74791 7.09684 7.29958L7.19191 7.19191Z" fill="white"></path>
                    </svg>
                </button>
                <div className="order__title">Заказать звонок</div>
                <input className="order__input" type="text" placeholder="Ваше имя" name="name" required
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <Cleave
                    options={{ blocks: [2, 3, 2, 2], delimiter: "-", numericOnly: true }}
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={handleChange}
                    placeholder="99-999-99-99"
                    className="order__input"
                />
                <input className="order__input" type="text" placeholder="Тип бизнеса" name="btype" required
                    value={type}
                    onChange={(e) => {setType(e.target.value)}}
                />
                <textarea className="order__input textarea" placeholder="Коментарии" name="comments" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
                <div className="contact__form-check">
                    <input type="checkbox" id="chk5" required />
                    <div>
                        <label htmlFor="chk5">Подтверждаю свое согласие с условиями</label>
                        <Link href="/policy" onClick={() => dispatch(setPopup(""))}>обработки персональных данных</Link>
                    </div>
                </div>
                {error !== "" && <p className='error'>{error}</p>}
                <button className="contact__form-btn btn pop" type="submit" disabled={loading.value}>Отправить</button>
            </form>
        </div>
    )
}

export default Callback