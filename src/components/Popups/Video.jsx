import { setLoading } from '@/store/slices/loadingSlice';
import { setPopup } from '@/store/slices/popupSlice';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Video = () => {
    const dispatch = useDispatch();
    const popup = useSelector(state => state.popup);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (popup.value === "video") {
            video?.play();
        } else {
            video?.pause();
            video.currentTime = 0; 
        }
    }, [popup.value]);

    return (
        <div className={`popup ${popup.value === "video" ? "active" : ""}`} id="video">
            <div className="popup-overlay popup-close" onClick={() => dispatch(setPopup(""))}> </div>
            <div className="popup-inner video">
                <button className="popup-back popup-close" type="button" onClick={() => dispatch(setPopup(""))}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.19191 7.19191C7.63823 6.7456 8.36184 6.7456 8.80816 7.19191L16 14.3829L23.1919 7.19191C23.6039 6.77993 24.2522 6.74824 24.7005 7.09684L24.8082 7.19191C25.2545 7.63823 25.2545 8.36184 24.8082 8.80816L17.6172 16L24.8082 23.1919C25.2201 23.6039 25.2518 24.2522 24.9032 24.7005L24.8082 24.8082C24.3618 25.2545 23.6382 25.2545 23.1919 24.8082L16 17.6172L8.80816 24.8082C8.39617 25.2201 7.74791 25.2518 7.29958 24.9032L7.19191 24.8082C6.7456 24.3618 6.7456 23.6382 7.19191 23.1919L14.3829 16L7.19191 8.80816C6.77993 8.39617 6.74824 7.74791 7.09684 7.29958L7.19191 7.19191Z" fill="white"></path>
                    </svg>
                </button>
                <video ref={videoRef} src="/1-intouch.mp4" controls id="missionvideo"> </video>
            </div>
        </div>
    )
}

export default Video