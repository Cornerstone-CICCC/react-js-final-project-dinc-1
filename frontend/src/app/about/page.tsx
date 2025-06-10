import { AuroraText } from '@/components/magicui/aurora-text';
import Link from 'next/link';

const About = () => {
  return (
    <div className="px-4">
      {/** about header */}
      <div className="text-center space-y-4 py-8 md:py-30">
        <h1 className="text-2xl md:text-5xl font-bold">
          Welcome to
          <span className="block text-5xl md:text-7xl">
            <AuroraText colors={['#F6D4BA, #FEEA00, #F3B391']}>
              Happy Dinca Market
            </AuroraText>
          </span>
        </h1>
        <h2 className="text-lg font-semibold">
          &ldquo;Buy, sell, and smile — a happy marketplace for everyone.&rdquo;
        </h2>
      </div>
      {/** mission */}
      <div className=" py-12">
        {/**bg-[#F6D4BA] */}
        <div className="max-w-4xl mx-auto space-y-5">
          <p>
            At <strong>Happy Dinca Market</strong>, we believe that shopping
            should be fun, simple, and meaningful. Whether you&apos;re giving an
            item a new life or finding something special for yourself, our
            platform connects people through the joy of buying and selling.
          </p>
          <p>
            We&apos;re building more than just a marketplace — we&apos;re
            creating a community where sustainable choices, delightful
            discoveries, and happy connections come together.
          </p>
          <div>
            <h3 className="text-2xl font-semibold">Why Happy Dinca?</h3>
            <ul className="space-y-3">
              <li>✨ Easy and intuitive shopping experience</li>
              <li>✨ Safe and trusted transactions</li>
              <li>✨ Friendly and supportive community</li>
              <li>✨ Wide selection of categories</li>
            </ul>
          </div>
          <p>
            Looking to discover a great deal? Want to pass along items you no
            longer use? Happy Dinca Market makes it easy for everyone to start
            buying and selling — and to shop with a smile. 😊 Join our growing
            community and enjoy happy shopping!
          </p>
        </div>
      </div>
      {/** how it works */}
      <div>
        <div>
          <h3 className="text-2xl font-semibold">How It Works</h3>
          <ol className="space-y-3">
            <li>
              <strong>Browse</strong> our wide selection of categories — from
              fashion and home goods to collectibles and more.
            </li>
            <li>
              <strong>Buy</strong> safely and securely with trusted payment
              options and community guidelines.
            </li>
            <li>
              <strong>Sell</strong> your items easily, give them a second life,
              and connect with buyers who’ll appreciate them.
            </li>
            <li>
              <strong>Engage</strong> with our friendly community — we believe
              that every transaction can be a positive experience.
            </li>
          </ol>
        </div>
      </div>
      {/** our value */}
      Our Values — 🤝 Community — 😊 Joyful Discovery — We believe that shopping
      should be delightful — a place to find hidden gems and meaningful items.
      <div>
        <div>
          <h3 className="text-2xl font-semibold">Our Values</h3>
          <ul className="space-y-3">
            <li>
              <strong>🌱 Sustainability </strong> We encourage giving items a
              second life, reducing waste, and promoting mindful consumption.
            </li>
            <li>
              <strong>🤝 Community</strong> We foster a safe, supportive, and
              respectful environment where everyone can shop and sell with
              confidence.
            </li>
            <li>
              <strong>Sell</strong> your items easily, give them a second life,
              and connect with buyers who’ll appreciate them.
            </li>
            <li>
              <strong>Engage</strong> with our friendly community — we believe
              that every transaction can be a positive experience.
            </li>
          </ul>
        </div>
      </div>
      {/** team */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto text-right">
          <h3 className="text-2xl font-semibold">Our Team</h3>
          <h4>The people behind Happy Dinca Market</h4>
          <p>
            Happy Dinca Market is built by a small, passionate team who believe
            in creating better shopping experiences for everyone. We work hard
            every day to make the platform safe, smooth, and delightful to use.
          </p>
          <div>
            <ul>
              <li>
                <strong>Nana</strong> Founder & Product Designer Bringing a love
                of thoughtful design and a vision for a joyful marketplace, Iki
                leads the creation of Happy Dinca Market.
              </li>
              <li>
                <strong>Iki</strong> Community & Support Manager Passionate
                about helping users, Nana manages our support channels and works
                to foster a safe and welcoming community.
              </li>
              <li>
                <strong>Daz</strong> Marketing & Growth Manager Focused on
                spreading the word and growing our community, Daz connects Happy
                Dinca Market with users across the world.
              </li>
              <li>
                <strong>Chloe</strong> Lead Developer An experienced full-stack
                developer who ensures the platform is fast, secure, and
                scalable.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-4xl mx-auto text-right">
          <h3>Join Us!</h3>

          <p>Ready to start buying and selling with a smile?</p>
          <p>
            👉 <Link href={'/signup'}>Sign up today</Link> and become part of
            the Happy Dinca Market community. Let&apos;s create a marketplace
            that’s joyful, sustainable, and fun — together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
