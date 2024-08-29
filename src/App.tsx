import {DropDownMenu} from "./components/ui/dropDownMenu/DropDownMenu.tsx";
import Pagination from "./components/ui/pagination/Pagination.tsx";
import {useState} from "react";

function App() {
    const [pageSize, setPageSize] = useState<string>('10')
    const [page, setPage] = useState<number>(1)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            backgroundColor: 'black',
            height: '100vh'
        }}>
            <h1 style={{fontSize: '30px', marginBottom: '50px'}}>Hellow components!</h1>
            <div>
                <div>
                    <h1 style={{fontSize: '30px', marginBottom: '30px'}}><b>Pagination:</b></h1>
                    <Pagination
                        currentPage={page}
                        onPageChange={setPage}
                        setPageSize={setPageSize}
                        pageSize={pageSize}
                        siblingCount={1}
                        totalCount={1000}/>
                </div>

            </div>

            <div>
                <h1 style={{fontSize: '30px', margin: '30px 0'}}><b>Drop Down:</b></h1>
                <DropDownMenu mode={'profile'}
                              trigger={{icon: 'more'}}
                              items={
                                  [
                                      {title: 'My Profile', disabled: false, icon: 'profile', onClick: ()=>{} },
                                  ]
                              }
                              profile={
                                  {
                                      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MXBd9AKF1GCQqa5b48WK4AHaEo%26pid%3DApi&f=1&ipt=194ce11b3aea8c693c364d6a8d84210936ba01bd98ea9c49c9a63a11ce0dd97e&ipo=images',
                                      userName: 'Ivan',
                                      email: 'j&johnson@gmail.com',
                                  }
                              }
                />
            </div>

        </div>
    )
}

export default App
