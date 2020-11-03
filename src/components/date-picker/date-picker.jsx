import React, { useState } from "react";
import { DatePicker, Space, Select } from "antd";

import moment from "moment";
import "./date-picker.css";

export const DateGroup = () => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const [date, setDate] = useState("large");
  const [size, setSize] = useState("middle");

  const dateFormat = "YYYY/MM/DD";

  return (
    <div className="date-picker">
      <Space direction="vertical">
        <Select size={date} placeholder="Choose a day" style={{ width: 160 }}>
          <Option>Last 7 days</Option>
        </Select>
      </Space>
      <Space direction="vertical">
        <RangePicker
          size={date}
          defaultValue={[
            moment("2015/01/01", dateFormat),
            moment("2015/01/01", dateFormat),
          ]}
          format={dateFormat}
        />
      </Space>
    </div>
  );
};

export default DateGroup;
