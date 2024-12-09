import React from "react";
import logo from "../assets/img/NSU_flag.png"; // Replace with actual image paths
import Cricket_img from "../assets/img/cricket.jpg";
import Health2 from "../assets/img/Health2.jpg";
import Health3 from "../assets/img/Health3.jpg";
import Quiz1 from "../assets/img/Quiz1.jpg";
import Quiz2 from "../assets/img/Quiz2.jpg";
import volleyball from "../assets/img/vollball1.jpg";

const HomePage = () => {
  // Sample event data for Upcoming Events
  const upcomingEvents = [
    {
      title: "Sports Meet 2024",
      date: "Coming Soon",
      location: "Himalaya College of Engineering",
      description: "An exciting sports event to bring students together through friendly competition.",
      category: "Sports",
      image: "path/to/sports-meet-image.jpg", // Example image path
    },
    {
      title: "Health Awareness Campaign",
      date: "Coming Soon",
      location: "Lalitpur District",
      description: "A campaign focused on raising awareness about mental health and well-being.",
      category: "Health",
      image: "path/to/health-campaign-image.jpg", // Example image path
    },
    {
      title: "Tech Innovators Meet",
      date: "Coming Soon",
      location: "Chaysal, Lalitpur",
      description: "A gathering of IT professionals, tech enthusiasts, and students to explore the future of technology.",
      category: "IT",
      image: "path/to/tech-meet-image.jpg", // Example image path
    },
    {
      title: "Educational Reform Conference",
      date: "Coming Soon",
      location: "Kathmandu",
      description: "A conference discussing ways to improve and innovate Nepal's educational system.",
      category: "Education",
      image: "path/to/education-conference-image.jpg", // Example image path
    },
  ];

  // Sample event data for Previous Events Held
  const previousEvents = [
    {
      title: "Ganesh Man singh Memorial INTER-TECH cricket tournament ",
      date: "Completed",
      location: "Pulchowk Ground",
      description: "An annual event that promotes sportsmanship and healthy competition among students.",
      category: "Sports",
      image: Cricket_img, // Example image path
    },
    {
      title: "Health Campaign 2023",
      date: "Completed",
      location: "with the of Kathmandu Medical College",
      description: "A workshop aimed at promoting mental health awareness and well-being.",
      category: "Health",
      image: Health2, // Example image path
    },
    {
      title: "QUIZ CONTEST 2023",
      date: "Completed",
      location: "Himalaya College of Engineering",
      description: "A quiz competition to test students' knowledge and problem-solving skills.",
      category: 'Education',
      image: Quiz1, // Example image path
    },
    {
      title: "Volleyball Tournament ",
      date: "Completed",
      location: "",
      description: " An event that promotes sportsmanship and healthy competition among students.",
      category: "Sports",
      image:volleyball, // Example image path
    },
    
    {
      title: "Health Campaign 2024",
      date: "Completed",
      location: "with the of Kathmandu Medical College",
      description: "A workshop aimed at promoting mental health awareness and well-being.",
      category: "Health",
      image: Health3, // Example image path
    },
    {
      title: "QUIZ CONTEST 2024",
      date: "Completed",
      location: "Himalaya College of Engineering",
      description: "A quiz competition to test students' knowledge and problem-solving skills.",
      category: 'Education',
      image: Quiz2, // Example image path
    },
  ];

  return (
    <div className="home-page bg-gray-50 pt-12">

      {/* NSU Section */}
      <div className="nsu-section bg-green-100 py-8 mb-12 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-green-800">About Nepal Student Union</h2>
        </div>
        <div className="px-4 sm:px-10">
          <p className="text-lg text-gray-700 mb-6">
            The **Nepal Student Union (NSU)** is one of the most influential student organizations in Nepal, representing the voice of students in educational, political, and social matters. NSU is a platform that empowers students to raise their voices for their rights, push for reforms, and create a better future.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Since its inception, NSU has been at the forefront of advocating for student rights, education reform, and social justice. Through its campaigns, NSU unites students from diverse backgrounds, fostering solidarity and collaboration among them.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The organization believes that the youth are the future of the nation, and by nurturing their potential, NSU aims to create a strong, educated, and socially responsible generation that will lead the country forward.
          </p>
        </div>
      </div>

      {/* NSU's Vision in Various Fields Section */}
      <div className="nsu-vision bg-white py-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-800">NSU's Vision in Various Fields</h2>
        </div>
        <div className="flex flex-wrap justify-around px-4 sm:px-10">
          {/* Vision in Education */}
          <div className="vision-card bg-green-50 p-6 rounded-lg shadow-lg mb-6 w-80">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Education</h3>
            <p className="text-lg text-gray-700">
              NSU envisions an accessible and quality education for all. We work towards improving the education system, ensuring that every student, regardless of background, has access to knowledge and opportunities.
            </p>
          </div>

          {/* Vision in Sports */}
          <div className="vision-card bg-green-50 p-6 rounded-lg shadow-lg mb-6 w-80">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Sports</h3>
            <p className="text-lg text-gray-700">
              NSU believes that sports foster teamwork, discipline, and leadership skills. We aim to promote sports as an essential part of student life, encouraging healthy competition and participation in physical activities.
            </p>
          </div>

          {/* Vision in Politics */}
          <div className="vision-card bg-green-50 p-6 rounded-lg shadow-lg mb-6 w-80">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Politics</h3>
            <p className="text-lg text-gray-700">
              NSU stands for a politically active student community that contributes to democratic processes. We aim to educate students about their rights, responsibilities, and the importance of participation in shaping the political landscape.
            </p>
          </div>

          {/* Vision in Society */}
          <div className="vision-card bg-green-50 p-6 rounded-lg shadow-lg mb-6 w-80">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Society</h3>
            <p className="text-lg text-gray-700">
              NSU's vision for society is based on unity, equality, and social justice. We strive to create a society where every individual is valued and empowered, regardless of their background or circumstances.
            </p>
          </div>
        </div>
      </div>

       {/* Previous Events Held Section */}
       <div className="previous-events text-center px-4 mb-12">
        <h2 className="section-title text-4xl font-bold text-green-800 mb-8">Previous Events Held</h2>
        <div className="events-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {previousEvents.map((event, index) => (
            <div
              key={index}
              className="event-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="event-image mb-4 w-full h-48 object-cover rounded-lg"
              />
              <h3 className="event-title text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="event-date text-gray-600 mb-2">{event.date}</p>
              <p className="event-location text-gray-600 mb-4">{event.location}</p>
              <p className="event-description text-gray-700">{event.description}</p>
              <p className="event-category text-green-600 font-semibold mt-2">
                Category: {event.category}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="event-details text-center px-4 mb-12">
        <h2 className="section-title text-4xl font-bold text-green-800 mb-8">Upcoming Events</h2>
        <div className="events-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="event-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
            
              <h3 className="event-title text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="event-date text-gray-600 mb-2">{event.date}</p>
              <p className="event-location text-gray-600 mb-4">{event.location}</p>
              <p className="event-description text-gray-700">{event.description}</p>
              <p className="event-category text-green-600 font-semibold mt-2">
                Category: {event.category}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="jay-nepal flex justify-center text-center bg-green-800 text-white py-1">
        <h2 className="text-2xl font-semibold ">Jay Nepal</h2>
      
      </div>



     

    </div>
  );
};

export default HomePage;
