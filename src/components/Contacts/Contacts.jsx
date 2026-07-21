import { setLoading } from '@/store/slices/loadingSlice';
import { setPopup } from '@/store/slices/popupSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cleave from "cleave.js/react";

const Contacts = () => {
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
        } finally {
            dispatch(setLoading(false))
            setName("")
            setType("")
            setComment("")
            setPhoneNumber("")
        }
    }

    return (
        <div className="contact" id="contacts">
            <div className="contact__topbar"><span>Контакты</span></div>
            <div className="contact__main">
                <div className="contact__map">
                    <iframe src="https://yandex.uz/map-widget/v1/?ll=69.266375%2C41.342613&amp;mode=search&amp;ol=geo&amp;ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyNDkzMDU5MTc3EjZPyrt6YmVraXN0b24sIFRvc2hrZW50LCBUdXJrcW8ncmcnb24gMi10b3Iga28nY2hhc2ksIDIiCg1hiIpCFdheJUI%2C&amp;z=16.57" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-label">
                        <label>Имя </label>
                        <input type="text" placeholder="Ваше имя" name="name" required
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div className="contact__form-label">
                        <label>Контактный номер </label>
                        <Cleave
                            options={{ blocks: [2, 3, 2, 2], delimiter: "-", numericOnly: true }}
                            id="phone"
                            name="phone"
                            type="tel"
                            value={phoneNumber}
                            onChange={handleChange}
                            placeholder="99-999-99-99"
                        />
                    </div>
                    <div className="contact__form-label">
                        <label>Тип бизнеса </label>
                        <input type="text" placeholder="Тип бизнеса" name="btype" required
                            value={type}
                            onChange={(e) => {setType(e.target.value)}}
                        />
                    </div>
                    <div className="contact__form-check">
                        <input type="checkbox" id="chk" required />
                        <div>
                            <label htmlFor="chk">Я даю согласие на&nbsp;обработку</label>
                            <Link href="/policy">персональных данных</Link>
                        </div>
                    </div>
                    {error !== "" && <p className='error'>{error}</p>}
                    <button className="contact__form-btn pop btn" disabled={loading.value}>Оставить заявку</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts