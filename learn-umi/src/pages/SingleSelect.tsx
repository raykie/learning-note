import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Select } from 'antd'

const { Option } = Select

const SingleSelect = () => {
  const [options, setOptions] = useState([
    {
      key: '_1',
      value: 'opt1',
    },
    {
      key: '_2',
      value: 'opt2',
    },
    {
      key: '_3',
      value: 'opt3',
    },
    {
      key: '_3',
      value: 'opt3',
    },
  ])
  return (
    <>
      <select multiple>
        {options.map(item => (
          <option key={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
      <Select>
        {options.map(item => (
          <Option key={item.key} value={item.value}>
            {item.value}
          </Option>
        ))}
      </Select>
    </>
  )
}

// SingleSelect.defaultProps = {
//   id: '_default',
//   value: '_default',
//   labelText: 'default',
//   serverList: ['_default', '_test'],
//   onChange: () => ({}),
// }

// SingleSelect.propTypes = {
//   id: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   labelText: PropTypes.string.isRequired,
//   serverList: PropTypes.array.isRequired,
//   onChange: PropTypes.func.isRequired,
// }

export default SingleSelect
