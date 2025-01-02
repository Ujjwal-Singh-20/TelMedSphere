import React, { useState, useContext, useRef } from "react";
import commonContext from "../../contexts/common/commonContext";
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import { Alert, CircularProgress } from "@mui/material";
import httpClient from '../../httpClient';

const Profile = () => {
    const { isProfileOpen, toggleProfile, setFormUserInfo } = useContext(commonContext);

    const getLocalStorageValue = (key: string, defaultValue: any) => {
        const value = localStorage.getItem(key);
        return value && value !== "undefined" ? value : defaultValue;
    };

    const [username, setUsername] = useState(getLocalStorageValue("username", ""));
    const [age, setAge] = useState(getLocalStorageValue("age", ""));
    const [gender, setGender] = useState(getLocalStorageValue("gender", ""));
    const [phone, setPhone] = useState(getLocalStorageValue("phone", ""));
    const [specialization, setSpecialization] = useState(getLocalStorageValue("specialization", ""));
    const [fee, setFee] = useState(getLocalStorageValue("fee", 199));
    const email = getLocalStorageValue("email", "");
    const [isChPasswd, setChPasswd] = useState(false);
    const [passwd, setPasswd] = useState("");
    const [isInvPass, setIsInvPass] = useState(false);
    const [isInvAge, setIsInvAge] = useState(false);
    const [isAlert, setIsAlert] = useState("");
    const [alertCont, setAlertCont] = useState("");
    const [isSuccessLoading, setIsSuccessLoading] = useState(false);
    const isDoctor = getLocalStorageValue("usertype", "") === "doctor";

    const profileRef = useRef<HTMLFormElement | null>(null);

    useOutsideClose(profileRef, () => {
        toggleProfile(false);
        setUsername(getLocalStorageValue("username", ""));
        setAge(getLocalStorageValue("age", ""));
        setGender(getLocalStorageValue("gender", ""));
        setPhone(getLocalStorageValue("phone", ""));
        setSpecialization(getLocalStorageValue("specialization", ""));
        setFee(getLocalStorageValue("fee", 199));
        setPasswd("");
    });

    useScrollDisable(isProfileOpen);

    const checkAge = (age: string) => {
        const isValid = /^[0-9]{1,3}$/.test(age) && parseInt(age) > 0 && parseInt(age) <= 120;
        setIsInvAge(!isValid);
        return isValid;
    };

    const checkPasswd = (passwd: string) => {
        const isValid = /^.{6,}$/.test(passwd);
        setIsInvPass(!isValid);
        return isValid;
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isInvAge || (isChPasswd && isInvPass)) return;

        setIsSuccessLoading(true);

        try {
            await httpClient.put('/update_details', {
                email,
                username,
                usertype: isDoctor ? "doctor" : "patient",
                age,
                specialization,
                gender,
                phone,
                passwd,
                fee,
            });
            setIsSuccessLoading(false);
            setIsAlert("success");
            setAlertCont("Successfully updated");
            setTimeout(() => {
                setFormUserInfo({
                    username,
                    usertype: isDoctor ? "doctor" : "patient",
                    gender,
                    phone,
                    email,
                    passwd: passwd || getLocalStorageValue("passwd", ""),
                    specialization,
                    age,
                    fee,
                });
                toggleProfile(false);
            }, 1000);
        } catch {
            setIsSuccessLoading(false);
            setIsAlert("error");
            setAlertCont("Something went wrong. Please try again later.");
        } finally {
            setTimeout(() => {
                setIsAlert("");
                setAlertCont("");
            }, 1000);
        }
    };

    return (
        <>
            {isProfileOpen && (
                <div className="backdrop">
                    <div className="modal_centered">
                        <form id="account_form" ref={profileRef} onSubmit={handleFormSubmit}>
                            {isAlert && <Alert severity={isAlert} className="form_success_alert">{alertCont}</Alert>}
                            <div className="form_head">
                                <h2>Profile</h2>
                                <p>Check your profile</p>
                            </div>
                            <div className="form_body">
                                <div className="input_box">
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="input_field"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="username" className="input_label">Username</label>
                                </div>
                                {isDoctor && (
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            id="specialization"
                                            name="specialization"
                                            className="input_field"
                                            value={specialization}
                                            onChange={(e) => setSpecialization(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="specialization" className="input_label">
                                            Specialization (Eg. Cancer Surgeon)
                                        </label>
                                    </div>
                                )}
                    
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
