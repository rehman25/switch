/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import style from './sider.module.css'
import Logo from '../../Images/Logo_Image.png'
import { IoMdMenu } from "react-icons/io";
import Flag from "../../Images/language.png"
import { FaRegUser } from "react-icons/fa";
import { Menu } from 'antd';
import AllUsers from '../AllUsers/AllUsers';





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
            key: 'AllUsers',
            label: 'All Users',
            icon: <FaRegUser  style={{ fontSize: 20, color: "#000000" , fontWeight:600 }} />,
        },
        // {
        //     type: 'divider',
        // },
        // {
        //     key: 'All Users',
        //     label: 'All Users',
        //     icon: <CiCalendar style={{ fontSize: 20, fontWeight: 600, color: "#000000"}} color='black'  />,
        //     children: [
        //         {
        //             key: 'Internal_Switch_Tag',
        //             label: 'All Users',
        //         },
        //         {
        //             key: 'Institute_Management',
        //             label: 'Institute Management',
        //         },
        //         {
        //             key: 'Service_Configuration',
        //             label: 'Service Configuration',

        //         },
        //         {
        //             key: 'Internal_Response_Code',
        //             label: 'Internal Response Code',

        //         },
        //         {
        //             key: 'Internal_Tran_Code',
        //             label: 'Internal Tran Code',

        //         },
        //         {
        //             key: 'Calendar',
        //             label: 'Calendar',

        //         },
        //         {
        //             key: 'Cluster_Management',
        //             label: 'Cluster Management',

        //         },
        //     ],
        // },
        // {
        //     key: 'Channel_Management',
        //     label: 'Channel Management',
        //     icon: <LiaClipboardListSolid style={{ fontSize: 20,fontWeight: 600 }} />,
        //     children: [
        //         {
        //             key: 'Channel_List',
        //             label: 'Channel List',
        //         },
        //         {
        //             key: 'Adaptor',
        //             label: 'Adaptor',
        //         },
        //         {
        //             key: 'Field_Definition',
        //             label: 'Field Definition',
        //         },
        //         {
        //             key: 'Protocol_Variation',
        //             label: 'Protocol Variation',
        //         },
        //         {
        //             key: 'Transaction',
        //             label: 'Transaction',
        //         },
        //         {
        //             key: 'VRF_List',
        //             label: 'VRF List',
        //         },
        //         {
        //             key: 'Triger_Flow',
        //             label: 'Triger Flow',
        //         },
        //         {
        //             key: 'Routing_Key',
        //             label: 'Routing Key',
        //         },
        //         {
        //             key: 'Tran_Code_Mapping',
        //             label: 'Tran Code Mapping',
        //         },
        //         {
        //             key: 'Response_Code_Mapping',
        //             label: 'Response Code Mapping',
        //         },
        //     ],
        // },
        // {
        //     key: 'Monitoring',
        //     label: 'Monitoring',
        //     icon: <FolderOpenOutlined style={{ fontSize: 20, fontWeight: 600, color: "#000000" }} />,
        //     children: [
        //         {
        //             key: 'Transaction_Monitoring',
        //             label: 'Transaction Monitoring',
        //         },
        //         {
        //             key: 'Channel_Monitoring',
        //             label: 'Channel Monitoring',
        //         },
        //         {
        //             key: 'Service_Monitoring',
        //             label: 'Service Monitoring',
        //         },
        //         {
        //             key: 'SAF_Transaction',
        //             label: 'SAF Transaction',
        //         }
        //     ],
        // },
        // {
        //     key: 'Reports',
        //     label: 'Reports',
        //     icon: <BiUser size={20} style={{fontWeight: 600}} color='#000000' />,
        //     children: [
        //         {
        //             key: 'Transaction_Monitoring',
        //             label: 'Transaction Monitoring',
        //         },
        //         {
        //             key: 'Channel_Monitoring',
        //             label: 'Channel Monitoring',
        //         },
        //         {
        //             key: 'Service_Monitoring',
        //             label: 'Service Monitoring',
        //         },
        //         {
        //             key: 'SAF_Transaction',
        //             label: 'SAF Transaction',
        //         }
        //     ],
        // },
        // {
        //     key: 'Settlement',
        //     label: 'Settlement',
        //     icon: <PiNotebookThin size={20} style={{fontWeight: 600}} color='#000000' />,
        //     children: [
        //         {
        //             key: 'Transaction_Monitoring',
        //             label: 'Transaction Monitoring',
        //         },
        //         {
        //             key: 'Channel_Monitoring',
        //             label: 'Channel Monitoring',
        //         },
        //         {
        //             key: 'Service_Monitoring',
        //             label: 'Service Monitoring',
        //         },
        //         {
        //             key: 'SAF_Transaction',
        //             label: 'SAF Transaction',
        //         }
        //     ],
        // },
        // {
        //     key: 'Fees_Management',
        //     label: 'Fees Management',
        //     icon: <PiCreditCardLight size={20} style={{fontWeight: 600}} />,
        //     children: [
        //         {
        //             key: 'Transaction_Monitoring',
        //             label: 'Transaction Monitoring',
        //         },
        //         {
        //             key: 'Channel_Monitoring',
        //             label: 'Channel Monitoring',
        //         },
        //         {
        //             key: 'Service_Monitoring',
        //             label: 'Service Monitoring',
        //         },
        //         {
        //             key: 'SAF_Transaction',
        //             label: 'SAF Transaction',
        //         }
        //     ],
        // },
        // {
        //     key: 'User Management',
        //     label: 'User Management',
        //     icon: <PiPuzzlePieceLight size={20} style={{fontWeight: 600}} />,
        //     children: [
        //         {
        //             key: 'Transaction_Monitoring',
        //             label: 'Transaction Monitoring',
        //         },
        //         {
        //             key: 'Channel_Monitoring',
        //             label: 'Channel Monitoring',
        //         },
        //         {
        //             key: 'Service_Monitoring',
        //             label: 'Service Monitoring',
        //         },
        //         {
        //             key: 'SAF_Transaction',
        //             label: 'SAF Transaction',
        //         }
        //     ],
        // },

    ];
    const itemsClose = [
        {
            key: 'AllUsers',
            icon: <FaRegUser style={{ fontSize: 20, color: "#000000" , fontWeight:600 }}/>,
        },
        // {
        //     type: 'divider',
        // },
        // {
        //     key: 'Administration',
        //     icon: <CiCalendar style={{ fontSize: 20 }} />,

        // },
        // {
        //     key: 'Channel_Management',
        //     icon: <LiaClipboardListSolid style={{ fontSize: 20 }} />,

        // },
        // {
        //     key: 'Monitoring',
        //     icon: <FolderOpenOutlined style={{ fontSize: 19 }} />,

        // },
        // {
        //     key: 'Reports',
        //     icon: <BiUser size={20} />,

        // },
        // {
        //     key: 'Settlement',
        //     icon: <PiNotebookThin size={20} />,

        // },
        // {
        //     key: 'Fees_Management',
        //     icon: <PiCreditCardLight size={20} />,

        // },
        // {
        //     key: 'User Management',
        //     icon: <PiPuzzlePieceLight size={20} />,

        // },

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
                                <div className={style.logoContainer2}>
                                  <img src={Logo} className={style.LogoClose2} />
                                </div>
                                <div className={style.sideList}>
                                    <Menu
                                        onClick={onClick}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        items={itemsClose}
                                        style={{ border: "none", background:"transparent"  }}
                                    />
                                </div>
                            </div>
                            :
                            <div className={style.Container}>
                                 <div className={style.logoContainer}>
                                  <img src={Logo} className={style.LogoClose} />
                                </div>
                                <div className={style.sideList}>
                                    <Menu
                                        onClick={onClick}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        items={items}
                                        style={{ border: "none" , background:"transparent"}}
                                        
                                    />
                                </div>
                            </div>
                        }

                        <div className={style.contentSide}>
                            <div className={style.ContainerHeader}>
                                <div className={style.headerSearch}>
                                    <IoMdMenu size={24} className={style.menuIcon} onClick={handleMenuToggle} />
                                </div>

                            </div>
                            {isView.key === 'AllUsers' ? <AllUsers /> : <AllUsers />}
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Sider
