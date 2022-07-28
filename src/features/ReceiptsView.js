import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReceipt, deleteReceipt, editReceipt } from "./ReceiptsSlice";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const ReceiptsView = () => {
  const themeValues = ["Light", "Darkie"];

  const [isEdit, setIsEdit] = useState(false);
  const [paymentSelect, setPaymentSelect] = useState("");
  const [data, setData] = useState({});
  const receipts = useSelector((state) => state.receiptReducer.receipts);
  const dispatch = useDispatch();

  function handleChange(e) {
    setPaymentSelect(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const remark = e.target.remark.value;
    if (isEdit) {
      const { id } = data;
      dispatch(
        editReceipt({ id, date, amount, paymentMethod: paymentSelect, remark })
      );
      setData({});
      toast.success("Receipt Edited");
    } else {
      dispatch(
        addReceipt({
          id: uuidv4(),
          date: e.target.date.value,
          amount: e.target.amount.value,
          paymentMethod: e.target.paymentMethod.value,
          remark: e.target.remark.value,
        })
      );
      toast.success("Added a New Receipt");
    }
    e.target.reset();
  };

  const handleDelete = (id) => {
    if (!isEdit) {
      dispatch(deleteReceipt(id));
      toast.error("Deleted Receipt");
    } else {
      toast.info("Can't delete while editing");
    }
  };
  useEffect(() => {
    themeChange(false);
  });
  return (
    <>
      <div className="p-4 bg-slate-300 h-screen">
        <div className="grid">
          <div className="justify-self-end">
            <select
              className="text-xl rounded-lg p-2 bg-base-100"
              data-choose-theme
            >
              <option className="" option value="">
                Default Value
              </option>
              {themeValues.map((value) => (
                <option
                  className=" text-xl "
                  key={value.toLowerCase()}
                  value={value.toLowerCase()}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="m-auto md:w-8/12 bg-base-100  rounded-xl p-3 pr-8">
          <h1 className="text-xl underline font-bold">Receipt Details</h1>
          <form id="add-form" onSubmit={handleSubmit}>
            <div className="flex my-3 ">
              <label className="font-semibold w-3/12 self-center">
                Date<span className="text-red-600">*</span>
              </label>
              <div className="w-9/12">
                <input
                  defaultValue={data?.date}
                  required
                  type="date"
                  name="date"
                  placeholder="Enter Date"
                  class="input input-bordered w-full  max-w-xs"
                />
              </div>
            </div>
            <div className="flex my-3">
              <label className="font-semibold w-3/12 self-center">
                Amount<span className="text-red-600">*</span>
              </label>
              <div className="w-9/12">
                <input
                  defaultValue={data?.amount}
                  required
                  type="number"
                  min={0}
                  name="amount"
                  placeholder="Enter Amount(in INR)"
                  class="input input-bordered w-full  "
                />
              </div>
            </div>
            <div className="flex my-3">
              <label className="font-semibold w-3/12 self-center">
                Payment Mode<span className="text-red-600">*</span>
              </label>
              <div className="w-9/12">
                <select
                  value={paymentSelect}
                  onChange={handleChange}
                  name="paymentMethod"
                  class="select select-bordered w-full max-w-xs"
                >
                  <option defaultChecked value="cash">
                    Cash
                  </option>
                  <option value="card">Card</option>
                </select>
              </div>
            </div>
            <div className="flex my-3">
              <label className="font-semibold w-3/12 self-center">Remark</label>
              <div className="w-9/12">
                <input
                  defaultValue={data?.remark}
                  name="remark"
                  type="text"
                  placeholder="Enter remark"
                  class="input input-bordered w-full  "
                />
              </div>
            </div>

            <div className="flex flex-row-reverse gap-12">
              <button type="submit" className="btn btn-success">
                SUMBIT
              </button>
              <label className="btn btn-outline btn-error">CANCEL</label>
            </div>
          </form>
        </div>
        <div className="m-auto my-4 md:w-8/12 bg-base-100 rounded-xl p-3 pr-8">
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {receipts &&
                  receipts.map((receipt, index) => {
                    const { id, date, amount, paymentMethod, remark } = receipt;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{date}</td>
                        <td>{amount}</td>
                        <td>{paymentMethod}</td>
                        <td>{remark}</td>
                        <td>
                          <button
                            class="btn btn-ghost btn-xs"
                            onClick={() => {
                              setIsEdit(true);
                              setData(receipt);
                              console.log(receipt);
                              setPaymentSelect(receipt?.paymentMethod);
                              toast.warn("Caution while editing");
                            }}
                          >
                            Edit
                          </button>
                          <button
                            class="btn btn-ghost btn-xs"
                            onClick={() => {
                              handleDelete(id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptsView;
