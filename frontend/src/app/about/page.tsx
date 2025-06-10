import { AuroraText } from '@/components/magicui/aurora-text';
import Link from 'next/link';

const About = () => {
  return (
    <div className="px-4">
      {/** about header */}
      <div className="text-center space-y-4 py-8 md:py-30">
        <h1 className="text-2xl md:text-5xl font-bold">
          Welcome to
          <span className="block text-6xl md:text-8xl">
            <AuroraText colors={['#F6D4BA, #FEEA00, #F3B391']}>
              VANCART
            </AuroraText>
          </span>
        </h1>
        <p className="text-lg font-semibold">
          &ldquo;Buy, sell, and smile — a happy marketplace for everyone in
          Vancouver.&rdquo;
        </p>
      </div>
      <div className="pb-12">
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
      {/** Why Vancart */}
      <div className="pb-12">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-4xl font-semibold">Why VANCART?</h2>
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
        <div className="space-y-5 rounded-2xl p-6 bg-gradient-to-br from-[#F6D4BA]/50 to-white relative h-full">
          <h2 className="text-4xl font-semibold">How It Works</h2>
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
        {/** our values*/}
        <div className="space-y-5 rounded-2xl p-6 bg-gradient-to-tl from-[#FEEA00]/50 to-white relative">
          <h2 className="text-4xl font-semibold">Our Values</h2>
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
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-4xl font-semibold">Our Team</h2>
            <p className="text-muted-foreground">The people behind VANCART</p>
            <p>
              VANCART is built by a small, passionate team who believe in
              creating better shopping experiences for everyone. We work hard
              every day to make the platform safe, smooth, and delightful to
              use.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Iki</strong>
                <span className="text-sm">Community & Experience Lead</span>
                <span className="text-xs text-muted-foreground">
                  Keeps everything running smoothly.
                </span>
              </li>
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Nana</strong>
                <span className="text-sm">Founder & Creative Director</span>
                <span className="text-xs text-muted-foreground">
                  Shapes the vision, design, and experience of Vancart
                </span>
              </li>
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Daz</strong>
                <span className="text-sm">Engineer</span>
                <span className="text-xs text-muted-foreground">
                  Builds and maintains our platform.
                </span>
              </li>
              <li className="flex flex-col items-center text-center h-full bg-gradient-to-t from-gray-100 to-gray-50 rounded-xl p-5">
                <div className="rounded-full w-[100px] h-[100px] bg-white mb-2"></div>
                <strong className="font-semibold">Chloe</strong>
                <span className="text-sm">Marketing & Growth</span>
                <span className="text-xs text-muted-foreground">
                  Spreads the word and grows our community.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/** join us */}
      <div className="pt-12 pb-18 relative">
        <div className="max-w-2xl mx-auto bg-amber-200/30 rounded-2xl p-10 space-y-3">
          <h2 className="text-4xl font-bold">Join Us!</h2>

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
