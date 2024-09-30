import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";

const UserForm = () => {
  const [loader, setLoader] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    setTimeout(() => {
      navigate("/success");
    }, 3000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); // Clear the preview if the file is not an image
      alert('Please select a valid image file.');
    }
  };

  if (loader) return <Loader />;
  return (
    <div className="shadow-md p-5 rounded-md mx-auto xl:w-[60%] w-full">
      <h3 className="sm:text-3xl text-xl font-semibold">Claim this item</h3>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="date">
            Date of Loss
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="placeOfLoss">
            Detailed information to Place of Loss:
          </label>
          <textarea
            id="placeOfLoss"
            name="placeOfLoss"
            required
            className="w-full py-3 px-4 h-32 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="brand">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="model">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="color">
            Color
          </label>
          <select
            id="color"
            name="color"
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          >
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
            <option value="Grey">Grey</option>
            <option value="Purple">Purple</option>
            <option value="Brown">Brown</option>
            <option value="Pink">Pink</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="material">
            Material
          </label>
          <select
            id="material"
            name="material"
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          >
            <option value="Leather">Leather</option>
            <option value="Metal">Metal</option>
            <option value="Plastic">Plastic</option>
            <option value="Other Material">Other Material</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="content">
            Content
          </label>
          <input
            type="text"
            id="content"
            name="content"
            required
            className="w-full py-3 px-4 h-16 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="proofOfOwnership">
            Please enter your proof of ownership
          </label>
          <textarea
            id="proofOfOwnership"
            name="proofOfOwnership"
            required
            className="w-full py-3 px-4 h-32 outline-none bg-[#F4F4F4] rounded-md text-base border border-gray-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-medium text-black" htmlFor="picture">
            Picture
          </label>
          <div className="border border-gray-400 h-48 w-60 mb-6">
            {imagePreview ? <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" /> : null}
          </div>
          <input
            type="file"
            id="picture"
            name="picture"
            placeholder="select image"
            required
            onChange={handleImageChange}
            className="py-3 px-4 outline-none w-60 bg-[#F4F4F4] rounded-md text-base"
          />
        </div>
        <button
          type="submit"
          className="bg-[#015907] rounded-md py-3 text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
