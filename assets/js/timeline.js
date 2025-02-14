document.addEventListener("DOMContentLoaded", function() {
  const timelineContainer = document.getElementById("timeline");
  if (timelineContainer) {
    // Timeline events data
    const events = [
      {
        date: "Jun 2023",
        title: "Recommendation Engine Launched",
        description: "Launched an advanced recommendation engine leveraging Python, Pandas, and ML algorithms."
      },
      {
        date: "Mar 2024",
        title: "College Counseling App Deployed",
        description: "Deployed an innovative app integrating LLMs to streamline internship applications."
      },
      {
        date: "Sep 2024",
        title: "Interactive CNN Demo Released",
        description: "Released a real-time interactive demo of a CNN model using Keras and the MNIST dataset."
      },
      {
        date: "Nov 2024",
        title: "Housing Price Prediction Model",
        description: "Engineered a predictive model with advanced preprocessing and PCA, achieving high accuracy."
      }
    ];

    // Create timeline event elements
    events.forEach(event => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "timeline-event p-4 my-4 bg-white rounded shadow";
      eventDiv.innerHTML = `
        <h3 class="font-montserrat text-teal-600 text-xl">${event.date} - ${event.title}</h3>
        <p class="mt-2">${event.description}</p>
      `;
      timelineContainer.appendChild(eventDiv);
    });
  }
});
