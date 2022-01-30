import { useState } from 'react'

const useForm = (estadoInicial) => {
    const [form, setForm] = useState(estadoInicial);

    const alterarForm = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const clean = () => {
        setForm(estadoInicial)
    }

    return { form, alterarForm, clean }
};

export default useForm
