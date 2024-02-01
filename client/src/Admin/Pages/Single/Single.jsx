import Chart from "../../components/chart/Chart"
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import List from "../../components/table/Tables"
import "./Single.scss"

const Single = () => {
  return (
    <div className='single'>
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src="https://media.istockphoto.com/id/1163192129/photo/laughing-out-loud-joyful-young-man-in-casual-t-shirt-smiles-broadly-laughing-showing-perfect.jpg?s=612x612&w=0&k=20&c=53bTRrn34MTWbf1AfpDn57RGwgjc_3rq4Os2i6ZRuM0=" 
                alt="avater" 
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Midhun Santhosh</h1>
                
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+918590089400</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Varakil(house),Moolamattom(po),Idukki</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">State:</span>
                  <span className="itemValue">Kerala</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2/1} title="User transactions (last 6 months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
