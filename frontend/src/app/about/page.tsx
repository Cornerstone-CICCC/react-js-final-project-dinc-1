import { AuroraText } from '@/components/magicui/aurora-text';
import Link from 'next/link';

const About = () => {
  return (
    <div className="px-4">
      {/** about header */}
      <div className="text-center space-y-4 py-8 md:py-30">
        <h1 className="text-2xl md:text-5xl font-bold">
          Welcome to
          <span className="block text-5xl md:text-8xl">
            <AuroraText colors={['#F6D4BA, #FEEA00, #F3B391']}>
              VANCART
            </AuroraText>
          </span>
        </h1>
        <h2 className="text-lg font-semibold">
          &ldquo;Buy, sell, and smile — a happy marketplace for everyone in
          Vancouver.&rdquo;
        </h2>
      </div>
      <div className="pb-12">
        {/**bg-[#F6D4BA] */}
        <div className="max-w-2xl mx-auto space-y-5">
          <p>
            At <strong>VANCART</strong>, we believe that shopping should be
            easy, fun, and for everyone. Whether you&apos;re giving an item a
            new life or finding something special for yourself, our platform
            connects people through simple and joyful buying and selling.
          </p>
          <p className="text-foreground">
            We&apos;re building more than just a marketplace — we&apos;re
            creating a local community where sustainable choices, exciting
            finds, and happy connections come together.
          </p>
        </div>
      </div>
      <div className="pb-12">
        {/**bg-[#F6D4BA] */}
        <div className="max-w-2xl mx-auto space-y-5">
          <h3 className="text-2xl font-semibold">Why VANCART?</h3>
          <ul className="space-y-3">
            <li>✨ Simple and intuitive shopping experience</li>
            <li>✨ Safe and trusted transactions</li>
            <li>✨ Friendly and supportive community</li>
            <li>✨ Wide range of categories — new & used items</li>
          </ul>
          <p className="text-foreground">
            Looking to discover a great deal? Want to pass along items you no
            longer need? <strong>VANCART</strong> makes it easy for everyone to
            start buying and selling — and to shop with a smile. 😊 Join our
            growing community and enjoy happy shopping!
          </p>
        </div>
      </div>
      {/** how it works */}
      <div className="py-8 max-w-4xl mx-auto space-y-4 md:grid md:grid-cols-2 md:gap-4">
        <div className="space-y-5 rounded-2xl p-4 bg-gradient-to-br from-[#F6D4BA]/50 to-white relative h-full">
          <h3 className="text-4xl font-semibold">How It Works</h3>
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
        <div className="space-y-5 rounded-2xl p-4 bg-gradient-to-tl from-[#FEEA00]/50 to-white relative">
          <h3 className="text-4xl font-semibold">Our Values</h3>
          <ul className="space-y-3">
            <li>
              <strong>🌱 Sustainability</strong> — We encourage giving items a
              second life, reducing waste, and promoting mindful consumption.
            </li>
            <li>
              <strong>🤝 Community</strong> — We foster a safe, supportive, and
              respectful environment where everyone can buy and sell with
              confidence.
            </li>
            <li>
              <strong>✨ Simplicity</strong> — We believe shopping should be
              easy, joyful, and stress-free for all users.
            </li>
            <li>
              <strong>🌍 Inclusivity</strong> — VANCART is for everyone, no
              matter your age or background — everyone is welcome here!
            </li>
          </ul>
        </div>
      </div>
      {/** team */}
      <div className="py-12 relative">
        <div className="space-y-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold">Our Team</h3>
            <h4>The people behind Happy Dinca Market</h4>
            <p>
              Happy Dinca Market is built by a small, passionate team who
              believe in creating better shopping experiences for everyone. We
              work hard every day to make the platform safe, smooth, and
              delightful to use.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Daz</strong>
                <span className="text-sm">Marketing & Growth</span>
                <span className="text-xs text-muted-foreground">
                  Spreads the word and grows our community.
                </span>
              </li>
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Iki</strong>
                <span className="text-sm">Community & Support</span>
                <span className="text-xs text-muted-foreground">
                  Helps users and builds a friendly community.
                </span>
              </li>
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Nana</strong>
                <span className="text-sm">Founder & Design</span>
                <span className="text-xs text-muted-foreground">
                  Leads product design and vision.
                </span>
              </li>
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Chloe</strong>
                <span className="text-sm">Lead Developer</span>
                <span className="text-xs text-muted-foreground">
                  Builds and maintains our platform.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-12 pb-18 relative">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-semibold">Join Us!</h3>

          <p>Ready to start buying and selling with ease and confidence?</p>
          <p>
            <Link href={'/signup'} className="underline">
              👉 Sign up today
            </Link>{' '}
            and become part of the <strong>VANCART</strong> community.
            Let&apos;s create a marketplace that’s joyful, sustainable, and easy
            — together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
