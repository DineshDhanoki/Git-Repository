export default function SideBar(props) {
    const {handleToggleModal} = props


    return (
      <div className="sidebar">
        <div onClick={handleToggleModal} className="bgOverLay"></div>
        <div className="sidebarContents">
            <h2>The Brutual Marshall Landscape</h2>
            <div>
                <p>Description</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quae similique, quos provident neque voluptates ratione expedita voluptatum dolor. Blanditiis tempore error recusandae dignissimos quaerat. Nobis magnam est alias odio!</p>
            </div>   
            <button onClick={handleToggleModal}><i className="fa-solid fa-right-long"></i></button>
        </div>
       </div>
    )
  }
  