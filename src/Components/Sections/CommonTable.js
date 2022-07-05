import MainButton from '../Elements/MainButton'

import Button from './Styles/CommonTableStyles.css'

const CommonTable = () => {
  return (
    <>
      <table className="common-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Date/Time</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Details</th>
            <th>Resource</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>22/07/05 | 22.30</td>
            <td>3425236</td>
            <td>Kasun Perera</td>
            <td>kasun123@gmail.com</td>
            <td>1234512345</td>
            <td>Marketing</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              temporibus vitae perferendis in debitis repellendus dolore nam
              deserunt sed dignissimos.
            </td>
            <td>
              <MainButton buttonText="Download" extraClass="down" />
            </td>
            <td>
              <MainButton buttonText="Complete" extraClass="com" />
            </td>
            <td>
              <MainButton buttonText="Delete" extraClass="del" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CommonTable
