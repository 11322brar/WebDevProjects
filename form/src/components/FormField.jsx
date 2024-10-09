import React from "react";

const FormField = ({ handleChange, formData, setFormData, element }) => {
    return (
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor={element.fieldId}
                >
                    {element.labelName}
                </label>
                <input
                    name={element.fieldName}
                    id={element.fieldId}
                    type={element.fieldType}
                    placeholder={element.placeholder}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    onChange={handleChange}
                    value={formData[element.fieldName]}
                />
            </div>
        </div>
    );
};

export default FormField;
