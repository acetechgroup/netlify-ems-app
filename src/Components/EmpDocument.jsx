import React from 'react'

const EmpDocument = () => {
  return (
    <>
            <div className='reqstLeave'>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="p-3 rounded w-75 border mt-5 mb-1">
                        <h3 className="text-center">List of documents</h3>
                        <form className="row g-1" 
                        // onSubmit={handleSubmit}
                        >
                           
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    10th Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                //   onChange={(e) =>
                                //     setLeave({ ...leave, leaveFrom: e.target.value })
                                //   }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    10+2 Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                //   onChange={(e) =>
                                //     setLeave({ ...leave, leaveTo: e.target.value })
                                //   }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Graduation / BTech / Other Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                //   onChange={(e) =>
                                //     setLeave({ ...leave, leaveTo: e.target.value })
                                //   }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    PG Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                //   onChange={(e) =>
                                //     setLeave({ ...leave, leaveTo: e.target.value })
                                //   }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Aadhar Card
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                //   onChange={(e) =>
                                //     setLeave({ ...leave, leaveTo: e.target.value })
                                //   }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Pan Card
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                //   onChange={(e) =>
                                //     setLeave({ ...leave, leaveTo: e.target.value })
                                //   }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    DL
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                //   onChange={(e) =>
                                //     setLeave({ ...leave, leaveTo: e.target.value })
                                //   }
                                />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-100">
                                    Submit Details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
  )
}

export default EmpDocument