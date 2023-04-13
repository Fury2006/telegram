import NewGroup from './../../contentElements/userFunctions/NewGroup/NewGroup';
import NewChannel from './../../contentElements/userFunctions/NewChannel/NewChannel';
import Contacts from './../../contentElements/userFunctions/Contacts/Contacts';
import Calls from '../../contentElements/userFunctions/Calls/Calls';
import SavedMessages from './../../contentElements/userFunctions/SavedMessages/SavedMessages';
import Settings from './../../contentElements/userFunctions/Settings/Settings';

const userFunctions = [

    {
        path: '/new-group', 
        component: <NewGroup />
    },

    {
        path: '/new-channel', 
        component: <NewChannel />
    },

    {
        path: '/contacts', 
        component: <Contacts />
    },

    {
        path: '/calls', 
        component: <Calls />
    },

    {
        path: '/saved-messages', 
        component: <SavedMessages />
    },

    {
        path: '/settings', 
        component: <Settings />
    }
]