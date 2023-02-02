import React from "react";
import TableComponent from "../../Components/Table";
import TabsComponent from "../../Components/Tabs";
import { PageContainer, Title, Container, TabContainer, TableContainer } from "./styles";

const HomePage:React.FC = () => {

    return(
        <PageContainer>
            <Title>
                React Table
            </Title> 
            <Container>
                <TabContainer>
                    <TabsComponent/>
                </TabContainer>
                <TableContainer>
                    <TableComponent/>
                </TableContainer>
            </Container>
        </PageContainer>
    )
}

export default HomePage