import { useState } from "react";



const Modal = () => {
  const [handleCity,setHandleCity] = useState()
  const handleType = (e)=>{
    setHandleCity(e.target.value)
  }
const handleSubmit = () => {
    localStorage.removeItem("city")
    localStorage.setItem("city", handleCity)
    location.reload()
}
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box flex flex-col gap-4 phone:p-6 p-3">
        <h1 className="phone:text-3xl text-xl font-semibold">Shaharingizni yozing</h1>
      <div className="flex phone:flex-row flex-col gap-3">
        <input type="text" placeholder="Shahar kiriting" onChange={handleType} className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-outline" onClick={handleSubmit}>Havoni korish</button>
      </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
