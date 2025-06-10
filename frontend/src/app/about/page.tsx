const About = () => {
  return (
    <div className="">
      {/** about header */}
      <div className="text-center space-y-4 bg-[#f3b391] py-20">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="block text-5xl">Happy Dinca Market</span>
        </h1>
        <h2 className="text-lg font-semibold">
          &ldquo;Buy, sell, and smile — a happy marketplace for everyone.&rdquo;
        </h2>
      </div>

      {/** mission */}
      <div className="bg-[#F6D4BA] py-12">
        <div className="max-w-xl mx-auto">
          <p>
            At Happy Dinca Market, we believe that shopping should be fun,
            simple, and meaningful. Whether you&apos;re giving an item a new
            life or finding something special for yourself, our platform
            connects people through the joy of buying and selling.
          </p>
          <div>
            <h3 className="text-2xl font-semibold">Why ShopDinca?</h3>
            <ul>
              <li>✨ Easy and intuitive shopping experience</li>
              <li>✨ Safe and trusted transactions</li>
              <li>✨ Friendly and supportive community</li>
              <li>✨ Wide selection of categories</li>
            </ul>
          </div>
          <p>
            Looking to discover a great deal? Want to pass along items you no
            longer use? Happy Dinca Market makes it easy for everyone to start
            buying and selling — and to shop with a smile. 😊 ShopDinca welcomes
            you. Join our growing community and enjoy happy shopping!
          </p>
        </div>
      </div>

      {/** team */}
      <div className="bg-[#FEFADC] py-12">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold">Our Team</h3>
          <p>
            The people behind Happy Dinca Market Happy Dinca Market is built by
            a small, passionate team who believe in creating better shopping
            experiences for everyone. We work hard every day to make the
            platform safe, smooth, and delightful to use.
          </p>
        </div>
      </div>
      <div className="bg-[#FEEA00] py-12">
        <div className="max-w-xl mx-auto">
          Our Mission &lquo;Connecting people through happy, meaningful
          exchanges.&rquo; We believe that every item has a story — and that
          great shopping should feel good, for you and the planet. Together,
          we’re building a marketplace that celebrates sustainability,
          community, and joyful discovery.
        </div>
      </div>
      <div className="bg-[#3F612D] text-white py-12">
        <div className="max-w-xl mx-auto">
          <div>
            Meet the Team Iki Founder & Product Designer Bringing a love of
            thoughtful design and a vision for a joyful marketplace, Iki leads
            the creation of Happy Dinca Market. Minho Kim Lead Developer An
            experienced full-stack developer who ensures the platform is fast,
            secure, and scalable. Nana Community & Support Manager Passionate
            about helping users, Nana manages our support channels and works to
            foster a safe and welcoming community. Daz Marketing & Growth
            Manager Focused on spreading the word and growing our community, Daz
            connects Happy Dinca Market with users across the world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
