import { useState } from "react"

export const useForm = ( initialState ) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        return setValues(initialState);
    }

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setValues( { ...values, [name]: value });
    }

    return [ values, handleInputChange, reset ];
}
