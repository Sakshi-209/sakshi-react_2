//import { image1 } from './atlassianlogo.png'
import './navbar.css'
export function Navbar() {
    return (
        <nav>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe697dmZLKLvukZo7Iourh_7PJilK5rcnqkqMGBuLmQ&s"} alt="atlassian logo" height="100px" width="250px"></img>
            <ul>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Products<i class="fa fa-caret-down"></i></a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">For Teams<i class="fa fa-caret-down"></i></a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Support<i class="fa fa-caret-down"></i></a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
            </ul>
            <button type="button">Try Now</button>
            <a href="#" style={{"margin-top":'40px',"margin-left":'15px'}}>Buy Now</a>
            <a href="#" style={{"margin-top":'40px',"margin-left":'15px',"color":"black"}}><i class="fa fa-fw fa-search"></i></a>
            <button type="button" style={{"margin-left":'100px',"color":"black","background-color":"white"}}>Login</button>
        </nav>
    )
}