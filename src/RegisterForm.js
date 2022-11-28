import { useState } from "react";

export default function RegisterForm() {
    const [form, setform] = useState({
        firstName: 'Luke',
        lastName: 'Jones',
        email: 'lukeJones@sculpture.com',
    });

    return (
        <>
            <label>
                First name:
                <input 
                value = {form.firstName}
                onChange = {e => { 
                    setform({
                        ...form, 
                        firstName: e.target.value 
                    });
                }}
                />
            </label>
            <label>
                Last name:
                <input 
                value = {form.lastName}
                onChange = {e => {
                    setform({
                        ...form,
                        lastName: e.target.value
                    });
                }}
                /> 
            </label>
            <label>
                Email:
                <input 
                value = {form.email}
                onChange = {e => {
                    setform({
                        ...form,
                        email: e.target.value
                    });
                }}
                /> 
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
}