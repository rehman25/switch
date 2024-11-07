// PaymentForm.js
import React, { useState } from 'react';
import { Input, Button, Radio, Select } from 'antd';
import styles from './packages.module.css';

const { Option } = Select;

function Packages() {
    const [country, setCountry] = useState('');
    const [plan, setPlan] = useState('annual');

    return (
        <div className={`container ${styles.paymentContainer}`}>
            <div className="row">
                <div className="col-7 m-0 p-0">
                    <div className={styles.paymentForm}>
                        <h2 className={styles.title}>Cosmic</h2>
                        <h3>Upgrade to Plus</h3>
                        <p>Do more with unlimited blocks, files, automations & integrations.</p>

                        <label>Billed To</label>
                        <Input placeholder="Jane Smith" className="mb-3" />

                        <h4>Payment Details</h4>
                        <div className="d-flex justify-content-between mb-3">
                            <Button type="primary" className={styles.methodButton} active>
                                Credit Card
                            </Button>
                            <Button className={styles.methodButton}>Bank Transfer</Button>
                            <Button className={styles.methodButton}>Cosmic Points</Button>
                        </div>

                        <Input placeholder="6508 8234 3354 7832" className="mb-3" />
                        <div className="d-flex mb-3">
                            <Input placeholder="21/04" className="me-2" />
                            <Input placeholder="786" />
                        </div>

                        <Select
                            placeholder="Country"
                            className="mb-3 w-100"
                            value={country}
                            onChange={(value) => setCountry(value)}
                        >
                            <Option value="US">United States</Option>
                            <Option value="CA">Canada</Option>
                            <Option value="EG">Egypt</Option>
                            <Option value="SA">Saudi Arabia</Option>
                            <Option value="IN">India</Option>
                        </Select>

                        <Input placeholder="ZIP" className="mb-3" />

                        <div className="d-flex justify-content-between">
                            <Button className={styles.cancelButton}>Cancel</Button>
                            <Button type="primary" className={styles.upgradeButton}>
                                Upgrade
                            </Button>
                        </div>

                        <p className={styles.disclaimer}>
                            By providing your card information, you agree to Cosmic's Terms and Privacy Policy.
                        </p>
                    </div>
                </div>
                <div className="col-4 m-0 p-0">
                    <div className={styles.summary}>
                        <h4>Starter Plan</h4>
                        <Radio.Group
                            onChange={(e) => setPlan(e.target.value)}
                            value={plan}
                            className="d-flex flex-column"
                        >
                            <Radio value="monthly" className={styles.Pack}>Pay Monthly - $20 / Month / Member</Radio>
                            <Radio value="annual" className={styles.Pack}>
                                Pay Annual - $16 / Month / Member <span className={styles.save}>Save 15%</span>
                            </Radio>
                        </Radio.Group>
                        <div className={styles.total}>
                            <div className={styles.totalHead}>
                                <h4>Total</h4>
                                <p className={styles.amount}>$16 / Month</p>
                            </div>
                            <p>Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Packages;
