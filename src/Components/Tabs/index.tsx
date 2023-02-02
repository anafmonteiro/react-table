import React from "react";
import { Tabs, Tab } from "@material-ui/core";

import TabsName from "./tabsNames.json";

const TabsComponent:React.FC = () => {

    return (
        <>
            {TabsName.tab.map((tab, i)=>(
                <Tabs
                    key={i}
                    orientation="vertical"
                    variant="scrollable"
                >
                    <Tab label={tab.name}/>
                </Tabs>
            ))}
        </>
    )
}

export default TabsComponent;