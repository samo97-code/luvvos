import React, {useState, useEffect} from 'react';
import './MasonaryTab.css'

const MasonaryTab = () => {

    const [selectedTab,setTab] = useState('all')


    const changeTab = (tab)=>{
        console.log(tab)
        setTab(tab)
    }

    return (
        <section className="masonary-tab">
            <div className="container">
                <div className="row">
                    <h2>Our Real Estates</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className="tabs">
                        <ul>
                            <li><span className={selectedTab === 'all' ? 'active' : null} onClick={()=>changeTab('all')}>All</span></li>
                            <li><span className={selectedTab === 'house' ? 'active' : null} onClick={()=>changeTab('house')}>Houses</span></li>
                            <li><span className={selectedTab === 'apartment' ? 'active' : null} onClick={()=>changeTab('apartment')}>Apartments</span></li>
                            <li><span className={selectedTab === 'villa' ? 'active' : null} onClick={()=>changeTab('villa')}>Villas</span></li>
                        </ul>
                    </div>
                    <div className="row grid-layout">
                        <div className={['col-md-4',selectedTab === 'all' || selectedTab === 'apartment' ? 'show' : 'hide'].join(' ')}>
                            <div className='item'>
                                <div className="img-block"><img src="/images/products/apartment1.jpg" alt=""/></div>
                                <div className="content">
                                    <h5>Jason Landville Apartment</h5>
                                    <div>
                                        <span className="price"><span>$</span><b>197</b></span>
                                        <del className="old-price">$230</del>
                                    </div>
                                    <div className="product-line"></div>
                                    <div className="item-info">
                                        <ul>
                                            <li>
                                                <img src="/images/icons/bed.png" alt=""/>
                                                <span>3 Bed</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/bath.png" width="30px" alt=""/>
                                                <span>1 Bath</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/area.png" width="22px" alt=""/>
                                                <span>1720 Sq.</span>
                                            </li>
                                        </ul>
                                        <div className="item-action">
                                            <div>
                                                <span className="back"><a href="tel:+6494461709"><img src="/images/icons/phone.png" width="18px" alt=""/></a></span>
                                            </div>
                                            <div>
                                                <span className="back"><img src="/images/icons/comment.png" width="18px" alt=""/></span>
                                            </div>
                                            <div>
                                               <button className="btn">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={['col-md-4',selectedTab === 'all' || selectedTab === 'house' ? 'show' : 'hide'].join(' ')}>
                            <div className='item'>
                                <div className="img-block"><img src="/images/products/house1.jpg" alt=""/></div>
                                <div className="content">
                                    <h5>Jason Landville Apartment</h5>
                                    <div>
                                        <span className="price"><span>$</span><b>197</b></span>
                                        <del className="old-price">$230</del>
                                    </div>
                                    <div className="product-line"></div>
                                    <div className="item-info">
                                        <ul>
                                            <li>
                                                <img src="/images/icons/bed.png" alt=""/>
                                                <span>3 Bed</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/bath.png" width="30px" alt=""/>
                                                <span>1 Bath</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/area.png" width="22px" alt=""/>
                                                <span>1720 Sq.</span>
                                            </li>
                                        </ul>
                                        <div className="item-action">
                                            <div>
                                                <span className="back"><a href="tel:+6494461709"><img src="/images/icons/phone.png" width="18px" alt=""/></a></span>
                                            </div>
                                            <div>
                                                <span className="back"><img src="/images/icons/comment.png" width="18px" alt=""/></span>
                                            </div>
                                            <div>
                                                <button className="btn">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={['col-md-4',selectedTab === 'all' || selectedTab === 'villa' ? 'show' : 'hide'].join(' ')}>
                            <div className='item'>
                                <div className="img-block"><img src="/images/products/villa1.jpg" alt=""/></div>
                                <div className="content">
                                    <h5>Jason Landville Apartment</h5>
                                    <div>
                                        <span className="price"><span>$</span><b>197</b></span>
                                        <del className="old-price">$230</del>
                                    </div>
                                    <div className="product-line"></div>
                                    <div className="item-info">
                                        <ul>
                                            <li>
                                                <img src="/images/icons/bed.png" alt=""/>
                                                <span>3 Bed</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/bath.png" width="30px" alt=""/>
                                                <span>1 Bath</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/area.png" width="22px" alt=""/>
                                                <span>1720 Sq.</span>
                                            </li>
                                        </ul>
                                        <div className="item-action">
                                            <div>
                                                <span className="back"><a href="tel:+6494461709"><img src="/images/icons/phone.png" width="18px" alt=""/></a></span>
                                            </div>
                                            <div>
                                                <span className="back"><img src="/images/icons/comment.png" width="18px" alt=""/></span>
                                            </div>
                                            <div>
                                                <button className="btn">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={['col-md-4',selectedTab === 'all' || selectedTab === 'villa' ? 'show' : 'hide'].join(' ')}>
                            <div className='item'>
                                <div className="img-block"><img src="/images/products/villa2.jpg" alt=""/></div>
                                <div className="content">
                                    <h5>Jason Landville Apartment</h5>
                                    <div>
                                        <span className="price"><span>$</span><b>197</b></span>
                                        <del className="old-price">$230</del>
                                    </div>
                                    <div className="product-line"></div>
                                    <div className="item-info">
                                        <ul>
                                            <li>
                                                <img src="/images/icons/bed.png" alt=""/>
                                                <span>3 Bed</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/bath.png" width="30px" alt=""/>
                                                <span>1 Bath</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/area.png" width="22px" alt=""/>
                                                <span>1720 Sq.</span>
                                            </li>
                                        </ul>
                                        <div className="item-action">
                                            <div>
                                                <span className="back"><a href="tel:+6494461709"><img src="/images/icons/phone.png" width="18px" alt=""/></a></span>
                                            </div>
                                            <div>
                                                <span className="back"><img src="/images/icons/comment.png" width="18px" alt=""/></span>
                                            </div>
                                            <div>
                                                <button className="btn">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={['col-md-4',selectedTab === 'all' || selectedTab === 'house' ? 'show' : 'hide'].join(' ')}>
                            <div className='item'>
                                <div className="img-block"><img src="/images/products/house2.jpg" alt=""/></div>
                                <div className="content">
                                    <h5>Jason Landville Apartment</h5>
                                    <div>
                                        <span className="price"><span>$</span><b>197</b></span>
                                        <del className="old-price">$230</del>
                                    </div>
                                    <div className="product-line"></div>
                                    <div className="item-info">
                                        <ul>
                                            <li>
                                                <img src="/images/icons/bed.png" alt=""/>
                                                <span>3 Bed</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/bath.png" width="30px" alt=""/>
                                                <span>1 Bath</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/area.png" width="22px" alt=""/>
                                                <span>1720 Sq.</span>
                                            </li>
                                        </ul>
                                        <div className="item-action">
                                            <div>
                                                <span className="back"><a href="tel:+6494461709"><img src="/images/icons/phone.png" width="18px" alt=""/></a></span>
                                            </div>
                                            <div>
                                                <span className="back"><img src="/images/icons/comment.png" width="18px" alt=""/></span>
                                            </div>
                                            <div>
                                                <button className="btn">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={['col-md-4',selectedTab === 'all' || selectedTab === 'apartment' ? 'show' : 'hide'].join(' ')}>
                            <div className='item'>
                                <div className="img-block"><img src="/images/products/apartment2.png" alt=""/></div>
                                <div className="content">
                                    <h5>Jason Landville Apartment</h5>
                                    <div>
                                        <span className="price"><span>$</span><b>197</b></span>
                                        <del className="old-price">$230</del>
                                    </div>
                                    <div className="product-line"></div>
                                    <div className="item-info">
                                        <ul>
                                            <li>
                                                <img src="/images/icons/bed.png" alt=""/>
                                                <span>3 Bed</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/bath.png" width="30px" alt=""/>
                                                <span>1 Bath</span>
                                            </li>
                                            <li>
                                                <img src="/images/icons/area.png" width="22px" alt=""/>
                                                <span>1720 Sq.</span>
                                            </li>
                                        </ul>
                                        <div className="item-action">
                                            <div>
                                                <span className="back"><a href="tel:+6494461709"><img src="/images/icons/phone.png" width="18px" alt=""/></a></span>
                                            </div>
                                            <div>
                                                <span className="back"><img src="/images/icons/comment.png" width="18px" alt=""/></span>
                                            </div>
                                            <div>
                                                <button className="btn">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasonaryTab;