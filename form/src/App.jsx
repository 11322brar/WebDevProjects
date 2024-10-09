import { useState } from "react";
import FormField from "./components/FormField";
import fieldsData from "./assets/data";

const App = () => {
    // Initial state for form data
    const initialFormData = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        country: "",
        streetAddress: "",
        city: "",
        stateProvince: "",
        zipPostalCode: "",
        notificationPreference: "",
        emailPreference: {
            comments: false,
            candidates: false,
            offers: false,
        },
    };

    // Set form data state with initial values
    const [formData, setFormData] = useState(initialFormData);

    function handleChange(event) {
        let { name, type, value, checked } = event.target;

        // Handling checkboxes within the nested emailPreference object
        if (name === "emailPreference") {
            setFormData((previousStateData) => ({
                ...previousStateData,
                emailPreference: {
                    ...previousStateData.emailPreference,
                    [event.target.value]: checked,
                },
            }));
        } else {
            // Handle other input types
            setFormData((previousStateData) => ({
                ...previousStateData,
                [name]: value,
            }));
        }
    }

    // Function to handle form submission (add your form submission logic here)
    const handleSubmit = (event) => {
        event.preventDefault();
        // Your submission logic here
        alert("Form submitted", formData);
    };

    // Reset function to clear the form data
    const reset = () => {
        setFormData(initialFormData); // Reset to initial form data
    };

    return (
        <div className="flex flex-col p-6 shadow-md dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <h2 className="text-2xl m-8 font-semibold text-gray-700 dark:text-white">
                Profile
            </h2>

            <div className="flex justify-around text-gray-700 dark:text-white">
                <form onSubmit={handleSubmit}>
                    {/* TEXT AREAS */}
                    <section className="grid grid-cols-2">
                        {fieldsData.map((element) => (
                            <FormField
                                key={element.fieldId}
                                element={element}
                                handleChange={handleChange}
                                formData={formData}
                                setFormData={setFormData}
                            />
                        ))}
                    </section>

                    {/* RADIO BUTTONS */}
                    <section className="flex flex-col items-start my-6">
                        <h3 className="font-semibold mb-1">
                            Push Notifications
                        </h3>
                        <p>These are delivered via SMS to your mobile phone.</p>
                        <div className="flex gap-2">
                            <input
                                type="radio"
                                name="notificationPreference"
                                id="radio1"
                                value="everything"
                                onChange={handleChange} // Use onChange instead of onClick
                            />
                            <label htmlFor="radio1">Everything</label>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="radio"
                                name="notificationPreference"
                                id="radio2"
                                value="sameAsEmail"
                                onChange={handleChange}
                            />
                            <label htmlFor="radio2">Same as Email</label>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="radio"
                                name="notificationPreference"
                                id="radio3"
                                value="noPushNotifications"
                                onChange={handleChange}
                            />
                            <label htmlFor="radio3">
                                No Push Notifications
                            </label>
                        </div>
                    </section>

                    {/* CHECKBOXES */}
                    <section className="flex flex-col mt-4">
                        <h3 className="font-semibold">Get Emails</h3>

                        <div className="flex flex-col mt-2 items-start">
                            <div className="flex items-start gap-2">
                                <input
                                    className="relative top-2"
                                    type="checkbox"
                                    name="emailPreference"
                                    id="checkbox1"
                                    value="comments"
                                    onChange={handleChange}
                                    checked={formData.emailPreference.comments}
                                />
                                <div className="flex-col items-start">
                                    <label htmlFor="checkbox1">Comments</label>
                                    <p className="text-gray-400">
                                        Get notified when someones posts a
                                        comment on a posting.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <input
                                    className="relative top-2"
                                    type="checkbox"
                                    name="emailPreference"
                                    id="checkbox2"
                                    value="candidates"
                                    onChange={handleChange}
                                    checked={
                                        formData.emailPreference.candidates
                                    }
                                />
                                <div className="flex-col items-start">
                                    <label htmlFor="checkbox2">
                                        Candidates
                                    </label>
                                    <p className="text-gray-400">
                                        {" "}
                                        Get notified when a candidate accepts or
                                        rejects an offer.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <input
                                    className="relative top-2"
                                    type="checkbox"
                                    name="emailPreference"
                                    id="checkbox3"
                                    value="offers"
                                    onChange={handleChange}
                                    checked={formData.emailPreference.offers}
                                />
                                <div className="flex-col items-start">
                                    <label htmlFor="checkbox3">Offers</label>
                                    <p className="text-gray-400">
                                        {" "}
                                        Get notified when a candidate applies
                                        for a job.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BUTTONS */}
                    <div>
                        <button
                            type="submit"
                            className="my-4 mr-2 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Submit
                        </button>
                        <button
                            type="button" // Ensure this button does not submit the form
                            onClick={reset}
                            className="my-4 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Reset
                        </button>
                    </div>
                </form>

                {/* OUTPUT */}
                <div className="text-gray-700 dark:text-white w-2/6 overflow-hidden">
                    <p className="text-xl m-8 font-semibold text-gray-700 dark:text-white">
                        Object with data
                    </p>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>{" "}
                </div>
            </div>
        </div>
    );
};

export default App;
