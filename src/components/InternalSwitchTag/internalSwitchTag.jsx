import React, { useState } from 'react';
import style from './internatSwitch.module.css'
import { Table, Input, Pagination, Space } from 'antd';
import {  SettingOutlined } from '@ant-design/icons';
import { CiMenuKebab } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import Button from '../Basic/button'
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";





const dataSource = [
    {
        key: '1',
        SwitchID: 'EXG4545FR01',
        InternalSwitchTag: 'I-Link',
    },
    {
        key: '2',
        SwitchID: 'EXG4545FR02',
        InternalSwitchTag: 'IHC',
    },
    {
        key: '3',
        SwitchID: 'EXG4545FR01',
        InternalSwitchTag: 'I-Link',
    },
    {
        key: '4',
        SwitchID: 'EXG4545FR02',
        InternalSwitchTag: 'IHC',
    },
    {
        key: '5',
        SwitchID: 'EXG4545FR01',
        InternalSwitchTag: 'I-Link',
    },
    {
        key: '6',
        SwitchID: 'EXG4545FR02',
        InternalSwitchTag: 'IHC',
    },
    {
        key: '7',
        SwitchID: 'EXG4545FR01',
        InternalSwitchTag: 'I-Link',
    },
    {
        key: '8',
        SwitchID: 'EXG4545FR02',
        InternalSwitchTag: 'IHC',
    },
    {
        key: '9',
        SwitchID: 'EXG4545FR01',
        InternalSwitchTag: 'I-Link',
    },
    {
        key: '10',
        SwitchID: 'EXG4545FR02',
        InternalSwitchTag: 'IHC',
    },
    {
        key: '11',
        SwitchID: 'EXG4545FR01',
        InternalSwitchTag: 'I-Link',
    },
    {
        key: '12',
        SwitchID: 'EXG4545FR02',
        InternalSwitchTag: 'IHC',
    },
    {
        key: '13',
        SwitchID: 'EXG4545FR01',
        InternalSwitchTag: 'I-Link',
    },
    {
        key: '14',
        SwitchID: 'EXG4545FR02',
        InternalSwitchTag: 'IHC',
    },

];

const columns = [
    {
        title: 'Switch ID',
        dataIndex: 'SwitchID',
        key: 'SwitchID',
    },
    {
        title: 'Internal Switch Tag',
        dataIndex: 'InternalSwitchTag',
        key: 'InternalSwitchTag',
    },

    {
        title: 'Action',
        key: 'action',
        render: () => <CiMenuKebab />, // You can add any action icons here
    },
];

const MultiViewTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [searchText, setSearchText] = useState('');

    const onSearch = (value) => setSearchText(value.toLowerCase());

    const filteredData = dataSource.filter((item) =>
        item.InternalSwitchTag.toLowerCase().includes(searchText) ||
        item.SwitchID.toLowerCase().includes(searchText)
    );

    return (
        <>    
        <div className={style.Route}>
              <h5>Internal Switch Tag</h5>
             <Button Text={'Add New'} buttonClass={style.buttonAdd} />
        </div>
        <div className={style.container}>
            <Space className={style.SearchTable}>
                <div className={style.SearchBar}>
                        <Input
                            placeholder="Search..."
                            prefix={<CiSearch size={20} />}
                            suffix={<CiFilter size={20}  />}
                            onChange={(e) => onSearch(e.target.value)}
                            style={{ width: 200 }}
                            className={style.inputSearch}
                        />
                        <SettingOutlined className={style.tableSettings} />
                </div>
                <div className={style.ViewChange}>
                         <div className={style.boxIcons}>
                            <CiGrid41 className={style.gridIcon} />
                            <CiGrid2H className={style.gridIcon} />
                         </div>
                        <MdErrorOutline className={style.tableInstruction} />
                </div>

            </Space>
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
                onChange={(page, pageSize) => {
                    setCurrentPage(page);
                    setPageSize(pageSize);
                }}
                style={{ marginTop: 16, textAlign: 'right' }}
            />
        </div>
        </>
    );
};

export default MultiViewTable;
