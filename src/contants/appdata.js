import { fadeIn } from "./motion";

export const links = [
  {
    link: "/",
    text: "Home",
    exact: true,
  },
  {
    link: "/booking?index=1",
    text: "Transfers",
    exact: true,
  },
  {
    link: "/local",
    text: "Local Transfers",
    exact: true,
  },
  {
    link: "/services",
    text: "Services",
  },
  {
    link: "/our-fleet",
    text: "Our Fleet",
    keyword: true,
  },
  {
    link: "/about-us",
    text: "About Us",
  },
];

// carousel array
export const profile = [
  {
    title: "Profile",
    img: "/banner-1.jpg",
    text: "Select your favored vehicle, timetable, and objective effortlessly. Secure your booking on the web now for a consistent encounter.",
    icon: "paint-brush",
  },
  {
    title: "Quotes",
    text: "Your definitive decision for lavish or high-limit transport, whenever, anyplace in Melbourne.",
    icon: "quote-left",
    img: "/banner-2.jpg",
  },
  {
    title: "Inspiration",
    text: "Find our spic and span Limolux vehicle administration, conveying unmatched class and accommodation.",
    img: "/banner-3.jpg",
    icon: "lightbulb",
  },
];

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.jpg",
    title: "Secure, Dependable, and Opulent",
    description:
      "At Limolux, we understand your desires – a seasoned chauffeur behind the wheel, complemented by a flawlessly stylish ride.",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.jpg",
    title: "Vehicles For Any Occasion",
    description:
      "From Unmatched Luxury to Spacious Comfort: Limolux Awaits Your Selection!",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.jpg",
    title: "Need Wedding Transportation?",
    description:
      "On your wedding day, Limolux delivers the ultimate luxury ride for an unforgettable journey.",
  },
];

export const homeCards = [
  {
    img: "/home-car-1.jpg",
    title: "Our Vision",
    description:
      "Transforming transportation with real-time vehicle tracking for peak efficiency and minimal downtime.",
  },
  {
    img: "/car-6.jpg",
    title: "Our Mission",
    description:
      "Empowering progress through innovative solutions and cutting-edge technology, our mission is to drive efficiency, enhance experiences, and create lasting value for our stakeholders.",
  },
  {
    img: "/car-7.jpg",
    title: "Our Approach",
    description:
      "Crafting success through a strategic and adaptive approach, we navigate challenges with creativity, innovation, and a commitment to excellence.",
  },
];

