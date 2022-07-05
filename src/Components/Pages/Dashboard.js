import { useState } from 'react'

import InputBox from '../Elements/InputBox'
import MainButton from '../Elements/MainButton'
import CommonTable from '../Sections/CommonTable'

const Dashboard = () => {
  const [active, setActive] = useState('new')

  const toggleMenu = (e, value) => {
    e.preventDefault()
    setActive(value)
  }
  return (
    <>
      <div className="page dashboard">
        <div className="left menu">
          <li>
            <a
              className={`${active === 'new' && 'active'}`}
              href="#"
              onClick={(e) => toggleMenu(e, 'new')}
            >
              New Requests
            </a>
          </li>
          <li>
            <a
              className={`${active === 'complete' && 'active'}`}
              href="#"
              onClick={(e) => toggleMenu(e, 'complete')}
            >
              Completed Requests
            </a>
          </li>
          <li>
            <a
              className={`${active === 'message' && 'active'}`}
              href="#"
              onClick={(e) => toggleMenu(e, 'message')}
            >
              Messages
            </a>
          </li>
        </div>
        <div className="right content">
          <div className="search">
            <InputBox inputPlaceholder="Search..." />
          </div>
          <div className="data-table">
            <CommonTable />
          </div>
        </div>
        <MainButton buttonText="Logout" />
      </div>
    </>
  )
}

export default Dashboard
