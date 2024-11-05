import React, { useState } from 'react';
import style from './ServiceConfiguration.module.css'
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
        ServiceID: 'EKG464SJFN01',
        ChannelID: 'I-Link',
        Services: 'SOAP',
        NameID:"Reliable switches used for various residential and commercial electrical applications."
    },
    {
        key: '2',
        ServiceID: 'EKG464SJFN02',
        ChannelID: 'IRIC',
        Services: 'PARSER',
        NameID:"Durable switches designed for safety and ease of use in homes and offices."

    },
    {
        key: '3',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID:"Modern switches that combine style with advanced safety features and energy efficiency."

    },
    {
        key: '4',
        ServiceID: 'EKG464SJFN04',
        ChannelID: 'Legrand Switches',
        Services: 'SOAP',
        NameID:"Elegant switches that offer a variety of styles and functionalities for upscale installations."

    },
    {
        key: '5',
        ServiceID: 'EKG464SJFN05',
        ChannelID: 'Havells Switches',
        Services: 'PARSER',
        NameID:"Robust and aesthetically pleasing switches suitable for both home and industrial environments."

    },
    {
        key: '6',
        ServiceID: 'EKG464SJFN06',
        ChannelID: 'ABB Switches',
        Services: 'CHPROC',
        NameID:"Innovative switches focusing on energy efficiency and safety, ideal for commercial use."

    },
    {
        key: '7',
        ServiceID: 'EKG464SJFN07',
        ChannelID: 'Siemens Switches',
        Services: 'PARSER',
        NameID:"High-quality switches known for their reliability and advanced technology in industrial settings."

    },
    {
        key: '8',
        ServiceID: 'EKG464SJFN08',
        ChannelID: 'Philips Switches',
        Services: 'SOAP',
        NameID:"Integrated lighting solutions that provide functionality and modern design."

    },
    {
        key: '9',
        ServiceID: 'EKG464SJFN09',
        ChannelID: 'Crompton Switches',
        Services: 'PARSER',
        NameID:"Affordable switches that deliver good performance for everyday use."

    },
    {
        key: '10',
        ServiceID: 'EKG464SJFN10',
        ChannelID: 'Chint Switches',
        Services: 'CHPROC',
        NameID:"Budget-friendly switches that meet basic electrical needs with dependable performance."

    },
    {
        key: '11',
        ServiceID: 'EKG464SJFN11',
        ChannelID: 'I-Link',
        Services: 'CHPROC',
        NameID:"Reliable switches used for various residential and commercial electrical applications"

    },
    {
        key: '12',
        ServiceID: 'EKG464SJFN12',
        ChannelID: 'IHC',
        Services: 'CHPROC',
        NameID:"Reliable switches used for various residential and commercial electrical applications"
        
    },
    {
        key: '13',
        ServiceID: 'EKG464SJFN13',
        ChannelID: 'I-Link',
        Services: 'CHPROC',
        NameID:"Reliable switches used for various residential and commercial electrical applications"

    },
    {
        key: '14',
        ServiceID: 'EKG464SJFN14',
        ChannelID: 'IHC',
        Services: 'CHPROC',
        NameID:"Reliable switches used for various residential and commercial electrical applications"

    },

];

const columns = [
    {
        title: 'Service ID',
        dataIndex: 'ServiceID',
        key: 'ServiceID',
    },
    {
        title: 'Channel',
        dataIndex: 'ChannelID',
        key: 'ChannelID',
    },
    {
        title: 'Services',
        dataIndex: 'Services',
        key: 'Services',
    },
    {
        title: 'Name',
        dataIndex: 'NameID',
        key: 'NameID',
    },

    {
        title: 'Action',
        key: 'action',
        render: () => <CiMenuKebab />, // You can add any action icons here
    },
];

const ServiceConfiguration = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [searchText, setSearchText] = useState('');

    const onSearch = (value) => setSearchText(value.toLowerCase());

    const filteredData = dataSource.filter((item) =>
        item.ChannelID.toLowerCase().includes(searchText) ||
        item.ServiceID.toLowerCase().includes(searchText)  ||  
        item.NameID.toLowerCase().includes(searchText)  ||
        item.Services.toLowerCase().includes(searchText) 
    );

    return (
        <>    
        <div className={style.Route}>
              <h5>Service Configuration</h5>
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

export default ServiceConfiguration;
