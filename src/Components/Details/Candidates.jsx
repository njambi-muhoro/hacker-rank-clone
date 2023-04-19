import React, { useState} from 'react'
import { GoPlus } from 'react-icons/go';
import Modal from "react-modal";

function Candidates(props) {
  const { id } = props
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [assessment, setAssessment] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  }


  return (
    
     <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8 h-[100vh] justify-center items-center">
      <button className="flex" onClick={() => setModalIsOpen(true)} style={{ background: 'grey', padding: '5px' }}>
        <GoPlus />Invite now
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '82%',
    display:"flex"
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
      }}
      >
        <div className='flex'>
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Invite a student</h2>
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input type="text" id="username" name="username" value={email} onChange={(event) => setEmail(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
              <label htmlFor="assessment" className="block mb-2">Assessment:</label>
              <input type="text" id="username" name="username" value={id} onChange={(event) => setAssessment(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
              <label htmlFor="date" className="block mb-2">End Date:</label>
              <input type="date" id="username" name="username" value={date} onChange={(event) => setDate(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
              <label htmlFor="text" className="block mb-2">Note:</label>
              <textarea rows='3' id="note" name="note" value={note} onChange={(event) => setNote(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
              <button class=' bg-green-500 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
														type='submit'>Invite</button>
          </form>
          <img src='https://hrcdn.net/fcore/assets/work/tests/reports/invite-icon-ecb1953efe.svg'alt='' style={{width:"50%", padding:"2px"}}/>
        </div>
      </Modal>
    </div>

  )
}

export default Candidates