import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 flex flex-col p-5">
        <h1 className="text-2xl font-bold uppercase">ShopFlow .</h1>
        <p className="my-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex">
          <div
            className="w-10 h-10 rounded-full bg-[#3B5999] text-white flex items-center justify-center mr-5"
            title="Facebook"
          >
            <Facebook />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-[#E4405F] text-white flex items-center justify-center mr-5"
            title="Instagram"
          >
            <Instagram />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-[#55ACEE] text-white flex items-center justify-center mr-5"
            title="Twitter"
          >
            <Twitter />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-[#E60023] text-white flex items-center justify-center"
            title="Pinterest"
          >
            <Pinterest />
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex-1 p-5 hidden md:block">
        <h3 className="text-lg font-semibold mb-7">Useful Links</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          {[
            "Home",
            "Cart",
            "Man Fashion",
            "Woman Fashion",
            "Accessories",
            "My Account",
            "Order Tracking",
            "Wishlist",
            "Terms",
          ].map((item, index) => (
            <li key={index} className="w-1/2 mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-5 bg-[#fff8f8] md:bg-transparent">
        <h3 className="text-lg font-semibold mb-7">Contact</h3>
        <div className="mb-5 flex items-center">
          <Room className="mr-2" /> 622 Dixie Path, South Tobinchester 98336
        </div>
        <div className="mb-5 flex items-center">
          <Phone className="mr-2" /> +1 234 56 78
        </div>
        <div className="mb-5 flex items-center">
          <MailOutline className="mr-2" /> contact@msaqib11
        </div>
        <img
          className="w-1/2"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Payment Methods"
        />
      </div>
    </div>
  );
};

export default Footer;
