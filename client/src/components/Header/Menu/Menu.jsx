import React from 'react';
import {Nav} from "react-bootstrap";


const Menu = ({menu}) => {
    const menuList = menu.map((item)=>{
        return <Nav.Link href={`#item${item.id}`} key={item.id}>{item.text}</Nav.Link>
    })

    return (
        <>
            {menu.length ? menuList : null}
        </>
    );
};

export default React.memo(Menu);