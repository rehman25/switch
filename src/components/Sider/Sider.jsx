/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import style from './sider.module.css'
import Logo from '../../Images/Logo_Image.png'
import { HomeOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { LiaClipboardListSolid } from "react-icons/lia";
import { BiUser } from "react-icons/bi";
import { PiCreditCardLight } from "react-icons/pi";
import { PiNotebookThin } from "react-icons/pi";
import { PiPuzzlePieceLight } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { Input } from 'antd';
import { CiSearch } from "react-icons/ci";
import { DownOutlined, } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Flag from "../../Images/language.png"
import { IoIosNotificationsOutline } from "react-icons/io";
import profile_image from '../../Images/profile_image.png'
import { Menu } from 'antd';
import { CiGrid41 } from "react-icons/ci";
import InternalSwitch from '../InternalSwitchTag/internalSwitchTag';
import Calender from '../Calender/CalenderData'
import InstituteManagement from '../InstituteManagement/InstituteManagement';
import ServiceConfiguration from '../ServiceConfiguration/ServiceConfiguration';
import InternalResponseCode from '../InternalResponseCode/InternalResponseCode';
import InternalTranCode from '../InternalTranCode/InternalTranCode';
import ClusterManagement from '../ClusterManagement/ClusterManagement';





const Sider = () => {
    const [isMenu, setMenu] = useState(false);
    const [isView, setView] = useState('');
    const handleMenuToggle = () => {
        setMenu(!isMenu);
    }

    const items2 = [
        {
            key: '1',
            label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={Flag} alt="English" />
                    <p>English</p>
                </div>
            )
        },
        {
            key: '2',
            label: (
                <>
                    <img src={Flag} alt="English" />
                    <p>French</p>
                </>
            )
        },
    ];
    const items = [
        {
            key: 'Dashboard',
            label: 'Dashboard',
            icon: <HomeOutlined style={{ fontSize: 20, color: "#626C70" }} />,
        },
        {
            type: 'divider',
        },
        {
            key: 'Administration',
            label: 'Administration',
            icon: <CiCalendar style={{ fontSize: 20 }} />,
            children: [
                {
                    key: 'Internal_Switch_Tag',
                    label: 'Internal Switch Tag',
                },
                {
                    key: 'Institute_Management',
                    label: 'Institute Management',
                },
                {
                    key: 'Service_Configuration',
                    label: 'Service Configuration',

                },
                {
                    key: 'Internal_Response_Code',
                    label: 'Internal Response Code',

                },
                {
                    key: 'Internal_Tran_Code',
                    label: 'Internal Tran Code',

                },
                {
                    key: 'Calendar',
                    label: 'Calendar',

                },
                {
                    key: 'Cluster_Management',
                    label: 'Cluster Management',

                },
            ],
        },
        {
            key: 'Channel_Management',
            label: 'Channel Management',
            icon: <LiaClipboardListSolid style={{ fontSize: 20 }} />,
            children: [
                {
                    key: 'Channel_List',
                    label: 'Channel List',
                },
                {
                    key: 'Adaptor',
                    label: 'Adaptor',
                },
                {
                    key: 'Field_Definition',
                    label: 'Field Definition',
                },
                {
                    key: 'Protocol_Variation',
                    label: 'Protocol Variation',
                },
                {
                    key: 'Transaction',
                    label: 'Transaction',
                },
                {
                    key: 'VRF_List',
                    label: 'VRF List',
                },
                {
                    key: 'Triger_Flow',
                    label: 'Triger Flow',
                },
                {
                    key: 'Routing_Key',
                    label: 'Routing Key',
                },
                {
                    key: 'Tran_Code_Mapping',
                    label: 'Tran Code Mapping',
                },
                {
                    key: 'Response_Code_Mapping',
                    label: 'Response Code Mapping',
                },
            ],
        },
        {
            key: 'Monitoring',
            label: 'Monitoring',
            icon: <FolderOpenOutlined style={{ fontSize: 19 }} />,
            children: [
                {
                    key: 'Transaction_Monitoring',
                    label: 'Transaction Monitoring',
                },
                {
                    key: 'Channel_Monitoring',
                    label: 'Channel Monitoring',
                },
                {
                    key: 'Service_Monitoring',
                    label: 'Service Monitoring',
                },
                {
                    key: 'SAF_Transaction',
                    label: 'SAF Transaction',
                }
            ],
        },
        {
            key: 'Reports',
            label: 'Reports',
            icon: <BiUser size={20} />,
            children: [
                {
                    key: 'Transaction_Monitoring',
                    label: 'Transaction Monitoring',
                },
                {
                    key: 'Channel_Monitoring',
                    label: 'Channel Monitoring',
                },
                {
                    key: 'Service_Monitoring',
                    label: 'Service Monitoring',
                },
                {
                    key: 'SAF_Transaction',
                    label: 'SAF Transaction',
                }
            ],
        },
        {
            key: 'Settlement',
            label: 'Settlement',
            icon: <PiNotebookThin size={20} />,
            children: [
                {
                    key: 'Transaction_Monitoring',
                    label: 'Transaction Monitoring',
                },
                {
                    key: 'Channel_Monitoring',
                    label: 'Channel Monitoring',
                },
                {
                    key: 'Service_Monitoring',
                    label: 'Service Monitoring',
                },
                {
                    key: 'SAF_Transaction',
                    label: 'SAF Transaction',
                }
            ],
        },
        {
            key: 'Fees_Management',
            label: 'Fees Management',
            icon: <PiCreditCardLight size={20} />,
            children: [
                {
                    key: 'Transaction_Monitoring',
                    label: 'Transaction Monitoring',
                },
                {
                    key: 'Channel_Monitoring',
                    label: 'Channel Monitoring',
                },
                {
                    key: 'Service_Monitoring',
                    label: 'Service Monitoring',
                },
                {
                    key: 'SAF_Transaction',
                    label: 'SAF Transaction',
                }
            ],
        },
        {
            key: 'User Management',
            label: 'User Management',
            icon: <PiPuzzlePieceLight size={20} />,
            children: [
                {
                    key: 'Transaction_Monitoring',
                    label: 'Transaction Monitoring',
                },
                {
                    key: 'Channel_Monitoring',
                    label: 'Channel Monitoring',
                },
                {
                    key: 'Service_Monitoring',
                    label: 'Service Monitoring',
                },
                {
                    key: 'SAF_Transaction',
                    label: 'SAF Transaction',
                }
            ],
        },

    ];
    const itemsClose = [
        {
            key: 'Dashboard',
            icon: <HomeOutlined style={{ fontSize: 20, color: "#626C70" }} />,
        },
        {
            type: 'divider',
        },
        {
            key: 'Administration',
            icon: <CiCalendar style={{ fontSize: 20 }} />,

        },
        {
            key: 'Channel_Management',
            icon: <LiaClipboardListSolid style={{ fontSize: 20 }} />,

        },
        {
            key: 'Monitoring',
            icon: <FolderOpenOutlined style={{ fontSize: 19 }} />,

        },
        {
            key: 'Reports',
            icon: <BiUser size={20} />,

        },
        {
            key: 'Settlement',
            icon: <PiNotebookThin size={20} />,

        },
        {
            key: 'Fees_Management',
            icon: <PiCreditCardLight size={20} />,

        },
        {
            key: 'User Management',
            icon: <PiPuzzlePieceLight size={20} />,

        },

    ];
    const onClick = (items) => {
        setView(items)
    };

    return (
        <section>
            <div className={`container-fluid ${style.containerFluid}`}>
                <div className={`row ${style.row}`}>
                    <div className={style.sidersMenus}>
                        {isMenu ?
                            <div className={style.ContainerClose}>
                                <img src={Logo} className={style.LogoClose} />
                                <div className={style.sideList}>
                                    <Menu
                                        onClick={onClick}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        items={itemsClose}
                                        style={{ border: "none" }}
                                    />
                                </div>
                            </div>
                            :
                            <div className={style.Container}>
                                <img src={Logo} />
                                <div className={style.sideList}>
                                    <Menu
                                        onClick={onClick}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        items={items}
                                        style={{ border: "none" }}
                                    />
                                </div>
                            </div>
                        }

                        <div className={style.contentSide}>
                            <div className={style.ContainerHeader}>
                                <div className={style.headerSearch}>
                                    <IoMdMenu size={24} className={style.menuIcon} onClick={handleMenuToggle} />
                                    <Input placeholder='Search' prefix={<CiSearch size={20} />} />
                                </div>
                                <div className={style.profile}>
                                    <Dropdown overlay={<Menu items={items2} /> }className={style.Dropdown}>
                                            <Space>
                                                
                                                <img src={Flag} />
                                                 <span>English</span> 
                                                <DownOutlined />
                                            </Space>
                                    </Dropdown>
                                    <CiGrid41 className={style.amdin} />
                                    <IoIosNotificationsOutline className={style.amdin} />
                                    <div className={style.profileContainer}>
                                        <img src={profile_image} />
                                    </div>
                                </div>

                            </div>
                            {isView.key === 'Internal_Switch_Tag' ? <InternalSwitch /> : ""}
                            {isView.key === 'Institute_Management' ? <InstituteManagement /> : ""}
                            {isView.key === 'Service_Configuration' ? <ServiceConfiguration /> : ""}
                            {isView.key === 'Internal_Response_Code' ? <InternalResponseCode /> : ""}
                            {isView.key === 'Internal_Tran_Code' ? <InternalTranCode /> : ""}
                            {isView.key === 'Cluster_Management' ? <ClusterManagement /> : ""}
                            {isView.key === 'Calendar' ? <Calender /> : ""}
                        </div>

                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Sider
