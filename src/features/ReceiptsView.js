import React from "react";

const ReceiptsView = () => {
  function handleSubmit(event) {
    event.preventDefault();
    const date = event.target.date.value;
    const amount = event.target.amount.value;
    const method = event.target.method.value;
    const remark = event.target.remark.value;
    console.log(date, amount, method, remark);
  }
  return (
    <div className="p-4    bg-slate-300 h-screen">
      <div className="m-auto md:w-8/12 bg-white rounded-xl p-3 pr-8">
        <h1 className="text-xl underline font-bold">Receipt Details</h1>
        <form onSubmit={handleSubmit}>
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
                name="method"
                class="select select-bordered w-full max-w-xs"
              >
                <option value="cash" selected>
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
    </div>
  );
};

export default ReceiptsView;
