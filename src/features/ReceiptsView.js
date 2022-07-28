import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReceipt, deleteReceipt } from "./ReceiptsSlice";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const ReceiptsView = () => {
  const receipts = useSelector((state) => state.receiptReducer.receipts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(
      addReceipt({
        id: uuidv4(),
        date: e.target.date.value,
        amount: e.target.amount.value,
        paymentMethod: e.target.paymentMethod.value,
        remark: e.target.remark.value,
      })
    );
    document.getElementById("add-form").reset();
    e.preventDefault();
  };

  const handleDelete = (id) => {
    dispatch(deleteReceipt(id));
  };

  return (
    <div className="p-4    bg-slate-300 h-screen">
      <div className="m-auto md:w-8/12 bg-white rounded-xl p-3 pr-8">
        <h1 className="text-xl underline font-bold">Receipt Details</h1>
        <form id="add-form" onSubmit={handleSubmit}>
          <div className="flex my-3 ">
            <label className="font-semibold w-3/12 self-center">
              Date<span className="text-red-600">*</span>
            </label>
            <div className="w-9/12">
              <input
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
                name="paymentMethod"
                class="select select-bordered w-full max-w-xs"
              >
                <option value="cash" defaultChecked>
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
      <div className="m-auto my-4 md:w-8/12 bg-white rounded-xl p-3 pr-8">
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Remark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {receipts &&
                receipts.map((receipt) => {
                  const { id, date, amount, paymentMethod, remark } = receipt;
                  return (
                    <tr key={id}>
                      <td>{date}</td>
                      <td>{amount}</td>
                      <td>{paymentMethod}</td>
                      <td>{remark}</td>
                      <td>
                        <Link
                          to="/edit-receipt"
                          state={{ id, amount, paymentMethod, remark, date }}
                        >
                          <button class="btn btn-ghost btn-xs">Edit</button>
                        </Link>

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
  );
};

export default ReceiptsView;
