import React from 'react'

const PushNotification = () => {
  return (
<>
<section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All City's
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add City's
          </Button>
        </div>
      </section>
</>
  )
}

export default PushNotification