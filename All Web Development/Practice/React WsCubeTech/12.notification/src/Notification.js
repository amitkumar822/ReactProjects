import React from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Notification() {
    let submitBtn = () => {
        NotificationManager.info('Info message');
        NotificationManager.success('Success message', 'Title here');
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
    }
  return (
    <>
        <h1>Notification Function </h1>
        <button onClick={submitBtn}>Submit</button>
        <NotificationContainer/>
    </>


  )
}

export default Notification