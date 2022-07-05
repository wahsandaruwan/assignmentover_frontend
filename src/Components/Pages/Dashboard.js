import InputBox from '../Elements/InputBox'
import CommonTable from '../Sections/CommonTable'

const Dashboard = () => {
  return (
    <>
      <div className="page dashboard">
        <div className="left menu">
          <li>
            <a href="#">New Requests</a>
          </li>
          <li>
            <a href="#">Completed Requests</a>
          </li>
          <li>
            <a href="">Messages</a>
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
      </div>
    </>
  )
}

export default Dashboard
