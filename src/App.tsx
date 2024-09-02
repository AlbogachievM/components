import DropDownMenu, {ItemSetting, Profile} from "./components/ui/dropDownMenu/DropDownMenu.tsx";

function App() {
    const items: ItemSetting[] = [
        {
            title: 'My Profile',
            disabled: false,
            icon: 'profile',
            callback: () => {
            }
        },
        {
            title: 'Sign Out',
            disabled: false,
            icon: 'logOut',
            callback: () => {
            }
        }
    ]
    const profile: Profile = {
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MXBd9AKF1GCQqa5b48WK4AHaEo%26pid%3DApi&f=1&ipt=194ce11b3aea8c693c364d6a8d84210936ba01bd98ea9c49c9a63a11ce0dd97e&ipo=images',
        userName: 'Ivan',
        email: 'j&johnson@gmail.com',
        callback: () => alert('hellow')
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: '100vh'
        }}>

            <div>
                <h1 style={{fontSize: '30px', margin: '30px 0'}}><b>Drop Down:</b></h1>
                <DropDownMenu
                    isArrow={true}
                    trigger={{icon: 'more'}}
                    items={items}
                    profile={profile}
                />
            </div>

        </div>
    )
}

export default App
