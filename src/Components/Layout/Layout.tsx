import React from 'react'
import Styled from 'styled-components'

const StyleLayout = Styled.div`
    width: 33.33%;
    float:left;
    display:flex;
    flex-direction: column;
    align-items: center;
`;
interface LayoutProps{
    children:React.ReactNode;
}
const Layout: React.FC<LayoutProps> = (props) =>{
return <StyleLayout>{props.children}</StyleLayout>
}
export default Layout;
