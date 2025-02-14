// timeline.js

document.addEventListener("DOMContentLoaded", function() {
  // A sample container for your timeline
  const timelineContainer = document.getElementById("timeline");
  if (!timelineContainer) return; // Only run if there's a timeline container

  // Data for timeline events
  const events = [
    {
      date: "Jun 2023",
      title: "Recommendation Engine Launched",
      description: "Created an advanced recommendation engine leveraging Python and ML algorithms."
    },
    {
      date: "Mar 2024",
      title: "College Counseling App Deployed",
      description: "Deployed an app integrating LLMs for streamlined internship applications."
    },
    {
      date: "Sep 2024",
      title: "Interactive CNN Demo Released",
      description: "A real-time interactive demo of CNN operations using the MNIST dataset."
    },
    {
      date: "Nov 2024",
      title: "Housing Price Prediction Model",
      description: "Engineered a model with advanced preprocessing and PCA, achieving a high degree of accuracy."
    }
  ];

  // Dynamically create timeline event elements
  events.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.className = "timeline-event p-4 my-4 bg-white rounded shadow";
    eventDiv.innerHTML = `
      <h3 class="font-montserrat text-teal-600 text-xl mb-1">${event.date} – ${event.title}</h3>
      <p class="mt-2 text-gray-700">${event.description}</p>
    `;
    timelineContainer.appendChild(eventDiv);
  });
});
