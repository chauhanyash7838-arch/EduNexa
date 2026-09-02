
import { useState } from "react";
import "./Aadharcard.scss";
import axios from "axios";


function Aadharcard() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        gender: "",
        identityNumber: "",
        address: "",
    });
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post("https://localhost:7044/api/Persons", {
                name: formData.name,
                dob: formData.dob,
                gender: formData.gender,
                identityNumber: formData.identityNumber,
                address: formData.address,
            });

            alert("Data Successfully ✅");
        } catch (error) {
            console.error(error);
            alert("API error ❌");
        }
    };
    return (
        <div className="aadhar-form-page">

            <div className="aadhar-form-card">

                <h2>Aadhaar Information</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value,
                            })
                        }
                        placeholder="Enter full name"
                    />

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    dob: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    gender: e.target.value,
                                })
                            }
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Aadhaar Number</label>
                        <input
                            type="text"
                            name="identityNumber"
                            value={formData.identityNumber}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    identityNumber: e.target.value,
                                })
                            }
                            placeholder="Enter Aadhaar number"
                            maxLength={12}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    address: e.target.value,
                                })
                            }
                            placeholder="Enter address"
                            rows={4}
                        ></textarea>
                    </div>

                    <button type="submit">
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Aadharcard;




