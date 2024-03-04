import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { Home } from "@mui/icons-material";
const menu = [
    { title: 'ホーム', icon: Home }
];
const ListContent = () => {
    return (
        <List>
            {menu.map(m => {
                const Icon = m.icon;
                return (
                    <ListItem key={m.title}>
                        <ListItemButton>
                            <ListItemIcon><Icon /></ListItemIcon>
                            <ListItemText primary={m.title} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default ListContent;