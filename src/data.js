// images
import CommunityImg1 from '../src/assets/img/community/img1.jpg';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.jpg';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import CommunityImg5 from '../src/assets/img/community/img5.jpg';
import CommunityImg6 from '../src/assets/img/community/img6.jpg';
import CommunityImg7 from '../src/assets/img/community/img7.jpg';
import Logo from '../src/assets/img/header/logo.png';
import JoinImg from '../src/assets/img/join/woman.png';
import dumbbellsImg from '../src/assets/img/products/dumbbells.jpg';
import FoamRollersImg from '../src/assets/img/products/foam-rollers.jpg';
import KettleBellsImg from '../src/assets/img/products/kettlebells.jpeg';
import MedicineBallImg from '../src/assets/img/products/medicineball.jpg';
import ResistanceBandImg from '../src/assets/img/products/resistance-bands.jpg';
import SeatedRowMachineImg from '../src/assets/img/products/seatedrowmachine.jpg';
import StationaryBikesImg from '../src/assets/img/products/stationary-bikes.jpg';
import TreadmillImg from '../src/assets/img/products/treadmill.jpg';
import WeightBenchImg from '../src/assets/img/products/trojan-weigth-bench.jpg';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';
import CalendarIcn from '../src/assets/img/products/icons/calendar.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Workouts', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Community', href: '/' },
  { name: 'FAQ', href: '/' },
];

export const banner = {
  titlePart1: 'Elevate Your Fitness Journey',
  titlePart2: '– with JERS AC Gym Equipment.',
  subtitle:
    'JERS AC Gym provides a comprehensive range of gym equipment for a well-rounded fitness experience.',
  textBtn: 'Join Now',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'About Us',
  subtitle1:
    'At JERS AC Gym, we are a haven for individuals committed to transforming their lives through health and wellness. Established with a passion for fostering a community dedicated to physical vitality, we take pride in selling different kinds of Gym Equipment, from dumbbells up to heavy-duty machines.',
  subtitle2:
    'What sets us apart is our unwavering dedication to quality and excellence. We believe that the right tools can elevate your fitness journey, inspiring you to achieve milestones you once thought were beyond reach. Our equipment is sourced from reputable manufacturers, ensuring durability, functionality, and innovation that align with the evolving landscape of fitness.',
  link: 'Shop Now',
};

export const products = {
  icon: CalendarIcn,
  title: 'Browse our products',
  programs: [
    {
      image: dumbbellsImg,
      name: 'Dumbbells',
    },
    {
      image: KettleBellsImg,
      name: 'Kettle Bells',
    },
    {
      image: MedicineBallImg,
      name: 'Medicine Balls',
    },
    {
      image: FoamRollersImg,
      name: 'Foam Rollers',
    },
    {
      image: ResistanceBandImg,
      name: 'Resistance Bands',
    },
    {
      image: SeatedRowMachineImg,
      name: 'Seated Row Machines',
    },
    {
      image: StationaryBikesImg,
      name: 'Stationary Bikes',
    },
    {
      image: TreadmillImg,
      name: 'Treadmills',
    },
    {
      image: WeightBenchImg,
      name: 'Weight Bench',
    },
  ],
};


