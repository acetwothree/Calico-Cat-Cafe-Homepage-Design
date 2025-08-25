export const loadAcuityScheduling = () => {
  // Check if script is already loaded
  if (document.getElementById('acuity-scheduling-script')) return;

  // Load Acuity CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://embed.acuityscheduling.com/embed/button/36746772.css';
  link.id = 'acuity-scheduling-styles';
  document.head.appendChild(link);

  // Load Acuity script
  const script = document.createElement('script');
  script.id = 'acuity-scheduling-script';
  script.src = 'https://embed.acuityscheduling.com/embed/button/36746772.js';
  script.async = true;
  document.body.appendChild(script);

  return () => {
    // Cleanup function
    if (document.getElementById('acuity-scheduling-styles')) {
      document.head.removeChild(link);
    }
    if (document.getElementById('acuity-scheduling-script')) {
      document.body.removeChild(script);
    }
  };
};
