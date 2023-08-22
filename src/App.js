import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar1 } from "./components/navbar1/navbar1";
import { Navbar2 } from './components/navbar2/navbar2';
import { Shop } from "./pages/shop/shop";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart"; 
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import { Account }  from './pages/account/account';
import { Aboutus } from './pages/aboutus/aboutus';
import { Women } from './pages/women/women';
import { WomenShoes } from './pages/womenShoes/womenShoes';
import { WomenTops } from './pages/womenTops/womenTops';
import { WomenBottoms } from './pages/womenBottoms/womenBottoms';
import { WomenDresses } from './pages/womenDresses/womenDresses';
import { WomenOther } from './pages/womenOther/womenOther';
import { Men } from './pages/men/men';
import { MenShoes } from './pages/menShoes/menShoes';
import { MenTops } from './pages/menTops/menTops';
import { MenBottoms } from './pages/menBottoms/menBottoms';
import { MenSuits } from './pages/menSuits/menSuits';
import { MenOther } from './pages/menOther/menOther';
import { ShopContextProvider } from "./context/shop-context";
import { Announcement } from './components/anouncement/announcement';
import { Add } from './pages/add/add';
import { Item } from './pages/item/item';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
    <Router>
      <Announcement/>
      <Navbar1 />
      <Navbar2 />
      <Routes>
        <Route path="/" element= {<Shop />}/>
        <Route path="/" element= {<Home />}/>
        <Route path="/signup" element= {<Signup />}/>
        <Route path="/login" element= {<Login />}/>
        <Route path="/account" element= {<Account />}/>
        <Route path="/add" element= {<Add />}/>
        <Route path="/item/:productId" element= {<Item />}/>
        <Route path="/cart" element= {<Cart />}/>
        <Route path="/shop" element= {<Shop />} /> 
        <Route path="/women" element= {<Women />} />
        <Route path="/women/shoes" element= {<WomenShoes />} />
        <Route path="/women/bottoms" element= {<WomenBottoms />} />
        <Route path="/women/tops" element= {<WomenTops />} />
        <Route path="/women/dresses" element= {<WomenDresses />} />
        <Route path="/women/other" element= {<WomenOther />} />
        <Route path="/men" element= {<Men />}/>
        <Route path="/men/shoes" element= {<MenShoes />}/>
        <Route path="/men/bottoms" element= {<MenBottoms />}/>
        <Route path="/men/tops" element= {<MenTops />}/>
        <Route path="/men/suits" element= {<MenSuits />}/>
        <Route path="/men/other" element= {<MenOther />}/>
        <Route path="/aboutus" element= {<Aboutus />} />
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
