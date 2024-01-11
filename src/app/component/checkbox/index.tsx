"use client"

import { useState } from 'react';

interface CheckboxValue{
    title:string
}
const Checkbox = (checkboxValue:CheckboxValue) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="flex flex-row">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-[10px]"

            />
            <p>
                {checkboxValue.title}
            </p>

        </label>
    );
};

export default Checkbox;

