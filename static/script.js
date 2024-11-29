function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.data-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }
  }

  // Ensure no data is visible initially
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.data-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  });