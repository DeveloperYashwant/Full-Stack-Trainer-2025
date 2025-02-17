
const courses = [
  {
      title: "React JS",
      subtitle: "Frontend Library Development",
      category: "frontend",
      image: "assets/images/reactjs.jpeg"
  },
  {
      title: "Node JS",
      subtitle: "Backend Runtime Environment",
      category: "backend",
      image: "assets/images/node-js.png"
  },
  {
      title: "Python Programming",
      subtitle: "General Purpose Programming Language",
      category: "backend",
      image: "assets/images/python.jfif"
  },
  {
      title: "AWS Certified",
      subtitle: "Cloud Computing Services",
      category: "cloud",
      image: "assets/images/aws.avif"
  },
  {
      title: "Flutter Development",
      subtitle: "Cross-Platform Mobile Framework",
      category: "mobile",
      image: "assets/images/flutter.jfif"
  },
  {
      title: "Docker Essentials",
      subtitle: "Containerization Platform",
      category: "cloud",
      image: "assets/images/docker.jfif"
  },
  {
      title: "Spring Boot",
      subtitle: "Java Backend Framework",
      category: "backend",
      image: "assets/images/spring.png"
  },
  {
      title: "Angular Framework",
      subtitle: "Enterprise Frontend Development",
      category: "frontend",
      image: "assets/images/angular.png"
  }
];

// DOM Elements
const coursesGrid = document.getElementById('coursesGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

// Initialize courses
function initializeCourses() {
  coursesGrid.innerHTML = courses.map(course => `
      <div class="course-card" data-category="${course.category}">
          <img src="${course.image}" alt="${course.title}" class="course-image">
          <div class="course-content">
              <h3 class="course-title">${course.title}</h3>
              <p class="course-subtitle">${course.subtitle}</p>
              <button class="enroll-btn">Enroll Now</button>
          </div>
      </div>
  `).join('');
}

// Filter courses
function filterCourses() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const cards = document.querySelectorAll('.course-card');

  cards.forEach(card => {
      const title = card.querySelector('.course-title').textContent.toLowerCase();
      const subtitle = card.querySelector('.course-subtitle').textContent.toLowerCase();
      const category = card.dataset.category;

      const matchesSearch = title.includes(searchTerm) || subtitle.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

      card.classList.toggle('hidden', !(matchesSearch && matchesCategory));
  });
}

// Event Listeners
searchInput.addEventListener('input', filterCourses);
categoryFilter.addEventListener('change', filterCourses);

// Initial load
initializeCourses();
filterCourses();
