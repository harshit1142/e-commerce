
import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import NAV_BAR from './Components/Navbar';

function App() {
  return (
    <div >
      <NAV_BAR />
      <main>
        <div className='select-btn'>
          <button class="sell-btn">Sell</button>
          <button class="wishlist-btn">Wishlist</button>
        </div>
        <div class="product-cards">

          <Card val={"1"} title={"Infinix Inbook Y1 Plus"} price={"₹25,990"} describe={" Intel Core i5 10th Gen 1035G1 - (8 GB/512 GB SSD/Windows 11 Home) XL28 Thin and Light Laptop  (15.6 inch, Blue, 1.76 kg)"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/u/k/-original-imagmxuravjcmdwu.jpeg?q=70"} />
          <Card val="2" title={"MSI GF63 "} price={"₹41,990"} describe={"Intel Core i5 11th Gen 11260H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/60 Hz) GF63 Thin 11SC-1494IN Gaming Laptop  (15.6 Inch, Black, 1.86 Kg)"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/r/k/-original-imagsz5x5x3vkt8c.jpeg?q=70"} />
          <Card val="3" title={"ASUS Vivobook 15"} price={"₹41,490"} describe={"Intel Core i3 12th Gen i3-1220P - (8 GB/512 GB SSD/Windows 11 Home) X1502ZA-EJ385WS Thin and Light Laptop  (15.6 inch, Quiet Blue, 1.7 kg, With MS Office)"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/e/b/asus-vivobook-15-laptop-asus-original-imagt5yyzykayggk.jpeg?q=70"} />
          <Card val="4" title={"Apple iPhone 14"} price={"₹56,999"} describe={"128 GB ROM,15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera,A15 Bionic Chip, 6 Core Processor Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"} />
          <Card val="5" title={"MOTOROLA g24 Power"} price={"₹7,999"} describe={"4 GB RAM | 128 GB ROM | Expandable Upto 1 TB,16.76 cm (6.6 inch) HD+ Display,50MP + 2MP | 16MP Front Camera,6000 mAh Battery,Helio G85 Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/w/j/g24-pb1c0000in-motorola-original-imagxm3afhhxpqz9.jpeg?q=70"} />
          <Card val="6" title={"Infinix SMART 8"} price={"₹6,999"} describe={"4 GB RAM | 64 GB ROM | Expandable Upto 2 TB,16.76 cm (6.6 inch) HD+ Display,50MP + AI Lens | 8MP Front Camera,5000 mAh Battery,Helio G36 Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/v/p/-original-imagxsc4nthcs2zk.jpeg?q=70" } />
          <Card val="7" title={"SAMSUNG Galaxy F14"} price={"₹9,490"} describe={"4 GB RAM | 128 GB ROM | Expandable Upto 1 TB,16.76 cm (6.6 inch) Full HD+ Display,50MP + 2MP | 13MP Front Camera,6000 mAh Battery,Exynos 1330, Octa Core Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/c/x/-original-imagtyxdm82fsv6m.jpeg?q=70"} />
          <Card val="8" title={"realme 12 Pro 5G"} price={"₹23,999"} describe={"8 GB RAM | 256 GB ROM | Expandable Upto 1 TB,17.02 cm (6.7 inch) Full HD+ Display,50MP + 8MP + 32MP | 16MP Front Camera,5000 mAh Battery,Snapdragon 6 Gen1, Octa Core Processor"} img={"https://image01.realme.net/general/20240129/1706507688065d53fb9eb2be3404c9ef252e989afa7aa.png?q=70"} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;