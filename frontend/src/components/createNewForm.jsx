import React, { useState } from "react";
import { ApiServiceInstance } from "../services/api.services"

const CreateNewForm = () => {

    const initialValue = {
        name: "",
        sessionData: {
            quiz: 0,
            techSession: 0,
            nonTechSession: 0
        },
        email: ""
    }

    const [inputData, setInputData] = useState(initialValue)

    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        if (name === "quiz" || name === "techSession" || name === "nonTechSession") {
            setInputData(prev => ({
                ...prev,
                sessionData: {
                    ...prev.sessionData,
                    [name]: value
                }
            }))
        } else {

            setInputData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = async () => {
        try {
            const uploadData = await ApiServiceInstance.axios_post("/user", inputData);
            console.log({ uploadData })
        } catch (error) {
            console.log({ error })
        }
    }


    return (
        <form className="p-3 bg-success bg-opacity-25 mb-5" onSubmit={handleSubmit}>
            {/* <div className="mb-2">
                <input ref={CreatePhotoField} onChange={e => setFile(e.target.files[0])} type="file" className="form-control" />
            </div> */}
            <div className="mb-2">
                <input onChange={(e) => handleChange(e)} name="name" value={inputData.name} type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-2">
                <input onChange={(e) => handleChange(e)} name="email" value={inputData.email} type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-2">
                <input onChange={(e) => handleChange(e)} name="quiz" value={inputData?.sessionData?.quiz || ""} type="number" className="form-control" placeholder="Quiz Count" />
            </div>
            <div className="mb-2">
                <input onChange={(e) => handleChange(e)} name="techSession" value={inputData?.sessionData?.techSession || ""} type="number" className="form-control" placeholder="Tech Sessions" />
            </div>
            <div className="mb-2">
                <input onChange={(e) => handleChange(e)} name="nonTechSession" value={inputData?.sessionData?.nonTechSession || ""} type="number" className="form-control" placeholder="Non Tech Sessions" />
            </div>

            <button className="btn btn-success">Add New User!</button>
        </form>
    )
}

export default CreateNewForm;