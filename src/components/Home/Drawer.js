import React from 'react'; 
import MaterialIcon from '@material/react-material-icon'
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
    DrawerContent,
    DrawerAppContent,
} from '@material/react-drawer'
import TopAppBar, {
    TopAppBarFixedAdjust
} from '@material/react-top-app-bar'
import List, {
    ListItem,
    ListItemGraphic,
    ListItemText
} from '@material/react-list'

// SCSS
import '../styles/Drawer.scss'
// Components 
import Data from '../Welcome/Welcome'

class Home extends React.Component {
    state = {selectedIndex: 0};
    render() {
        return (
            <div className="drawer-container">
                <Drawer>
                    <DrawerHeader>
                        <DrawerTitle tag='h3'>
                            alliemfs@gmail.com
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerContent>
                        <List singleSelection selectedIndex={this.state.selectedIndex}>
                            <ListItem>
                                <ListItemGraphic graphic={<MaterialIcon icon='folder' />} />
                                <ListItemText primaryText='Mail'/>
                            </ListItem>
                        </List>
                    </DrawerContent>
                </Drawer>

                <DrawerAppContent className='drawer-app-content'>
                    <TopAppBar 
                        title='Inbox'
                        navigationIcon={<MaterialIcon icon='Menu' />}
                    />
                    <TopAppBarFixedAdjust>
                        Your Inbox Content
                    </TopAppBarFixedAdjust>
                </DrawerAppContent>
            </div>
        )
    }
}

export default Home; 