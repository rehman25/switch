import React, { useState , useEffect } from 'react';
import style from './AllUsers.module.css'
import { Table, Input, Pagination, Space  } from 'antd';
// import {  SettingOutlined } from '@ant-design/icons';
// import { CiMenuKebab } from "react-icons/ci";
// import { CiFilter } from "react-icons/ci";
// import { MdErrorOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";





const dataSource = [
    {
        "key": "1",
        "Name": "Michael51",
        "Age": 48,
        "DrugType": "Generic",
        "Email": "sophia1@email.org",
        "Contact": "+1-799-508-5780",
        "Address": "Hospital A"
    },
    {
        "key": "2",
        "Name": "Emily53",
        "Age": 35,
        "DrugType": "Generic",
        "Email": "daniel2@email.org",
        "Contact": "+1-888-746-5189",
        "Address": "Clinic B"
    },
    {
        "key": "3",
        "Name": "Sarah75",
        "Age": 27,
        "DrugType": "Brand",
        "Email": "sophia3@domain.net",
        "Contact": "+1-546-365-1935",
        "Address": "Pharmacy C"
    },
    {
        "key": "4",
        "Name": "Emma59",
        "Age": 69,
        "DrugType": "Over-the-counter",
        "Email": "daniel4@domain.net",
        "Contact": "+1-835-374-3143",
        "Address": "Hospital A"
    },
    {
        "key": "5",
        "Name": "Jessica52",
        "Age": 72,
        "DrugType": "Brand",
        "Email": "emily5@example.com",
        "Contact": "+1-559-571-2500",
        "Address": "Clinic B"
    },
    {
        "key": "6",
        "Name": "Michael76",
        "Age": 68,
        "DrugType": "Brand",
        "Email": "sophia6@example.com",
        "Contact": "+1-305-585-8442",
        "Address": "Clinic B"
    },
    {
        "key": "7",
        "Name": "Emma68",
        "Age": 50,
        "DrugType": "Generic",
        "Email": "emma7@example.com",
        "Contact": "+1-290-806-8322",
        "Address": "Pharmacy C"
    },
    {
        "key": "8",
        "Name": "Michael40",
        "Age": 79,
        "DrugType": "Over-the-counter",
        "Email": "michael8@example.com",
        "Contact": "+1-760-725-5460",
        "Address": "Hospital A"
    },
    {
        "key": "9",
        "Name": "Daniel57",
        "Age": 33,
        "DrugType": "Generic",
        "Email": "daniel9@domain.net",
        "Contact": "+1-301-795-7380",
        "Address": "Pharmacy C"
    },
    {
        "key": "10",
        "Name": "Sophia73",
        "Age": 60,
        "DrugType": "Prescription",
        "Email": "emma10@email.org",
        "Contact": "+1-960-209-7372",
        "Address": "Hospital A"
    },
    {
        "key": "11",
        "Name": "Liam59",
        "Age": 64,
        "DrugType": "Prescription",
        "Email": "sarah11@email.org",
        "Contact": "+1-785-530-3431",
        "Address": "Clinic B"
    },
    {
        "key": "12",
        "Name": "Emily52",
        "Age": 77,
        "DrugType": "Prescription",
        "Email": "liam12@domain.net",
        "Contact": "+1-844-877-7873",
        "Address": "Clinic B"
    },
    {
        "key": "13",
        "Name": "Emma48",
        "Age": 44,
        "DrugType": "Brand",
        "Email": "sophia13@domain.net",
        "Contact": "+1-738-421-9273",
        "Address": "Health Center D"
    },
    {
        "key": "14",
        "Name": "John67",
        "Age": 61,
        "DrugType": "Brand",
        "Email": "liam14@example.com",
        "Contact": "+1-552-236-3700",
        "Address": "Health Center D"
    },
    {
        "key": "15",
        "Name": "John20",
        "Age": 26,
        "DrugType": "Over-the-counter",
        "Email": "sarah15@domain.net",
        "Contact": "+1-807-660-8390",
        "Address": "Health Center D"
    },
    {
        "key": "16",
        "Name": "Daniel73",
        "Age": 31,
        "DrugType": "Over-the-counter",
        "Email": "david16@email.org",
        "Contact": "+1-649-419-4110",
        "Address": "Health Center D"
    },
    {
        "key": "17",
        "Name": "Liam17",
        "Age": 32,
        "DrugType": "Generic",
        "Email": "sophia17@example.com",
        "Contact": "+1-536-900-3864",
        "Address": "Clinic B"
    },
    {
        "key": "18",
        "Name": "Liam53",
        "Age": 60,
        "DrugType": "Prescription",
        "Email": "john18@example.com",
        "Contact": "+1-423-320-1183",
        "Address": "Clinic B"
    },
    {
        "key": "19",
        "Name": "Sophia48",
        "Age": 51,
        "DrugType": "Over-the-counter",
        "Email": "liam19@email.org",
        "Contact": "+1-328-393-1802",
        "Address": "Health Center D"
    },
    {
        "key": "20",
        "Name": "Emma32",
        "Age": 36,
        "DrugType": "Over-the-counter",
        "Email": "liam20@example.com",
        "Contact": "+1-910-528-8779",
        "Address": "Pharmacy C"
    },
    {
        "key": "21",
        "Name": "Daniel82",
        "Age": 52,
        "DrugType": "Brand",
        "Email": "michael21@email.org",
        "Contact": "+1-582-879-9499",
        "Address": "Hospital A"
    },
    {
        "key": "22",
        "Name": "Michael71",
        "Age": 67,
        "DrugType": "Over-the-counter",
        "Email": "sarah22@example.com",
        "Contact": "+1-618-255-1413",
        "Address": "Hospital A"
    },
    {
        "key": "23",
        "Name": "Michael44",
        "Age": 62,
        "DrugType": "Prescription",
        "Email": "daniel23@email.org",
        "Contact": "+1-528-771-7685",
        "Address": "Health Center D"
    },
    {
        "key": "24",
        "Name": "Michael45",
        "Age": 49,
        "DrugType": "Prescription",
        "Email": "jessica24@email.org",
        "Contact": "+1-936-576-3660",
        "Address": "Health Center D"
    },
    {
        "key": "25",
        "Name": "John15",
        "Age": 42,
        "DrugType": "Generic",
        "Email": "michael25@example.com",
        "Contact": "+1-969-952-3511",
        "Address": "Pharmacy C"
    },
]

