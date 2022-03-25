import React, { useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import CustomFormik from "./Forms/CustomFormik";

export default function Form({ yups, isIcon }) {
  const [showForm, setShowForm] = React.useState(false);
  const [form, setForm] = React.useState(null);
  useEffect(() => {
    console.log("Form Change");
  }, [form]);
  return (
    <>
      {isIcon === undefined ? (
        <BsPencilSquare
          size={30}
          className="text-white font-bold cursor-pointer"
          onClick={() => {
            setShowForm(!showForm);
            setForm(yups);
          }}
        />
      ) : (
        <div
          onClick={() => {
            setShowForm(!showForm);
            setForm(yups);
          }}
          className="bg-[#ff562222] rounded-lg shadow-2xl text-[#ff5722] text-2xl font-bold text-center py-24 cursor-pointer my-12 bg-customers-card-bg bg-right bg-no-repeat"
        >
          {yups.name} Detaylarını buraya girebilirsiniz...
        </div>
      )}

      {form !== null && (
        <div className="fixed inset-0 h-[100vh] z-30 w-full bg-[#00000033]">
          <div className=" h-full bg-white w-full md:w-[80%] relative mx-auto flex flex-col items-center justify-center py-4">
            <MdOutlineClose
              className="text-black hover:text-red-600 cursor-pointer absolute top-2 right-2 z-50"
              size={30}
              onClick={() => {
                setForm(null);
                window.location.reload();
              }}
            />
            <CustomFormik
              formSchema={form?.formSchema}
              item={form?.item}
              initialValues={form?.initialValues}
              name={form?.name}
            />
            {/* <div className="md:absolute md:bottom-1/2 z-0 md:font-bold text-[12px] md:px-4 flex flex-row justify-between items-center w-full">
              <div
                onClick={() => {
                  setForm(count > 0 ? Yups[count - 1] : null);
                  setCount(count > 0 ? count - 1 : 0);
                }}
                className="flex flex-col items-center justify-center hover:text-[#FEC50B] cursor-pointer"
              >
                {count === 0 ? (
                  <MdOutlineClose size={30} />
                ) : (
                  <MdArrowBackIosNew size={30} />
                )}
                {Yups[count - 1] ? Yups[count - 1]?.name : "Closed Form"}
              </div>
              <div
                onClick={() => {
                  setForm(count < Yups.length - 1 ? Yups[count + 1] : null);
                  setCount(count < Yups.length - 1 ? count + 1 : 0);
                }}
                className="flex flex-col items-center justify-center hover:text-[#FEC50B] cursor-pointer"
              >
                <MdOutlineArrowForwardIos size={30} />
                {Yups[count + 1] ? Yups[count + 1]?.name : "Closed Form"}
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