export const review = {
  icon: CommunityIcn,
  title: 'Reviews',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Shaun J.',
      message:
        '“Ideal for beginners and advanced lifters alike, weight machines offer guided movements that isolate specific muscle groups. They are particularly beneficial for those looking to focus on form and control.”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“As a fitness enthusiast who has made multiple purchases of gym equipment, I can confidently attest to the consistent excellence in quality provided by JERS AC. Each acquisition has reinforced my belief in the brand\'s commitment to delivering top-notch fitness gear.”',
    },
    {
      image: CommunityImg3,
      name: 'Sherrylyn D.',
      message:
        '“Love these for my workouts! Kettlebells provide the foundation for strength training. Their versatility allows for targeted muscle engagement and progressive resistance, making them essential for building both strength and muscle mass.”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“JERS AC has become my go-to for all things fitness. The equipment\'s consistent performance has had a direct impact on my results. It\'s more than just gym gear; it\'s an investment in achieving fitness goals.”',
    },
    {
      image: CommunityImg5,
      name: 'Theoddore S.',
      message:
        '“I\'ve outfitted my home gym entirely with JERS AC, and I couldn\'t be happier. Their diverse range of equipment caters to every fitness level. Whether you\'re a beginner or an advanced athlete, there\'s something for everyone. The consistency in quality across the product line is impressive and makes it easy to recommend to fellow fitness enthusiasts.”',
    },
    {
      image: CommunityImg6,
      name: 'Loelle M.',
      message:
        '“Dumbbells, barbells, and kettlebells provide the foundation for strength training. Their versatility allows for targeted muscle engagement and progressive resistance, making them essential for building both strength and muscle mass.”',
    },
    {
      image: CommunityImg7,
      name: 'Lucille A.',
      message:
        '“Perhaps the most rewarding aspect is the positive impact on my fitness results. The quality of these gym equipment pieces has undoubtedly contributed to the effectiveness of my workouts, helping me achieve and surpass my fitness goals. jersac is wonderful!”',
    }
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'What payment methods does JERS AC Gym accept?',
      answer:
        ' JERS AC Gym accepts a variety of payment methods for your convenience. We accept payment through Gcash, bank transfer, or cash on delivery. Please contact our customer service for the necessary details to facilitate a smooth transaction.',
    },
    {
      question: 'Are there any additional fees associated with certain payment methods?',
      answer:
        'JERS AC Gym strives to keep our payment process transparent and straightforward. We do not impose additional fees for standard payment methods, besides delivery fees.',
    },
    {
      question: 'Can I modify or cancel my order after making a payment?',
      answer:
        'Once an order is confirmed and payment is processed, modifications may be limited. Please contact our customer service immediately if you need to make changes or cancel your order. We\'ll do our best to accommodate your request within the bounds of our policies.',
    },
    {
      question: 'Are the gym equipment products at JERS AC Gym suitable for home use?',
      answer:
        'Absolutely! JERS AC Gym offers a range of gym equipment suitable for home gyms, including compact cardio machines, adjustable dumbbell sets, and versatile accessories. We understand the importance of convenience and space efficiency for home fitness enthusiasts.',
    },
    {
      question: 'How can I determine the right gym equipment for my fitness goals?',
      answer:
        'Our knowledgeable staff at JERS AC Gym is here to assist you. Feel free to visit our showroom or contact us online, and our experts will guide you based on your fitness goals, preferences, and any specific requirements you may have.',
    },
    {
      question: 'What sets JERS AC Gym equipment apart from other brands?',
      answer:
        'The gym equipment at JERS AC Gym is curated with a focus on quality, durability, and user experience. We source products from reputable manufacturers, ensuring that our customers receive reliable, high-performance equipment. Our commitment to excellence and customer satisfaction sets us apart.',
    },
    {
      question: 'Can I get assistance with assembling and setting up the gym equipment I purchase?',
      answer:
        'Yes, JERS AC Gym offers assembly services for your convenience. Simply inquire about this option when making your purchase, and our team will ensure that your equipment is professionally assembled and ready for use.',
    },
    {
      question: 'What is the warranty coverage for JERS AC Gym equipment?',
      answer:
        'JERS AC Gym stands behind the quality of its products. Each piece of equipment comes with a warranty, the details of which vary by product. Please refer to the specific warranty information provided with your purchase or contact our customer service for clarification',
    },
    {
      question: 'How can I place an order for gym equipment from JERS AC Gym?',
      answer:
        'You can conveniently place an order through our website, visit our social media channels, shoppee, or visit our showroom. For any assistance or inquiries, feel free to contact our customer service team, who will guide you through the ordering process and address any questions you may have.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Looking for gym equipment that fit for your fitness goals',
  subtitle:
    'We’ll keep you updated on the new equipments available at Jers AC Gym Equipment and fitness tips!',
  btnText: 'Subscribe to Newsletter',
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. JERS AC Gym Equipment 2023.',
};
