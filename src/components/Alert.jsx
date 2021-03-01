import { useEffect } from 'react';

export default function Alert (props) {
  const { name = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);

    return () => {
        clearTimeout(timerId);
    };
      // eslint-disable-next-line
  }, [name]);

  return (
    <> 
    <div className="toast-container">
      <div className="toast-header">
        <strong className="me-auto">Message</strong>
        {/* <small>type</small> */}
      </div>
      <div className="toast-body">
        {name}
      </div>
    </div>
    </>
  )
}