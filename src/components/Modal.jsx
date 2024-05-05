

function Modal({children,cb}) {
  return (
    <div className="fixed z-50 top-0 right-0 backdrop-blur-md  w-full h-screen">
      <div onClick={()=>cb(false)} className="w-full h-screen absolute top-0 right-0 backdrop-blur-md"></div>
      {children}
      </div>
  )
}

export default Modal
