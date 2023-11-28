import React from "react";
import ColorPalette from "./ColorPalette";
import CheckboxMenu from "./CheckboxMenu";

function SidePanel() {
  return (
    <div className="sidepanel-div">
      <h2>New Releases</h2>
      <div className="menu-div">
        <ul>
          <li>Shoes</li>
          <li>Clothing</li>
          <li>Jordan</li>
          <li>Lifestyle</li>
          <li>Running</li>
          <li>Basketball</li>
          <li>Soccer</li>
          <li>Tops & T-Shirts</li>
          <li>Hoodies & PullOvers</li>
          <li>Jackets & Vests</li>
          <li>Pants and Tights</li>
          <li>Shorts</li>
          <li>Socks</li>
          <li>Accessories & Equipment</li>
        </ul>
      </div>
      <CheckboxMenu
        heading="Sale & Offers"
        items={[
          "Cyber Monday - Upto 60% Off",
          "Featured Offer: Exclusive Discounts",
        ]}
      />

      <CheckboxMenu
        heading="Shop by Price"
        items={[
          "$0 - $25",
          "$25 - $50",
          "$50 - $100",
          "$100 - $150",
          "Over $150",
        ]}
      />

      <CheckboxMenu heading="Gender" items={["Men", "Women", "Unisex"]} />

      <CheckboxMenu heading="Kids" items={["Boys", "Girls"]} />

      <CheckboxMenu heading="Product Discounts" items={["20% Off and Up"]} />

      <h3>Colors</h3>
      <ColorPalette />
      <CheckboxMenu
        heading="Sports & Activities"
        items={[
          "LifeStyle",
          "Running",
          "Training & Gym",
          "Yoga",
          "BasketBall",
          "Football",
          "Soccer",
        ]}
      />
      <CheckboxMenu
        heading="Athletes"
        items={[
          "LeBron James",
          "Kevin Durant",
          "Sabrina Lonescu",
          "Giannis Antetokounmpo",
          "Paul George",
          "Zion Williamson"
        ]}
      />
      <CheckboxMenu
        heading="Brand"
        items={[
          "Nike Sportwear",
          "Jordan",
          "Nike By You",
          "Converse",
          "NikeLab",
          "ACG",
          "Nike Pro"
        ]}
      />
      <CheckboxMenu
        heading="Icon"
        items={[
          "Air Force 1",
          "Air Max",
          "Alpha Huarache",
          "Benassi",
          "Blazer",
          "Cortez",
          "Elite",
          "Mercurial",
          "Metcon",
          "Vomero"
        ]}
      />
      <CheckboxMenu
        heading="Collaborator"
        items={[
          "Doernbecher Freestyle",
          
        ]}
      />
      <CheckboxMenu
        heading="Best For"
        items={[
          "Wet Weather Conditions",
          "Cold Weather",
          "Dry Weather Conditions"
        ]}
      />
    </div>
  );
}

export default SidePanel;
