import {createStore} from 'redux';
    const data={logo:'left', color:'blue', header: true, footer :true, drawerOverlay: true, drawerRight: true, drawerLeft: true, navMenu: true, bottomMenu: true}
    const reducer = (state = data, action) => {
        console.log("action",action)
        switch(action.type){
            case 'logo': return {...state,logo:action.payload};
            case 'color': return {...state,color:action.payload};
            case 'header': return {...state,header:action.payload};
            case 'footer': return {...state,footer:action.payload};
            case 'drawerOverlay': return {...state,drawerOverlay:action.payload};
            case 'drawerRight': return {...state,drawerRight:action.payload};
            case 'drawerLeft': return {...state,drawerLeft:action.payload};
            case 'navMenu': return {...state,navMenu:action.payload};
            case 'bottomMenu': return {...state,bottomMenu:action.payload};
            default: return state;
        }
        };
        const store = createStore(reducer);
     console.log(store)

export default store;