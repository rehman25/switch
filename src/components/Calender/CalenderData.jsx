import React, { useState } from 'react';
import { Badge, Calendar, Alert, Table, Input, Space, Pagination, DatePicker,List } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiFilter, CiSearch, CiGrid41, CiGrid2H, CiMenuKebab } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import dayjs from 'dayjs';
import Button from '../Basic/button';
import style from './calender.module.css';

const getListData = (value) => {
  switch (value.date()) {
    case 8:
      return [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
    case 10:
      return [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
    case 15:
      return [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
      ];
    default:
      return [];
  }
};

const getMonthData = (value) => (value.month() === 8 ? 1394 : null);

const listData = Array.from({ length: 14 }, (_, i) => ({
  key: i + 1,
  DateID: `EXG4545FR${(i % 2) + 1}`,
  Events: i % 2 === 0 ? 'I-Link' : 'IHC',
}));

const columns = [
  { title: 'Date', dataIndex: 'DateID', key: 'DateID' },
  { title: 'Events', dataIndex: 'Events', key: 'Events' },
  { title: 'Action', key: 'action', render: () => <CiMenuKebab /> },
];

const CalendarData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [searchText, setSearchText] = useState('');
  const [isGridView, setGridView] = useState(true);
  const [value, setValue] = useState(dayjs());
  const [selectedValue, setSelectedValue] = useState(dayjs());

  const onGridViewToggle = () => setGridView(true);
  const onListViewToggle = () => setGridView(false);

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onSearch = (e) => setSearchText(e.target.value.toLowerCase());

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    const filteredData = listData.filter((item) => item.content.toLowerCase().includes(searchText));
    return (
      <ul className="events">
        {filteredData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const filteredData = listData.filter(
    (item) =>
      item.Events.toLowerCase().includes(searchText) ||
      item.DateID.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className={style.Route}>
        <h5>Calendar</h5>
        <Button Text="Add New" buttonClass={style.buttonAdd} />
      </div>
      <div className={style.container}>
        <Space className={style.SearchTable}>
          <div className={style.SearchBar}>
            <Input
              placeholder="Search..."
              prefix={<CiSearch size={20} />}
              suffix={<CiFilter size={20} />}
              onChange={onSearch}
              style={{ width: 200 }}
              className={style.inputSearch}

            />
            <SettingOutlined className={style.tableSettings} />
          </div>
          <div className={style.ViewChange}>
            <div className={style.boxIcons}>
              <CiGrid41 className={isGridView ? style.gridIcon2 : style.gridIcon} onClick={onGridViewToggle} />
              <CiGrid2H className={isGridView ? style.gridIcon : style.gridIcon2} onClick={onListViewToggle} />
            </div>
            <MdErrorOutline className={style.tableInstruction} />
          </div>
        </Space>
        {isGridView ? (
          <>
            <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
            <Calendar cellRender={cellRender} value={value} onSelect={onSelect} />
       
          </>
        ) : (
          <>
            <Table
              columns={columns}
              dataSource={filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
              pagination={false}
              rowSelection={{ type: 'checkbox' }}
              size="small"
            />
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={(page, newPageSize) => {
                setCurrentPage(page);
                setPageSize(newPageSize);
              }}
              style={{ marginTop: 16, textAlign: 'right' }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default CalendarData;