const columns = [
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        width:200,

    },
    {
        title: 'Age',
        dataIndex: 'Age',
        key: 'Age',
        width:50,

    },
    {
        title: 'Drug Type',
        dataIndex: 'DrugType',
        key: 'DrugType',
        width:200,

    },
    {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        width:200,

    },
    {
        title: 'Contact',
        dataIndex: 'Contact',
        key: 'Contact',
        width:200,

    },
    {
        title: 'Address',
        dataIndex: 'Address',
        key: 'Address',
    },


    // {
    //     title: 'Action',
    //     key: 'action',
    //     fixed: "right",
    //     width: 50,
    //     render: () => <CiMenuKebab />, // You can add any action icons here
    // },
];

const MultiViewTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const onSearch = (value) => setSearchText(value.toLowerCase());

    const filteredData = dataSource.filter((item) =>
        item.Contact.toLowerCase().includes(searchText) ||
        item.Name.toLowerCase().includes(searchText) || 
        item.DrugType.toLowerCase().includes(searchText) ||
        item.Email.toLowerCase().includes(searchText) ||
        item.Address.toLowerCase().includes(searchText)
    );

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])
    

    return (
        <>    
        <div className={style.Route}>
              <h5>All Users</h5>
             {/* <Button Text={'Add New'} buttonClass={style.buttonAdd} /> */}
        </div>
        <div className={style.container}>
            <Space className={style.SearchTable}>
                <div className={style.SearchBar}>
                        <Input
                            placeholder="Search..."
                            prefix={<CiSearch size={20} />}
                            // suffix={<CiFilter size={20}  />}
                            onChange={(e) => onSearch(e.target.value)}
                            style={{ width: 200 }}
                            className={style.inputSearch}
                        />
                        {/* <SettingOutlined className={style.tableSettings} /> */}
                </div>
                <div className={style.ViewChange}>
                       
                        {/* <MdErrorOutline className={style.tableInstruction} /> */}
                </div>

            </Space>
            <Table
                loading={isLoading}
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