export const serviceList = [
  {
    id: 1,
    text: "Experience top-level unwavering quality and extravagance with our Melbourne Air terminal exchanges. Whether you're an independent voyager or with family, we offer a warm meet-and-welcome help, gear help, and continuous traffic and flight following for reliable appearances. Sit back, loosen up, and show up revived, day or night.",
    title: "Airport transfers",
    img: "/airport-transfer-update.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 2,
    text: "Hoist the recollections of your impending exceptional occasion with Limolux. Whether it's a wedding, hen's party, or birthday festivity, add a bit of extravagance with our flawless vehicles. Need space for an enormous gathering? Arrive in ultimate style, day or night, with our 15-seater Mercedes Benz Runner at your service. It's not just transportation; it's an experience tailored to ensure you and your guests make a grand entrance.",
    title: "Weddings and parties",
    img: "/parties.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 3,
    text: "Limolux escort excels in corporate, executive, and celebrity transportation, ensuring a serene and seamless journey on every ride. Whether you're meeting a valued client or attending a pivotal business appointment, our service ensures you arrive in a state of relaxation and rejuvenation, allowing you to concentrate on what truly matters. We take pride in delivering smooth, expert, and dependable experiences, without fail.",
    title: "Corporate transfers",
    img: "/blog-3.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 4,
    text: "From a speedy parent-and-kid escape to a full-scale family experience, permit us to work on your family travel insight. Going with a baby? We'll deal with the pre-establishment of any necessary seats before we show up. Limolux offers a safe, reliable, and extravagant answer for all your family transportation prerequisites. While arranging your next family get-away, make sure to hold an air terminal exchange with Limolux to guarantee a tranquil and agreeable beginning to your excursion.",
    title: "Family transfers",
    img: "/family-transfer.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 5,
    text: "Melbourne positions among Australia's top traveler areas of interest, and Limolux offers you a definitive freedom to find the state's famous attractions. Permit us to direct you along the pleasant Extraordinary Sea Street in sheer plushness, empowering you to appreciate the view and encounters at your own relaxed speed.",
    title: "Sightseeing",
    img: "/sightseeing.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 6,
    text: "Investigate Victoria's head wineries and shop bottling works, crossing from the Mornington Promontory to the Yarra Valley. Travel flawlessly and securely between these uncommon locations in our lavish driver driven vehicles. Whether it's a heartfelt event with an accomplice or a gathering experience, raise your involvement in Limolux, and do it with unequaled style.",
    title: "Wine tours",
    img: "/wine-tour.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 7,
    text: "For the people who request only the best, entertain yourself with our top-level cars, guaranteeing your appearance radiates lavishness and complexity. Our premium fleet proudly showcases regarded models like the BMW 7 Series, Mercedes Benz S-Class, and Audi A8, among others, famous for their unparalleled solace and execution in the present market. Matched with our master drivers, you're in for a sumptuous and raised insight.",
    title: "Limo service",
    img: "/limo-service.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
];

export const insights = [
  {
    imgUrl: "/car-1.jpg",
    title: "Luxury Sedan",
    subtitle:
      "Experience the encapsulation of luxury with Limolux's astonishing decision of premium vehicles. Whether you pick a Mercedes-Benz E-Class, BMW 5 Series, Lexus ES300, or a similar upscale model, our extent of lavishness vehicles is planned to lift every occasion. Lower yourself in the predictable blend of cutting edge development, unequaled comfort, and unparalleled sensibility all at a sensible expense. Find the allure of refinement as you set out on your cycle in style with Limolux.",
  },
  {
    imgUrl: "/premium-sedan.jpg",
    title: "Premium Sedan",
    subtitle:
      "Limolux presents a handpicked determination of the best extravagance vehicles for the individuals who request only awesome. Look over the lofty BMW 7 Series, the notorious Mercedes-Benz S-Class, the modern Audi A8, or practically identical tip top models. Our vehicles are not simply include pressed; they address the zenith of current extravagance cars. With Limolux, you'll make a stupendous entry, blowing some people's minds and delighting in outright style and solace. Lift your appearance and have an enduring effect with our impeccable fleet of luxury automobiles.",
  },
  {
    imgUrl: "/car-3.jpg",
    title: "Luxury SUV",
    subtitle:
      "Limolux offers an answer for those looking for both more than adequate baggage limit and positive extravagance. Investigate our determination of premium SUVs, including the Mercedes-Benz GLE, BMW X5, and comparable upscale models. These extravagance SUVs give similar remarkable elements tracked down in our extravagance cars while offering additional room for your possessions. Express farewell to splits the difference and raise your movement experience with Limolux's sumptuous SUVs, where style and capacity flawlessly coincide.",
  },
  {
    imgUrl: "/car-4.jpg",
    title: "Van",
    subtitle:
      "Find the Mercedes-Benz V-Class, a top decision for obliging 5-6 travelers easily with more than adequate baggage space. This open extravagance individual’s mover flaunts enormous back seats and a liberal boot, guaranteeing a smooth and spacious excursion. Prestigious overall for its flexibility, the Mercedes V-Class sets the norm for moving travelers in style and refinement. Raise your gathering travel insight with this remarkable vehicle from Limolux.",
  },
  {
    imgUrl: "/car-5.jpg",
    title: "Transporter",
    subtitle:
      "Limolux gladly presents the Mercedes-Benz Runner and Renault Masterbus, ideal for obliging bigger gatherings of up to eleven individuals. These lofty vehicles are the favored decision for leaders, as well as those looking for consistent transportation for air terminal exchanges, weddings, and corporate occasions. Raise your gathering travel insight with Limolux, where extravagance, solace, and style combine. For requests, if it's not too much trouble, connect with us today. Your excursion with us starts with a straightforward call.",
  },
];

export const steps = [
  {
    name: "Enter Ride Details",
  },
  {
    name: "Choose a Vahicle",
  },
  {
    name: "Enter Contact Details",
  },
  {
    name: "Booking Summary",
  },
];

export const pickupTime = [
  "12:00 am",
  "12:15 am",
  "12:30 am",
  "12:45 am",
  "1:00 am",
  "1:15 am",
  "1:30 am",
  "1:45 am",
  "2:00 am",
  "2:15 am",
  "2:30 am",
  "2:45 am",
  "3:00 am",
  "3:15 am",
  "3:30 am",
  "3:45 am",
  "4:00 am",
  "4:15 am",
  "4:30 am",
  "4:45 am",
  "5:00 am",
  "5:15 am",
  "5:30 am",
  "5:45 am",
  "6:00 am",
  "6:15 am",
  "6:30 am",
  "6:45 am",
  "7:00 am",
  "7:15 am",
  "7:30 am",
  "7:45 am",
  "8:00 am",
  "8:15 am",
  "8:30 am",
  "8:45 am",
  "9:00 am",
  "9:15 am",
  "9:30 am",
  "9:45 am",
  "10:00 am",
  "10:15 am",
  "10:30 am",
  "10:45 am",
  "11:00 am",
  "11:15 am",
  "11:30 am",
  "11:45 am",
  "12:00 pm",
  "12:15 pm",
  "12:30 pm",
  "12:45 pm",
  "1:00 pm",
  "1:15 pm",
  "1:30 pm",
  "1:45 pm",
  "2:00 pm",
  "2:15 pm",
  "2:30 pm",
  "2:45 pm",
  "3:00 pm",
  "3:15 pm",
  "3:30 pm",
  "3:45 pm",
  "4:00 pm",
  "4:15 pm",
  "4:30 pm",
  "4:45 pm",
  "5:00 pm",
  "5:15 pm",
  "5:30 pm",
  "5:45 pm",
  "6:00 pm",
  "6:15 pm",
  "6:30 pm",
  "6:45 pm",
  "7:00 pm",
  "7:15 pm",
  "7:30 pm",
  "7:45 pm",
  "8:00 pm",
  "8:15 pm",
  "8:30 pm",
  "8:45 pm",
  "9:00 pm",
  "9:15 pm",
  "9:30 pm",
  "9:45 pm",
  "10:00 pm",
  "10:15 pm",
  "10:30 pm",
  "10:45 pm",
  "11:00 pm",
  "11:15 pm",
  "11:30 pm",
  "11:45 pm",
];
