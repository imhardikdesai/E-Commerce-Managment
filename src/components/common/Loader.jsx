import React from 'react'
import { Vortex } from 'react-loader-spinner'

const Loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
    </>
  )
}

export default Loader
