import Element from "./Element"
function Card()
{
    return(
        <div className="flex-col w-[90%] rounded-xl bg-slate-200 p-16 space-y-20">
        <Element heading="Auditorium" comp="Open Air Auditorium
Experience the beauty of nature while enjoying world-class performances at our Open Air Auditorium. This stunning venue offers a unique blend of natural acoustics and breathtaking views, providing an unforgettable setting for concerts, theatrical productions, and cultural events. With comfortable seating and state-of-the-art facilities, it’s the perfect place to enjoy entertainment under the stars.
Indoor Auditorium Step into our state-of-the-art Indoor Auditorium, where modern design meets exceptional acoustics. This versatile venue is equipped with the latest technology to host a variety of events, from concerts and theater productions to conferences and lectures. With comfortable seating, excellent sightlines, and a sophisticated sound system." source="../assets/audi.jpg"/>
        <Element heading="Room" comp="Experience comfort and style in our hotel rooms:

Standard Rooms
Relax in our well-appointed Standard Rooms, featuring modern amenities and cozy furnishings. Ideal for both business and leisure travelers, they provide a welcoming retreat after a day of exploring or meetings.

Suites
Elevate your stay in our luxurious Suites, offering spacious living areas, premium amenities, and stunning views. Perfect for extended stays or special occasions, our Suites provide an unparalleled level of comfort and elegance.

Discover your ideal room and enjoy a memorable stay with us." source="../assets/room3.jpg"/>
        <Element heading="Sports" comp="Open Air Sports
Enjoy outdoor activities in our well-maintained fields and courts, perfect for soccer, tennis, and basketball amidst beautiful surroundings.

Indoor Sports & Gym
Stay fit year-round with our state-of-the-art gym, featuring the latest equipment, and enjoy indoor courts and a swimming pool for various sports and fitness activities.

Explore our facilities for an exceptional sports experience!" source="../assets/gym.jpg" />
        </div>
    )
}
export default Card