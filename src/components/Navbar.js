import React from 'react'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import {useStore} from "../store/state"





function Navbar() {
    const [showModal, setShowModal] = React.useState(false);
    const [showDrop, setShowDrop] = React.useState(false);
    const {water , setWater} = useStore()
    function Modal() {
  
        return (
          <>
            
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Add a cup of water
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                      <div class="relative  mx-auto text-left">
                        
                            
                                <div class=" " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" onClick={()=>setWater(water+250)} class="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{"1 Cup => 250ml"}</a>
                                <a href="#" onClick={()=>setWater(water+600)} class="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{"1 small bottle => 600ml"}</a>
                                <a href="#" onClick={()=>setWater(water+1500)} class="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{"1 large bottle => 1500ml"}</a>
                                </div>
                            
                            </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        );
      }
    return (
        <>
        <div className="p-3">
            <span className=" text-2xl  font-semibold text-gray-100">Water Intake</span>
            <button onClick={()=>setShowModal(true)} className="text-red-600" style={{float:"right"}}><AddCircleOutlineRoundedIcon/></button>
        </div>
        <Modal/>
      </>
    )
}

export default Navbar
