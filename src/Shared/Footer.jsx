const Footer = () => {
  return (
    <>
      <footer className="footer mt-16 p-10 bg-base-200 text-base-content">
        <div>
          {/* <img
            className="rounded-full w-20 h-16 pr-3"
            src="https://previews.123rf.com/images/duug/duug1206/duug120600003/13966994-sport-logo.jpg"
            alt=""
          /> */}
          <a className="  uppercase text-2xl font-medium">
            College Booking Facilities
          </a>
          <p>A Platform to dream come true.</p>
        </div>
        <div>
          <span className="footer-title">Contacts</span>
          <p>
            <span className="font-medium">Phone:</span> 01300000000
          </p>
          <p>
            <span className="font-medium">Email: </span> college@gmail.com
          </p>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p className="font-medium ">Banani,Dhaka</p>
          <p className="font-medium ">Chittagong,Hazibag</p>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
