import React, { useState } from 'react'
import QRCode from 'react-qr-code';

const QrCodeAttendance = () => {

  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(updateTime, 5000);

  return (
    <div className='pay_employee_bg bg-head'>
      <div className='text-center'>
        <div className='img-pay-emp'>
          <QRCode
            size={300}
            value={time}
            bgColor='white'
            fgColor='black'
          />
        </div>
        <div className=''>
          <p>Scan the QR Code</p>
        </div>
        <div>
          <p>Use your Mobile application</p>
        </div></div>
    </div>
  )
}

export default QrCodeAttendance

// import React from 'react'
// import { QRCodeCanvas } from "qrcode.react";

// const QrCodeAttendance = () => {
//   return (
//     <>
//     <div>QrCodeAttendance</div>
//     <QRCodeCanvas value="https://example.com" size={200} />
//     </>
//   )
// }

// export default QrCodeAttendance