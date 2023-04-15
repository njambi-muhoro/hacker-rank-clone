import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import {ImCross} from 'react-icons/im'
import Modal from 'react-modal';

function Assessments() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-[100vh] ">
      <section className="w-full mt-[10vh]">
        <div className="px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
          <div className="w-full flex items-center justify-between px-3 h-40 max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 ">
            <div
              className="text-sm"
              style={{ width: '70%', padding: '10px' }}
            >
              <p>
                Welcome, we're excited to hear that you're interested in creating
                a coding test. Our team is ready to help you design an assessment
                that accurately evaluates the skills of the developers you're
                looking to hire.
              </p>
            </div>
            <div className="flex gap-1 items-center">
             
              <button onClick={openModal}
                style={{ color: 'green', padding: '10px' }}
                className="flex gap-1 items-center"
              >
                <GoPlus />
                Create Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full ">
        <div className="px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
          <h1>My Assessments</h1>
        </div>
      </section>
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '65%',
    display:"flex"
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
}}>
  <div style={{width:"50%"}}><img src='https://hrcdn.net/fcore/assets/work/tests/welcome_screen_people_upd-b44df6b6d8.svg'/></div>
  <div style={{width:"45%", paddingTop:"40px"}}>
    <h2>SELECT ROLE</h2>
    <input type='text' placeholder='Select name'style={{padding:'7px', marginTop:"45px",marginBottom:"15px", background:"#EAF3F9"}}/><br/>
  <select
                      className="shadow appearance-none border-3 bg-[#EAF3F9] rounded  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="userType"
                        style={{width:"260px"}}
                    >
                      <option value="student">Student</option>
                      <option value="TM">TM</option>
                  </select><br />
                  <button style={{marginTop:"25px", background:"#EAF3F9", padding:"7px"}}>Create Asssessment</button>
              </div>
  <div style={{width:"5%"}}>
    <button onClick={closeModal}><ImCross/></button>
  </div>
</Modal>

    </div>
  );
}

export default Assessments;
