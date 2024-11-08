import React, { useState } from 'react';
import style from './InternalTranCode.module.css'
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
        ChannelID: 'EKG464SJFN01',
        ResponseCode: 'I-Link',
        ExternalResponseCode: 'SOAP',
    },
    {
        key: '2',
        ChannelID: 'EKG464SJFN02',
        ResponseCode: 'IRIC',
        ExternalResponseCode: 'PARSER',

    },
    {
        key: '3',
        ChannelID: 'EKG464SJFN03',
        ResponseCode: 'Schneider Electric',
        ExternalResponseCode: 'CHPROC',

    },
    {
        key: '4',
        ChannelID: 'EKG464SJFN04',
        ResponseCode: 'Legrand Switches',
        ExternalResponseCode: 'SOAP',

    },
    {
        key: '5',
        ChannelID: 'EKG464SJFN05',
        ResponseCode: 'Havells Switches',
        ExternalResponseCode: 'PARSER',

    },
    {
        key: '6',
        ChannelID: 'EKG464SJFN06',
        ResponseCode: 'ABB Switches',
        ExternalResponseCode: 'CHPROC',

    },
    {
        key: '7',
        ChannelID: 'EKG464SJFN07',
        ResponseCode: 'Siemens Switches',
        ExternalResponseCode: 'PARSER',

    },
    {
        key: '8',
        ChannelID: 'EKG464SJFN08',
        ResponseCode: 'Philips Switches',
        ExternalResponseCode: 'SOAP',

    },
    {
        key: '9',
        ChannelID: 'EKG464SJFN09',
        ResponseCode: 'Crompton Switches',
        ExternalResponseCode: 'PARSER',

    },
    {
        key: '10',
        ChannelID: 'EKG464SJFN10',
        ResponseCode: 'Chint Switches',
        ExternalResponseCode: 'CHPROC',

    },
    {
        key: '11',
        ChannelID: 'EKG464SJFN11',
        ResponseCode: 'I-Link',
        ExternalResponseCode: 'CHPROC',

    },
    {
        key: '12',
        ChannelID: 'EKG464SJFN12',
        ResponseCode: 'IHC',
        ExternalResponseCode: 'CHPROC',
        
    },
    {
        key: '13',
        ChannelID: 'EKG464SJFN13',
        ResponseCode: 'I-Link',
        ExternalResponseCode: 'CHPROC',

    },
    {
        key: '14',
        ChannelID: 'EKG464SJFN14',
        ResponseCode: 'IHC',
        ExternalResponseCode: 'CHPROC',

    },

];

const columns = [
    {
        title: 'Channel Name',
        dataIndex: 'ChannelID',
        key: 'ChannelID',
    },
    {
        title: 'Response Code',
        dataIndex: 'ResponseCode',
        key: 'ResponseCode',
    },
    {
        title: 'External Response Code',
        dataIndex: 'ExternalResponseCode',
        key: 'ExternalResponseCode',
    },

    {
        title: 'Action',
        key: 'action',
        render: () => <CiMenuKebab />, // You can add any action icons here
    },
];

const InternalTranCode = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [searchText, setSearchText] = useState('');

    const onSearch = (value) => setSearchText(value.toLowerCase());

    const filteredData = dataSource.filter((item) =>
        item.ChannelID.toLowerCase().includes(searchText) ||
        item.ResponseCode.toLowerCase().includes(searchText)  ||  
        item.ExternalResponseCode.toLowerCase().includes(searchText) 
    );

    return (
        <>    
        <div className={style.Route}>
              <h5>Internal Tran Code</h5>
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

export default InternalTranCode;
